using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("intranet/v1/holidays")]
    [ApiController]
    public class HolidayAPIController : ControllerBase
    {
        IRepository<Holiday> _holidayRepository;
        IRepository<Collaborator> _collaboratorRepository;
        FormatService _formatService;
        public HolidayAPIController(IRepository<Holiday> holidayRepository, IRepository<Collaborator> collaboratorRepository, FormatService formatService)
        {
            _holidayRepository = holidayRepository;
            _collaboratorRepository = collaboratorRepository;
            _formatService = formatService;
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
        public IActionResult Post([FromForm] int collabId, [FromForm] DateTime startDate, [FromForm] bool startOnMorning, [FromForm] DateTime endDate, [FromForm] bool endOnMorning, [FromForm] int leaveType)
        {
            int tmpHalfDayBreak = 0;
            if (startDate == endDate)
            {
                if (startOnMorning == true && endOnMorning == false)
                {
                    tmpHalfDayBreak = 1;
                }
            }
            if (startDate < endDate)
            {
                if (startOnMorning == true && endOnMorning == false)
                {
                    tmpHalfDayBreak += 1;
                } else if (startOnMorning == false && endOnMorning == true)
                {
                    tmpHalfDayBreak -= 1;
                }
            }
            Holiday holiday = new Holiday()
            {
                Collaborator = _collaboratorRepository.SearchOne(c => c.Id == collabId),
                StartDate = _formatService.FormatDate(startDate),
                StartOnMorning = startOnMorning,
                EndDate = _formatService.FormatDate(endDate),
                EndOnMorning = endOnMorning,
                HalfDayBreakCount = ((endDate.Day - startDate.Day)*2) + tmpHalfDayBreak,
                LeaveType = (Holiday.LeaveTypeEnum)leaveType,
                Validation = Holiday.ValidationEnum.InitialState,
            };
            if (_holidayRepository.Save(holiday))
            {
                return Ok(new { Message = "Holiday added", Id = holiday.Id });
            }
            else return NotFound(new { Message = "holiday error" });
        }


        // PUT api/<HolidayAPIController>/5
        [HttpPatch]
        public IActionResult Patch([FromForm] int id, [FromForm] int validation)
        {
            string msg = "";
            Holiday holiday = _holidayRepository.FinById(id);
            if(holiday != null)
            {
                holiday.Validation = (Holiday.ValidationEnum)validation;
                if (validation == 0)
                {
                   msg = "holiday refused";
                }
                else if(validation == 1)
                {
                    msg = "Initial state holiday";
                }
                else if (validation == 2)
                {
                    msg = "holiday approved by Chief";
                }
                else if (validation == 3)
                {
                    msg = "holiday approved by Human Ressources";
                }
                else if (validation == 4)
                {
                    msg = "holiday approved by All";
                }
                if (_holidayRepository.Update(holiday))
                {
                    return Ok(new { Message = msg, Id = holiday.Id, validation = holiday.Validation });
                };
            }
            return NotFound(new { Message = "error holiday not found" });
        }

        //// DELETE api/<HolidayAPIController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
