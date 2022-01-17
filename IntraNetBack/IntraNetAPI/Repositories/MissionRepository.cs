using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class MissionRepository : BaseRepository, IRepository<Mission>
    {
        public MissionRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public Mission FinById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Mission> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save(Mission element)
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

        public bool Update(Mission element)
        {
            throw new NotImplementedException();
        }
    }
}
