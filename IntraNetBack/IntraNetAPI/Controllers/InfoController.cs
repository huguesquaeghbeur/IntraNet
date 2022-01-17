using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;

namespace IntraNetAPI.Controllers
{
    [EnableCors("specialOrigin")]
    [Route("intranet/v1/infos")]
    [ApiController]
    public class InfoController : Controller
    {
        IRepository<Info> _inforepostory;
        public InfoController(IRepository<Info> inforepository)
        {
            _inforepostory = inforepository; 
        }
        public IActionResult Index(string msg)
        {
            ViewBag.Message = msg;
            return View();
        }

        public IActionResult CreateInfo(Info info)
        {
            if (_inforepostory.Save(info))
            {
                return RedirectToAction("Index", "Info", new {msg = "Success"});
            }
            return RedirectToAction("Index", "Info", new { msg = "Failed" });
        }
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
        public IActionResult Post([FromForm] int collabId, [FromForm] Department department, [FromForm] string  title, [FromForm] string body )
        {
            Info info = new Info()
            {
                Title = title,
                Body = body

            };
            _inforepostory.Save(info);
            return Ok(new {message = "Demande Ajouté", Id = info.Id});

            
            
        }
        
           

    }
}
