using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("intranet/v1/infos")]
    [ApiController]
    public class InfoAPIController : ControllerBase
    {
        IRepository<Info> _inforepostory;
        IRepository<Collaborator> _collaboratorRepository;
        IRepository<Department> _departmentRepository;
        public InfoAPIController(IRepository<Info> inforepository, IRepository<Department> departmentRepository, IRepository<Collaborator> collaboratorrepository)
        {
            _inforepostory = inforepository;
            _collaboratorRepository = collaboratorrepository;
            _departmentRepository = departmentRepository;

        }
       

        //public IActionResult CreateInfo(Info info)
        //{
        //    if (_inforepostory.Save(info))
        //    {
        //        return RedirectToAction("Index", "Info", new {msg = "Success"});
        //    }
        //    return RedirectToAction("Index", "Info", new { msg = "Failed" });
        //}
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_inforepostory.GetAll());
        }
        [HttpGet("{infoId}")]
        public IActionResult Get(int infoId)
        {
            Info i = _inforepostory.FinById(infoId);
            if(i != null)
            {
                return Ok(i);
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromForm] int collabId, [FromForm] string  title, [FromForm] string body )
        {
            Info info = new Info()
            {
                Collaborator = _collaboratorRepository.SearchOne(c => c.Id == collabId),
                //Department = _departmentRepository.SearchOne(d => d.Collaborators.Contains(collabId.ToString() ),
                Title = title,
                Body = body

            };
            if (_inforepostory.Save(info))
            {
                return Ok(new { message = "Demande Ajouté", Id = info.Id });
            }
            else
                return NotFound(new { message = "Demande error" });

            
            
        }

        
           

    }
}
