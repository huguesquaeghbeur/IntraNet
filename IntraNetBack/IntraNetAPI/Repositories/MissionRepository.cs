using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web.Http.Results;
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

        public bool Delete(Mission element)
        {
            _dataContext.Missions.Remove(element);
            return true;
        }

        public Mission FinById(int id)
        {
            return _dataContext.Missions.Find(id);
        }

        public IEnumerable<Mission> GetAll()
        {
            return _dataContext.Missions;
        }

        public bool Save(Mission element)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Mission> Search(Expression<Func<Mission, bool>> predicate)
        {
            return _dataContext.Missions.Where(predicate);
        }

        public Mission SearchOne(Expression<Func<Mission, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }
        
        public bool Update(Mission element)
        {
            throw new NotImplementedException();
        }
    }
}

