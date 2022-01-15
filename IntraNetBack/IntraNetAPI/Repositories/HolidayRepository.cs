using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class HolidayRepository : BaseRepository, IRepository<Holiday>
    {
        public HolidayRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public Holiday FinById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Holiday> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save(Holiday element)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Holiday> Search(Expression<Func<Holiday, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Holiday SearchOne(Expression<Func<Holiday, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(Holiday element)
        {
            throw new NotImplementedException();
        }
    }
}
