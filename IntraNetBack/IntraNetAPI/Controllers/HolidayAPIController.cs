using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;

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
        HolidayService _holidayService;
        public HolidayAPIController(IRepository<Holiday> holidayRepository, IRepository<Collaborator> collaboratorRepository, HolidayService holidayService)
        {
            _holidayRepository = holidayRepository;
            _collaboratorRepository = collaboratorRepository;
            _holidayService = holidayService;
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
            if (h != null)
            {
                return Ok(h);
            }
            return NotFound(new { Message = "holiday not found" });
        }

        // POST api/<HolidayAPIController>
        [HttpPost]
        public IActionResult Post([FromForm] int collabId, [FromForm] DateTime startDate, [FromForm] bool startOnMorning, [FromForm] DateTime endDate, [FromForm] bool endOnMorning, [FromForm] int leaveType)
        {
            //Status Calcul
            Collaborator coll = _collaboratorRepository.SearchOne(c => c.Id == collabId);
            Holiday.ValidationEnum validationEnum = _holidayService.calculStatus(coll);

            // Half Day Break Calcul
            int tmpHalfDayBreak = _holidayService.calculHalfDayBreak(startDate, endDate, startOnMorning, endOnMorning);

            Holiday holiday = new Holiday()
            {
                Collaborator = _collaboratorRepository.FinById(collabId),
                StartDate = startDate,
                StartOnMorning = startOnMorning,
                EndDate = endDate,
                EndOnMorning = endOnMorning,
                HalfDayBreakCount = ((endDate.DayOfYear - startDate.DayOfYear) * 2) + tmpHalfDayBreak,
                LeaveType = (Holiday.LeaveTypeEnum)leaveType,
                Validation = validationEnum,
            };
            if (_holidayRepository.Save(holiday))
            {
                return Ok(new { Message = "Holiday added", Id = holiday.Id });
            }
            else return NotFound(new { Message = "holiday error" });
        }


        // PUT api/<HolidayAPIController>/5
        [HttpPatch("{id}")]
        public IActionResult Patch(int id, [FromForm] int validation)
        {
            string msg = "";
            Holiday holiday = _holidayRepository.FinById(id);
            if (holiday != null)
            {
                holiday.Validation = (Holiday.ValidationEnum)validation;
                
                msg = _holidayService.validationStateMsg(validation);

                if (_holidayRepository.Update(holiday))
                {
                    return Ok(new { Message = msg, Id = holiday.Id, validation = holiday.Validation });
                };
            }
            return NotFound(new { Message = "error holiday not found" });
        }
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] DateTime startDate, [FromForm] bool startOnMorning, [FromForm] DateTime endDate, [FromForm] bool endOnMorning, [FromForm] int leaveType)
        {
            int tmpHalfDayBreak = _holidayService.calculHalfDayBreak(startDate, endDate, startOnMorning, endOnMorning);

            Holiday holiday = _holidayRepository.FinById(id);
            if(holiday != null)
            {
                holiday.StartDate = startDate;
                holiday.StartOnMorning = startOnMorning;
                holiday.EndDate = endDate;
                holiday.EndOnMorning = endOnMorning;
                holiday.HalfDayBreakCount = ((endDate.DayOfYear - startDate.DayOfYear) * 2) + tmpHalfDayBreak;
                holiday.LeaveType = (Holiday.LeaveTypeEnum)leaveType;
            }
            if (_holidayRepository.Update(holiday))
            {
                return Ok(new { Message = "Holiday updated", Id = holiday.Id });
            }
            return NotFound(new { Message = "error holiday updating" });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Holiday holiday = _holidayRepository.FinById(id);
            if(holiday != null)
            {
                _holidayRepository.Delete(holiday);
                return Ok(new { Message = "holiday deleted", Id = holiday.Id });
            }
            return NotFound(new { Message = "holiday not found" });
        }
    }
}
