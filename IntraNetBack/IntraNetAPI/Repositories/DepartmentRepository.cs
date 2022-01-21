using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

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
            throw new NotImplementedException();
        }

        public IEnumerable<Department> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save(Department element)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Department> Search(Expression<Func<Department, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Department SearchOne(Expression<Func<Department, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(Department element)
        {
            throw new NotImplementedException();
        }
    }
}
