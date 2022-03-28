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
    public class HolidayRepository : BaseRepository, IRepository<Holiday>
    {
        public HolidayRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public bool Delete(Holiday element)
        {
            _dataContext.Holidays.Remove(element);
            return _dataContext.SaveChanges() > 0;
        }

        public Holiday FinById(int id)
        {
            return _dataContext.Holidays.Include(h => h.Collaborator).FirstOrDefault(h => h.Id == id);
        }

        public IEnumerable<Holiday> GetAll()
        {
            return _dataContext.Holidays.Include(h => h.Collaborator).ToList();
        }

        public bool Save(Holiday entity)
        {
             _dataContext.Holidays.Add(entity);
            return _dataContext.SaveChanges() > 0;
        }

        public IEnumerable<Holiday> Search(Expression<Func<Holiday, bool>> searchMethode)
        {
            return _dataContext.Holidays.Include(h => h.Collaborator).Where(searchMethode).ToList();
        }

        public Holiday SearchOne(Expression<Func<Holiday, bool>> searchMethode)
        {
            return _dataContext.Holidays.Include(h => h.Collaborator).SingleOrDefault(searchMethode); 
        }

        public bool Update(Holiday entity)
        {
            _dataContext.Holidays.Update(entity);
            return _dataContext.SaveChanges() > 0;

        }
    }
}
