using System.Collections.Generic;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.AspNetCore.Mvc;

namespace IntraNetAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CollaboratorController : Controller
    {
        private IRepository<Collaborator> _collabRepository;
        private readonly DataContext _context;
        
        public CollaboratorController(DataContext context, IRepository<Collaborator> collabRepo)
        {
            _context = context;
            _collabRepository = collabRepo;
        }

        [HttpGet]
        [Route("/api/collaborator/all")]
        public IActionResult GetAllCollaborator()
        {
            IEnumerable<Collaborator> collabs = _collabRepository.GetAll();
            return Ok(collabs);
        }
        
        [HttpGet]
        [Route("/api/collaborator/managers")]
        public IActionResult GetManager()
        {
            IEnumerable<Collaborator> managers = _collabRepository.Search(s => s.IsChief == true);
            return Ok(managers);
        }
    }
}