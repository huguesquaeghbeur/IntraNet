using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.AspNetCore.Mvc;

namespace IntraNetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MissionController : Controller
    {
        private readonly DataContext _context;  
        private IRepository<Mission> _missionRepository;
        private IRepository<Collaborator> _collabRepository;

        public MissionController(DataContext context, IRepository<Mission> missionRepo, IRepository<Collaborator> collabRepo)
        {
            _context = context;
            _missionRepository = missionRepo;
            _collabRepository = collabRepo;
        }

        [HttpGet]
        [Route("/api/missions")]
        public IActionResult GetMission()
        {
            IEnumerable<Mission> missions = _missionRepository.GetAll();
            return Ok(missions);
        }

        [HttpGet]
        [Route("/api/collabs")]
        public IActionResult GetCollabs()
        {
            IEnumerable<Collaborator> _collaborator = _collabRepository.GetAll();
            return Ok(_collaborator);
        }

        [HttpPost]
        [Route("/api/savemission")]
        public IActionResult SaveMission()
        {
            IEnumerable<Mission> missions = _missionRepository.GetAll();
            return Ok();
        }
    }
}