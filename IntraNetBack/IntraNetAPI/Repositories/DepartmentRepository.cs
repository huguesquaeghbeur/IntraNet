using IntraNetAPI.Tools;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Linq;

namespace IntraNetAPI.Repositories
{
    public class DepartmentRepository : BaseRepository, IRepository<Department>
    {
        public DepartmentRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public bool Delete(Department element)
        {
            throw new NotImplementedException();
        }

        public Department FinById(int id)
        {
            return _dataContext.Departments.Find(id);
        }

        public IEnumerable<Department> GetAll()
        {
            return _dataContext.Departments.ToList();
        }

        public bool Save(Department department)
        {
            _dataContext.Departments.Add(department);
            return _dataContext.SaveChanges() > 0;
        }

        public IEnumerable<Department> Search(Expression<Func<Department, bool>> searchMethod)
        {
            return _dataContext.Departments.Where(searchMethod).ToList();
        }

        public Department SearchOne(Expression<Func<Department, bool>> searchOneMethod)
        {
            return _dataContext.Departments.SingleOrDefault(searchOneMethod);
        }

        public bool Update(Department element)
        {
            return _dataContext.SaveChanges() > 0;
        }
    }
}
