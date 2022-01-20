using System.Collections.Generic;
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

        public MissionController(DataContext context, IRepository<Mission> missionRepo)
        {
            _context = context;
            _missionRepository = missionRepo;
        }


        [HttpGet]
        [Route("/api/missions/all")]
        public IActionResult GetMission()
        {
            IEnumerable<Mission> missions = _missionRepository.GetAll();
            return Ok(missions);
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

        [HttpPost]
        [Route("/api/missions/update/{id?}")]
        public async Task<ActionResult<Mission>> UpdateMission(Mission mission, int id)
        {
            var updatedMission = _missionRepository.FinById(id);
            updatedMission.Name = mission.Name;
            updatedMission.Description = mission.Description;
            updatedMission.StartTime = mission.StartTime;
            updatedMission.EndTime = mission.EndTime;
            updatedMission.Collaborators = mission.Collaborators;
            _context.Missions.Add(updatedMission);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}