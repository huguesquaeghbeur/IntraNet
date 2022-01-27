using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("intranet/v1/bill")]
    [ApiController]
    public class BillController : ControllerBase
    {
        IRepository<Bill> _billRepository;
        IRepository<Mission> _missionRepository;
        IRepository<Collaborator> _collaboratorRepository;
        UploadService _uploadService;
        FormatService _formatService;
        public BillController(FormatService formatService, IRepository<Bill> billRepository, UploadService uploadService, IRepository<Mission> missionRepository, IRepository<Collaborator> collaboratorRepository)
        {
            _billRepository = billRepository;
            _missionRepository = missionRepository;
            _collaboratorRepository = collaboratorRepository;
            _uploadService = uploadService;
            _formatService = formatService;
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
            return NotFound(new { Message = "bill not found" });
        }
        [HttpPost]
        public IActionResult Post([FromForm]int collabId)
            {
            Bill bill = new Bill()
            {
                Collaborator = _collaboratorRepository.FinById(collabId),
                //IsSubmitted = false,
            };
            if(_billRepository.Save(bill))
                return Ok(new { bill=bill, id = bill.Id });
            return NotFound(new { Message = "bill error" });
        }
        [HttpPatch]
        public IActionResult Patch([FromForm] int feeType, [FromForm] DateTime expenseDate, [FromForm] int billId, [FromForm] IFormFile[] proofs, [FromForm] int missionId, [FromForm] decimal amount, [FromForm] bool advanceCash, [FromForm] string commentary, [FromForm] bool isExactAmount, [FromForm] int validate)
        {
            Bill bill = _billRepository.FinById(billId);
            if(bill != null) {
                Spent spent = new Spent()
                {   
                    Mission = _missionRepository.FinById(missionId),
                    Amount = amount,
                    Commentary = commentary,
                    AdvanceCash = advanceCash,
                    IsExactAmount = isExactAmount,
                    Validate = (Spent.ValidationEnum)validate,
                    ExpenseDate = expenseDate,
                    FeeType = (Spent.FeeTypeEnum)feeType
                };
                    if (proofs != null)
                {
                    foreach (IFormFile proof in proofs)
                    {
                        spent.Proofs.Add(new Proof() { PdfUrl = _uploadService.Upload(proof) });
                    }
                }
                    bill.Spents.Add(spent);
                _billRepository.Update(bill);
                return Ok(new { Message = "bill updated", id = bill.Id, spent = spent });
            }
            return NotFound(new { Message = "bill not found" });
        }
        [HttpPatch("{id}")]
        public IActionResult Patch(int id, [FromForm] bool isSubmitted, [FromForm] DateTime submissionDate, [FromForm] int collaboratorId)
        {
            Bill bill = _billRepository.FinById(id);
            if(bill != null)
            {
                bill.CollaboratorId = collaboratorId;
                bill.IsSubmitted = isSubmitted;
                bill.SubmissionDate = submissionDate;
                _billRepository.Update(bill);
                return Ok(new { message = "bill updates", bill = bill });
            }
            return NotFound(new { message = "bill not found", bill = bill });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Bill bill = _billRepository.FinById(id);
            if (bill != null)
            {
                _billRepository.Delete(bill);
                return Ok(new { Message = "bill deleted", id = bill.Id });
            }
            return NotFound(new { Message = "bill not found" });
        }
    }
}
