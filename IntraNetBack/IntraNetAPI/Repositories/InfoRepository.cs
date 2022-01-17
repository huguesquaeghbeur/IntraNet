using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class InfoRepository : BaseRepository, IRepository<Info>
    {
        public InfoRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public Info FinById(int id)
        {
            return _dataContext.Infos.Find(id);
        }

        public IEnumerable<Info> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save(Info element)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Info> Search(Expression<Func<Info, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Info SearchOne(Expression<Func<Info, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(Info element)
        {
            throw new NotImplementedException();
        }
    }
}
