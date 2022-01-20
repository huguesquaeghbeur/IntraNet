﻿using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class BillRepository : BaseRepository, IRepository<Bill>
    {
        public BillRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public Bill FinById(int id)
        {
            return _dataContext.Bills.Include(b => b.Collaborator).Include(b => b.Spents).ThenInclude(s => s.Mission).Include(b => b.Spents).ThenInclude(s => s.Proofs).FirstOrDefault(b=>b.Id==id);
        }

        public IEnumerable<Bill> GetAll()
        {
            return _dataContext.Bills.Include(b=>b.Collaborator).Include(b=>b.Spents).ThenInclude(s=>s.Mission).Include(b=>b.Spents).ThenInclude(s=>s.Proofs);
        }

        public bool Save(Bill element)
        {
            _dataContext.Bills.Add(element);
            return _dataContext.SaveChanges() > 0;
        }

        public IEnumerable<Bill> Search(Expression<Func<Bill, bool>> predicate)
        {
            return _dataContext.Bills.Include(b => b.Collaborator).Include(b => b.Spents).ThenInclude(s => s.Mission).Include(b => b.Spents).ThenInclude(s => s.Proofs).Where(predicate);
        }

        public Bill SearchOne(Expression<Func<Bill, bool>> searchMethode)
        {
            return _dataContext.Bills.Include(b => b.Collaborator).Include(b => b.Spents).ThenInclude(s => s.Mission).Include(b => b.Spents).ThenInclude(s => s.Proofs).Where(searchMethode).FirstOrDefault();
        }

        public bool Update(Bill element)
        {
            return _dataContext.SaveChanges() > 0;
        }
    }
}