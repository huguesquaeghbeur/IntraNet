using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntraNetAPI.Services;
using IntraNetAPI.Tools;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using Microsoft.AspNetCore.Cors;
using static IntraNetAPI.Models.Collaborator;

namespace IntraNetAPI.Controllers
{
    [EnableCors("specialOrigin")]
    [Route("intranet/v1/login")]
    public class UserController : Controller
    {
        LoginService _loginService;
        IRepository<Collaborator> _collaboratorRepository;

        public UserController(LoginService loginService, IRepository<Collaborator> collaboratorRepository)
        {
            _loginService = loginService;
            _collaboratorRepository = collaboratorRepository;
        }

        [HttpPost]
        public IActionResult SubmitFormLogin([FromForm] string email, [FromForm] string password, [FromForm] StatusEnum status)
        {
            //Collaborator collaborator = _collaboratorRepository.SearchOne(c => c.Email == email && c.Password == password);
            string token = _loginService.GenerateToken(email, password, status);
            if (token != null /*&& collaborator != null*/)
            {
                return Ok(new { Token = token/*, Collaborator = collaborator*/ });
            }
            return NotFound();
        }
    }
}
