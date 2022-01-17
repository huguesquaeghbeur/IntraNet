using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace IntraNetAPI.Controllers 
{
    public class HomeController : Controller
    {
        IRepository<Holiday> _holidayRepository;

        public HomeController(IRepository<Holiday> holidayrepository)
        {
            _holidayRepository = holidayrepository;
        }
        public IActionResult Index(string msg)
        {
            ViewBag.Message = msg;
            return View();
        }
        public IActionResult CreateHoliday(Holiday holiday)
        {
            _holidayRepository.Save(holiday);
            if (_holidayRepository.Save(holiday))
            {
                return RedirectToAction("Index", "Holiday", new { msg = "Success" });
            }
            else
            {
                return RedirectToAction("Index", "Holiday", new { msg = "Failed" });
            }
        }
    }
}
