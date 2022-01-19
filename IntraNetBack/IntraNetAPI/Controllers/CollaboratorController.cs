using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.AspNetCore.Cors;


namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("intranet/v1/collaborator")]
    public class CollaboratorController : Controller
    {
        DataContext _data;

        public CollaboratorController(DataContext data)
        {
            _data = data;
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
        public IActionResult Post([FromForm] string FirstName, [FromForm] string LastName, [FromForm] DateTime Birthday, [FromForm] bool IsChief, [FromForm] bool IsAdmin, [FromForm] int HalfDayBreak, [FromForm] string Email, [FromForm] string Password)
        {
            Collaborator collaborator = new Collaborator()
            {
                FirstName = FirstName,
                LastName = LastName,
                Birthday = Birthday,
                IsChief = false,
                IsAdmin = true,
                HalfDayBreak = 60,
                Email = Email,
                Password = Password
            };

            _data.Collaborators.Add(collaborator);
            if (_data.SaveChanges() > 0)
            {
                return Ok(new { Message = "Collaborator added", Collaborator = collaborator });
            }
            return Ok(new { Message = "Error" });
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Collaborator newCollaborator)
        {
            Collaborator collaborator = _data.Collaborators.Find(id);
            if (collaborator != null)
            {
                collaborator.FirstName = newCollaborator.FirstName ?? collaborator.FirstName;
                collaborator.LastName = newCollaborator.LastName ?? collaborator.LastName;
                //collaborator.HalfDayBreak = newCollaborator.HalfDayBreak ?? collaborator.HalfDayBreak;
                collaborator.Email = newCollaborator.Email ?? collaborator.Email;
                collaborator.Password = newCollaborator.Password ?? collaborator.Password;

                if (_data.SaveChanges() > 0)
                {
                    return Ok(new { Message = "Colaborator updated" });
                }
                return Ok(new { Message = "Error" });
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

    }
}
