using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IntraNetAPI.Controllers
{
    [EnableCors("specialOrigin")]
    [Route("intranet/v1/holidays")]
    [ApiController]
    public class HolidayAPIController : ControllerBase
    {
        IRepository<Holiday> _holidayRepository;
        IRepository<Collaborator> _collaboratorRepository;
        public HolidayAPIController(IRepository<Holiday> holidayRepository, IRepository<Collaborator> collaboratorRepository)
        {
            _holidayRepository = holidayRepository;
            _collaboratorRepository = collaboratorRepository;
        }
        // GET: api/<HolidayAPIController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_holidayRepository.GetAll());
        }

        // GET api/<HolidayAPIController>/5
        [HttpGet("{holidayId}")]
        public IActionResult Get(int holidayId)
        {
            Holiday h = _holidayRepository.FinById(holidayId);
            if(h != null)
            {
                return Ok(h);
            }
            return NotFound(new { Message = "holiday not found"});
        }

        // POST api/<HolidayAPIController>
        [HttpPost]
        public IActionResult Post([FromForm] int collabId, [FromForm] DateTime startDate, [FromForm] bool startOnMorning, [FromForm] DateTime endDate, [FromForm] bool endOnMorning)
        {
            Holiday holiday = new Holiday()
            {
                Collaborator = _collaboratorRepository.SearchOne(c => c.Id == collabId),
                StartDate = startDate,
                StartOnMorning = startOnMorning,
                EndDate = endDate,
                EndOnMorning = endOnMorning,
                Validation = Holiday.ValidationEnum.InitialState,
            };
            if (_holidayRepository.Save(holiday))
            {
                return Ok(new { Message = "Holiday added", Id = holiday.Id });
            }
            else return NotFound(new { Message = "holiday error" });
        }

        //// PUT api/<HolidayAPIController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<HolidayAPIController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
