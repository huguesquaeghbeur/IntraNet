using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using IntraNetAPI.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;

namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("intranet/v1/collaborator")]
    public class CollaboratorController : Controller
    {
        DataContext _data;
        IRepository<Department> _departmentRepository;

        public CollaboratorController(DataContext data, IRepository<Department> departmentRepository)
        {
            _data = data;
            _departmentRepository = departmentRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_data.Collaborators.Include(c => c.Bills).ThenInclude(b => b.Spents.OrderByDescending(s => s.ExpenseDate)).ThenInclude(s => s.Proofs).Include(c => c.Holidays).Include(c => c.Missions).ToList());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Collaborator collaborator = _data.Collaborators.Find(id);
            if (collaborator != null)
            {
                return Ok(collaborator);
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromForm] string FirstName, [FromForm] string LastName, [FromForm] DateTime Birthday, [FromForm] int Department, [FromForm] int Status, [FromForm] bool IsAdmin, [FromForm] bool IsActive, [FromForm] int HalfDayBreak, [FromForm] string Email, [FromForm] string Password)
        {
            Collaborator collaborator = new Collaborator()
            {
                FirstName = FirstName,
                LastName = LastName,
                Birthday = Birthday,
                Department = _data.Departments.Find(Department),
                Status = (Collaborator.StatusEnum) Status,
                IsAdmin = IsAdmin,
                IsActive = IsActive,
                HalfDayBreak = 60,
                Email = Email,
                Password = Password
            };

            _data.Collaborators.Add(collaborator);
            if (_data.SaveChanges() > 0)
            {
                return Ok(new { Success = true,  Message = "Collaborateur ajouter", Collaborator = collaborator });
            }
            return Ok(new { Success = false, Message = "Une erreur est survenue" });
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] Collaborator newCollaborator)
        {
            Collaborator collaborator = _data.Collaborators.Find(id);
            if (collaborator != null)
            {
                collaborator.FirstName = newCollaborator.FirstName ?? collaborator.FirstName;
                collaborator.LastName = newCollaborator.LastName ?? collaborator.LastName;
                //collaborator.Birthday = newCollaborator.Birthday ?? collaborator.Birthday;
                //collaborator.HalfDayBreak = newCollaborator.HalfDayBreak ?? collaborator.HalfDayBreak;
                collaborator.Email = newCollaborator.Email ?? collaborator.Email;
                collaborator.Password = newCollaborator.Password ?? collaborator.Password;

                if (_data.SaveChanges() > 0)
                {
                    return Ok(new { Success = true, Message = "Données du collaborateur mise à jour" });
                }
                return Ok(new { Success = false, Message = "Une erreur est survenue" });
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Collaborator collaborator = _data.Collaborators.Find(id);
            if (collaborator != null)
            {
                _data.Collaborators.Remove(collaborator);
                if (_data.SaveChanges() > 0)
                {
                    return Ok(new { Message = "Collaborator deleted" });
                }
                return Ok(new { Message = "Error" });
            }
            return NotFound();
        }

        [HttpPost("login")]
        public IActionResult Login([FromForm] string email, [FromForm] string password)
        {
            Collaborator collaborator = _data.Collaborators.Include(c=>c.Bills).ThenInclude(b => b.Spents.OrderByDescending(s => s.ExpenseDate)).ThenInclude(s => s.Proofs).Include(c => c.Holidays).Include(c => c.Missions).Where(c => c.Email == email && c.Password == password).FirstOrDefault();
            if(collaborator != null)
                return Ok(new { Success = true, Message = "Vous êtes connecter", collaborator = collaborator } );
            return Ok(new { Success = false, Message = "Mail ou mot de passe incorrect" });

        }

        [HttpGet("department/{departmentId}")]
        public IActionResult GetByDepartmentId(int departmentId)
        {
            return Ok(_data.Collaborators.Include(c => c.Bills).ThenInclude(b => b.Spents.OrderByDescending(s => s.ExpenseDate)).ThenInclude(s => s.Proofs).Include(c => c.Holidays).Include(c => c.Missions).Where(c=> c.DepartmentId==departmentId).ToList());
        }
    }
}
