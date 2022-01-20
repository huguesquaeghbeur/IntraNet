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
    public class collaboratorRepository : BaseRepository, IRepository<Collaborator>
    {
        public collaboratorRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public Collaborator FinById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Collaborator> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save(Collaborator element)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Collaborator> Search(Expression<Func<Collaborator, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Collaborator SearchOne(Expression<Func<Collaborator, bool>> searchMethode)
        {
            return _dataContext.Collaborators.Include(c => c.Holidays).Include(c => c.Missions).Include(c => c.Department).Where(searchMethode).FirstOrDefault();
        }

        public bool Update(Collaborator element)
        {
            throw new NotImplementedException();
        }
    }
}
