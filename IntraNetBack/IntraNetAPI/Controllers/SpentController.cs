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
        public SpentController(UploadService uploadService, IRepository<Spent> spentRepository, IRepository<Mission> missionRepository, IRepository<Collaborator> collaboratorRepository)
        {
            _spentRepository = spentRepository;
            _missionRepository = missionRepository;
            _collaboratorRepository = collaboratorRepository;
            _uploadService = uploadService;   
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
            return NotFound(new { Message = "spent not found"});
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Spent spent = _spentRepository.FinById(id);
            if (spent != null)
            {
                _spentRepository.Delete(spent);
                return Ok(new { message = "spent deleted", id = id }) ;
            }
            return NotFound(new { Message = "spent not found" });
        }

        [HttpPatch]
        public IActionResult Patch( [FromForm] int id, [FromForm] IFormFile proof, [FromForm] int missionId, [FromForm] decimal amount, [FromForm] bool advanceCash, [FromForm] string commentary, [FromForm] bool isExactAmount)
        {
            Spent spent = _spentRepository.FinById(id);
            if (spent != null)
            {
                spent.MissionId = missionId == default ? spent.MissionId : missionId;   
                spent.Amount = amount == default ? spent.Amount : amount;
                spent.Commentary = commentary == default ? spent.Commentary : commentary; 
                spent.AdvanceCash = advanceCash == default ? advanceCash : spent.AdvanceCash;
                spent.IsExactAmount = isExactAmount == default ? isExactAmount : spent.IsExactAmount;
                spent.Validate = Spent.ValidationEnum.InitialState;
                _spentRepository.Update(spent);
                return Ok(new { message = "spent updated", id = id, spent = spent });
            }
            return NotFound(new { Message = "spent not found" });
        }

    }
}
