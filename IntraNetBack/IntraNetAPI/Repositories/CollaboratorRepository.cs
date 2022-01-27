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

        public bool Delete(Collaborator element)
        {
            throw new NotImplementedException();
        }

        public Collaborator FindById(int id)
        {
           return _dataContext.Collaborators.Include(c => c.Holidays).Include(c => c.Missions).FirstOrDefault(c => c.Id == id);
        }

        public IEnumerable<Collaborator> GetAll()
        {
            return _dataContext.Collaborators.Include(c => c.Missions).Include(c => c.Holidays).Include(c => c.Department).Include(c => c.Bills);
        }
        public bool Save(Collaborator element)
        {
            _dataContext.Collaborators.Add(element);
            return _dataContext.SaveChanges() > 0;
        }
        public IEnumerable<Collaborator> Search(Expression<Func<Collaborator, bool>> predicate)
        {
            return _dataContext.Collaborators.Include(c => c.Holidays).Include(c => c.Missions).Where(predicate);
        }
        public Collaborator SearchOne(Expression<Func<Collaborator, bool>> searchMethode)
        {
            return _dataContext.Collaborators.Include(c => c.Holidays).Include(c => c.Missions).Include(c => c.Department).SingleOrDefault(searchMethode);
        }
        public bool Update(Collaborator collaborator)
        {
            return _dataContext.SaveChanges() > 0;
        }
    }
}
