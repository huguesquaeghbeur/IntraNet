<<<<<<< HEAD
﻿using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
=======
﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Tools;
using IntraNetAPI.Models;
>>>>>>> Dev
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class collaboratorRepository : BaseRepository, IRepository<Collaborator>
    {
        public collaboratorRepository(DataContext dataContext) : base(dataContext)
        {
            
        }

        public bool Save(Collaborator collaborator)
        {
            _dataContext.Collaborators.Add(collaborator);
            return _dataContext.SaveChanges() > 0;
        }

        public List<Collaborator> GetAll()
        {
            return _dataContext.Collaborators.ToList();
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
            return _dataContext.Collaborators.Include(c => c.Holidays).Include(c => c.Missions).Include(c => c.Department).Where(searchMethode).FirstOrDefault();
        }

        IEnumerable<Collaborator> IRepository<Collaborator>.GetAll()
        {
            throw new NotImplementedException();
        }

        
    }
}
