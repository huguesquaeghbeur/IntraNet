using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("intranet/v1/spent")]
    [ApiController]
    public class SpentController : ControllerBase
    {
        IRepository<Spent> _spentRepository;
        IRepository<Mission> _missionRepository;
        IRepository<Collaborator> _collaboratorRepository;
        UploadService _uploadService;
        FormatService _formatService;
        public SpentController(FormatService formatService, UploadService uploadService, IRepository<Spent> spentRepository, IRepository<Mission> missionRepository, IRepository<Collaborator> collaboratorRepository)
        {
            _spentRepository = spentRepository;
            _missionRepository = missionRepository;
            _collaboratorRepository = collaboratorRepository;
            _uploadService = uploadService;
            _formatService = formatService;
        }
        [HttpPost]
        public IActionResult Post([FromForm] IFormFile proof, [FromForm] int missionId, [FromForm] decimal amount, [FromForm] bool advanceCash, [FromForm] string commentary, [FromForm] bool isExactAmount)
        {
            Spent spent = new Spent()
            {
                Mission = _missionRepository.FinById(missionId),
                Amount = amount,
                Commentary = commentary,
                AdvanceCash = advanceCash,
                IsExactAmount = isExactAmount,
                Validate = Spent.ValidationEnum.InitialState
            };
            spent.Proofs.Add(new Proof() { PdfUrl = _uploadService.Upload(proof) });
            _spentRepository.Save(spent);
            return Ok(new { Message = "Spent added", id = spent.Id });
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_spentRepository.GetAll());
        }

        [HttpGet("{spentId}")]
        public IActionResult Get(int spentId)
        {
            Spent spent = _spentRepository.FinById(spentId);
            if (spent != null)
                return Ok(spent);
            return NotFound(new { Message = "spent not found" });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Spent spent = _spentRepository.FinById(id);
            if (spent != null)
            {
                _spentRepository.Delete(spent);
                return Ok(new { message = "spent deleted", id = id });
            }
            return NotFound(new { Message = "spent not found" });
        }

        [HttpPatch]
        public IActionResult Patch([FromForm] int validate, [FromForm] DateTime expenseDate, [FromForm] int id, [FromForm] int feeType, [FromForm] IFormFile[] proofs, [FromForm] int missionId, [FromForm] decimal amount, [FromForm] bool advanceCash, [FromForm] string commentary, [FromForm] bool isExactAmount)
        {
            Spent spent = _spentRepository.FinById(id);
            if (spent != null)
            {
                spent.MissionId = missionId == default ? spent.MissionId : missionId;   
                spent.Amount = amount == default ? spent.Amount : amount;
                spent.Commentary = commentary == default ? spent.Commentary : commentary; 
                spent.AdvanceCash = advanceCash == default ? spent.AdvanceCash : advanceCash;
                spent.IsExactAmount = isExactAmount;
                spent.Validate = (Spent.ValidationEnum)validate;
                spent.FeeType = (Spent.FeeTypeEnum)feeType;
                spent.ExpenseDate = expenseDate;
                if (proofs != null)
                {
                    foreach (IFormFile proof in proofs)
                    {
                        spent.Proofs.Add(new Proof() { PdfUrl = _uploadService.Upload(proof),  });
                    }
                }
                _spentRepository.Update(spent);
                return Ok(new { Message = "spent updated", id = id, Spent = spent });
            }
            return NotFound(new { Message = "spent not found" });
        }

    }
}
