using Microsoft.AspNetCore.Mvc;

namespace IntraNetAPI.Controllers
{
    public class HolidayController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
