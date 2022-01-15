using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class BillRepository : BaseRepository, IRepository<Bill>
    {
        public BillRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public Bill FinById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Bill> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save(Bill element)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Bill> Search(Expression<Func<Bill, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Bill SearchOne(Expression<Func<Bill, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(Bill element)
        {
            throw new NotImplementedException();
        }
    }
}
