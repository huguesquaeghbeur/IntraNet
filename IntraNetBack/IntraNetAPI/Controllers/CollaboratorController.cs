using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Services;
using Microsoft.AspNetCore.Cors;


namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("intranet/v1/collaborator")]
    public class CollaboratorController : Controller
    {
        DataContext _data;
        IRepository<Department> _departmentRepository;
        IRepository<Collaborator> _collaboratorRepository;
        LoginService _loginService;

        public CollaboratorController(DataContext data, IRepository<Department> departmentRepository, IRepository<Collaborator> collaboratorRepository, LoginService loginService)
        {
            _data = data;
            _departmentRepository = departmentRepository;
            _collaboratorRepository = collaboratorRepository;
            _loginService = loginService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_data.Collaborators.ToList());
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
                Status = (Collaborator.StatusEnum)Status,
                IsAdmin = IsAdmin,
                IsActive = IsActive,
                HalfDayBreak = 60,
                Email = Email,
                Password = Password
            };

            _data.Collaborators.Add(collaborator);
            if (_data.SaveChanges() > 0)
            {
                return Ok(new { Success = true, Message = "Collaborateur ajouter avec succés", Collaborator = collaborator });
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
                    return Ok(new { Success = true, Message = "Colaborateur mis à jour" });
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
                    return Ok(new { Message = "Collaborateur " });
                }
                return Ok(new { Message = "Error" });
            }
            return NotFound();
        }
       
    }
}
