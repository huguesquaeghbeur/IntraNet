using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("department")]

    public class DepartmentController : Controller
    {
        DataContext _data;
        

        public DepartmentController(DataContext data)
        {
            _data = data;
        } 


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_data.Departments.ToList());
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Department department = _data.Departments.Find(id);
            if(department != null)
            {
                return Ok(department);
            }
            return NotFound();
        }



        [HttpPost]
        public IActionResult Post([FromForm] string Title)
        {
            Department department = new Department()
            {
                Title = Title,
            };
            _data.Departments.Add(department);
            if(_data.SaveChanges() > 0)
            {
                return Ok(new { Message = "department added", Department = department });
            }
            return Ok(new { Message = "Erreur dans l'ajout du dpt" });
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Department newDepartment)
        {
            Department department = _data.Departments.Find(id);
            if (department != null)
            {
                department.Title = newDepartment.Title ?? department.Title;

                if (_data.SaveChanges() > 0)
                {
                    return Ok(new { Message = "Department updated" });
                }
                return Ok(new { Message = "Error on update department" });
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Department department = _data.Departments.Find(id);
            if(department != null)
            {
                _data.Departments.Remove(department);
                if (_data.SaveChanges() > 0)
                {
                    return Ok(new { Message = "department deleted with success" });
                }
                return Ok(new { Message = "Erreur dans la suppression du dpt" });
            }
            return NotFound();
        }
    }
}
