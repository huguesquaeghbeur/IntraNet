using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using Microsoft.EntityFrameworkCore;

namespace IntraNetAPI.Repositories
{
    public class MissionRepository : BaseRepository, IRepository<Mission>
    {
        public MissionRepository(DataContext dataContext) : base(dataContext)
        {
            
        }

        public bool Save(Mission element)
        {
            try
            {
                _dataContext.Missions.Add(element);
                _dataContext.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }

        public bool Update(Mission element)
        {
            return _dataContext.SaveChanges() > 0;
        }

        public Mission FinById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Mission> Search(Expression<Func<Mission, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Mission SearchOne(Expression<Func<Mission, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Mission> GetAll()
        {
            return _dataContext.Missions;
        }
    }
}