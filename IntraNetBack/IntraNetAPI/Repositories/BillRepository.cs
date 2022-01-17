using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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
            return _dataContext.Bills.Include(b=>b.Spents).ThenInclude(s=>s.Mission).FirstOrDefault(b=>b.Id==id);
        }

        public IEnumerable<Bill> GetAll()
        {
            return _dataContext.Bills.Include(b=>b.Spents);
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
