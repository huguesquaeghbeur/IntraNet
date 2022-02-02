using System;
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

        public MissionController(DataContext context, IRepository<Mission> missionRepo)
        {
            _context = context;
            _missionRepository = missionRepo;
        }


        [HttpGet]
        [Route("/api/mission/all")]
        public IActionResult GetAllMission()
        {
            IEnumerable<Mission> missions = _missionRepository.GetAll();
            return Ok(missions);
        }

        [HttpGet]
        [Route("/api/mission/detail/{id:int}")]
        public IActionResult GetSingleMisison(int id)
        {
            Mission mission = _missionRepository.FinById(id);
            return Ok(mission);
        }

        [HttpPost]
        [Route("/api/mission/add")]
        public IActionResult PostMission([FromForm] Department dptId, [FromForm] string name, [FromForm] string description, [FromForm] DateTime startTime, [FromForm] DateTime endTime)
        {
            var mission = new Mission();
            mission.Department = dptId;
            mission.Name = name;
            mission.Description = description;
            mission.StartTime = startTime.Date;
            mission.EndTime = endTime.Date;
            mission.IsActive = true;
            _context.Missions.Add(mission);

            if (_context.SaveChanges() > 0)
            {
                return Ok("La mission a bien été ajouté");
            }

            return BadRequest("La mission n'a pas été ajouté");
        }

        [HttpPatch]
        [Route("/api/mission/update/{id:int}")]
        public IActionResult UpdateMission(int id, [FromForm] string name, [FromForm] string description, [FromForm] DateTime startTime, [FromForm] DateTime endTime, [FromForm] bool isActive)
        {
            var mission = _missionRepository.FinById(id);
            mission.Name = name;
            mission.Description = description;
            mission.StartTime = startTime.Date;
            mission.EndTime = endTime.Date;
            mission.IsActive = isActive;
            _context.Missions.Update(mission);

            if (_context.SaveChanges() > 0)
            {
                return Ok("La mission a bien été modifié");
            }

            return BadRequest("La mission n'a pas été mise à jour");
        }

        [HttpDelete]
        [Route("/api/mission/delete/{id:int}")]
        public IActionResult DeleteMission(int id)
        {
            var mission = _missionRepository.FinById(id);
            _missionRepository.Delete(mission);

            if (_context.SaveChanges() > 0)
            {
                return Ok("La mission a été supprimé");
            }

            return BadRequest("La mission n'a pas été supprimé");
        }
    }
}