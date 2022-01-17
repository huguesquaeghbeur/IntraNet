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
    public class SpentRepository : BaseRepository, IRepository<Spent>
    {
        public SpentRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public Spent FinById(int id)
        {
            return _dataContext.Spents.Include(s=>s.Mission).Include(s=>s.Proofs).FirstOrDefault(s=>s.Id == id);
        }

        public IEnumerable<Spent> GetAll()
        {
            return _dataContext.Spents.Include(s => s.Mission).Include(s => s.Proofs);
        }

        public bool Save(Spent element)
        {
            _dataContext.Spents.Add(element);
            return _dataContext.SaveChanges() > 0;
        }

        public IEnumerable<Spent> Search(Expression<Func<Spent, bool>> predicate)
        {
            return _dataContext.Spents.Include(s => s.Mission).Include(s => s.Proofs).Where(predicate);
        }

        public Spent SearchOne(Expression<Func<Spent, bool>> searchMethode)
        {
            return _dataContext.Spents.Include(s => s.Mission).Include(s => s.Proofs).Where(searchMethode).FirstOrDefault();
        }

        public bool Update(Spent element)
        {
            return _dataContext.SaveChanges()>0;
        }
    }
}
