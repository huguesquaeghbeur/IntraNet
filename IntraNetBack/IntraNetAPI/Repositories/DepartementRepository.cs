using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class DepartementRepository : IRepository<Department>
    {
        public DepartementRepository(DataContext dataContext) : base(dataContext)
        {
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
