using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IntraNetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MissionController : Controller
    {
        private readonly DataContext _context;
        private IRepository<Mission> _missionRepository;
        private IRepository<Collaborator> _collabRepository;

        public MissionController(DataContext context, IRepository<Mission> missionRepo,
            IRepository<Collaborator> collabRepo)
        {
            _context = context;
            _missionRepository = missionRepo;
            _collabRepository = collabRepo;
        }


        [HttpGet]
        [Route("/api/missions/all")]
        public IActionResult GetMission()
        {
            IEnumerable<Mission> missions = _missionRepository.GetAll();
            return Ok(missions);
        }


        [HttpGet]
        [Route("/api/missions/collabs")]
        public IActionResult GetCollabs()
        {
            IEnumerable<Collaborator> collaborator = _collabRepository.GetAll();
            return Ok(collaborator);
        }


        [HttpGet]
        [Route("/api/missions/managers")]
        public IActionResult GetManager()
        {
            IEnumerable<Collaborator> managers = _collabRepository.Search(s => s.IsChief == true);
            return Ok(managers);
        }


        [HttpPost]
        [Route("/api/missions/save")]
        public async Task<ActionResult<Mission>> CreateMission(Mission mission)
        {
            var savedMission = new Mission();
            savedMission.Name = mission.Name;
            savedMission.Description = mission.Description;
            savedMission.StartTime = mission.StartTime;
            savedMission.EndTime = mission.EndTime;
            savedMission.Collaborators = mission.Collaborators;
            _context.Missions.Add(savedMission);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}