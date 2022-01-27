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
    public class InfoRepository : BaseRepository, IRepository<Info>
    {
        public InfoRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public bool Delete(Info element)
        {
            throw new NotImplementedException();
        }

        public Info FindById(int id)
        {
            return _dataContext.Infos.Find(id);
        }

        public IEnumerable<Info> GetAll()
        {
            return _dataContext.Infos.Include(i => i.Collaborator).ToList();
        }

        public bool Save(Info element)
        {
            _dataContext.Infos.Add(element);
            return _dataContext.SaveChanges() > 0;
        }

        public IEnumerable<Info> Search(Expression<Func<Info, bool>> predicate)
        {
            return _dataContext.Infos.ToList();
        }

        public Info SearchOne(Expression<Func<Info, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(Info element)
        {
            _dataContext.Infos.Update(element);
            return _dataContext.SaveChanges() > 0;
        }
    }
}
