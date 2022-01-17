using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class SpentRepository : BaseRepository, IRepository<Spent>
    {
        public SpentRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public Spent FinById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Spent> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save(Spent element)
        {
            _dataContext.Spents.Add(element);
            return _dataContext.SaveChanges() > 0;
        }

        public IEnumerable<Spent> Search(Expression<Func<Spent, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Spent SearchOne(Expression<Func<Spent, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(Spent element)
        {
            throw new NotImplementedException();
        }
    }
}
