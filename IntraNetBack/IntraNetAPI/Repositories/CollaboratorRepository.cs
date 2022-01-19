using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Tools;
using IntraNetAPI.Models;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace IntraNetAPI.Repositories
{
    public class CollaboratorRepository : BaseRepository, IRepository<Collaborator>
    {
        public CollaboratorRepository(DataContext dataContext) : base(dataContext)
        {
            
        }

        public bool Save(Collaborator collaborator)
        {
            _dataContext.Collaborators.Add(collaborator);
            return _dataContext.SaveChanges() > 0;
        }

        public List<Collaborator> GetAll()
        {
            return _dataContext.Collaborators.Include(c => c.Missions).Include(c => c.Holidays).Include(c => c.Bills).ToList();
        }

        public Collaborator GetById(int id)
        {
            return _dataContext.Collaborators.Find(id);
        }

        public bool Update(Collaborator element)
        {
            throw new NotImplementedException();
        }

        public Collaborator FinById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Collaborator> Search(Expression<Func<Collaborator, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Collaborator SearchOne(Expression<Func<Collaborator, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Collaborator> IRepository<Collaborator>.GetAll()
        {
            throw new NotImplementedException();
        }

        
    }
}
