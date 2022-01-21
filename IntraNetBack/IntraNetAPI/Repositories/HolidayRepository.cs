using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class HolidayRepository : BaseRepository, IRepository<Holiday>
    {
        public HolidayRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public bool Delete(Holiday element)
        {
            throw new NotImplementedException();
        }

        public Holiday FinById(int id)
        {
            return _dataContext.Holidays.Find();
        }

        public IEnumerable<Holiday> GetAll()
        {
            return _dataContext.Holidays.ToList();
        }

        public bool Save(Holiday entity)
        {
             _dataContext.Holidays.Add(entity);
            return _dataContext.SaveChanges() > 0;
        }

        public IEnumerable<Holiday> Search(Expression<Func<Holiday, bool>> predicate)
        {
            return _dataContext.Holidays.ToList();
        }

        public Holiday SearchOne(Expression<Func<Holiday, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(Holiday entity)
        {
            _dataContext.Holidays.Update(entity);
            return _dataContext.SaveChanges() > 0;

        }
    }
}
