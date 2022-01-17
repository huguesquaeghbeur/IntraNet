using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntraNetAPI.Controllers
{
    [EnableCors("specialOrigin")]
    [Route("intranet/v1/bill")]
    [ApiController]
    public class BillController : ControllerBase
    {
        IRepository<Bill> _billRepository;
        public BillController(IRepository<Bill> billRepository)
        {
            _billRepository = billRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_billRepository.GetAll());
        }
        [HttpGet("{billId}")]
        public IActionResult Get(int billId)
        {
            Bill bill = _billRepository.FinById(billId);
            if (bill != null)
                return Ok(bill);
            return NotFound(new { message = "bill not found" });
        }
    }
}
