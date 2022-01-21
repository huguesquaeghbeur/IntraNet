using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace IntraNetAPI.Repositories
{
    public class ProofRepository : BaseRepository, IRepository<Proof>
    {
        public ProofRepository(DataContext dataContext) : base(dataContext)
        {
        }

        public bool Delete(Proof element)
        {
            throw new NotImplementedException();
        }

        public Proof FinById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Proof> GetAll()
        {
            throw new NotImplementedException();
        }

        public bool Save(Proof element)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Proof> Search(Expression<Func<Proof, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Proof SearchOne(Expression<Func<Proof, bool>> searchMethode)
        {
            throw new NotImplementedException();
        }

        public bool Update(Proof element)
        {
            throw new NotImplementedException();
        }
    }
}
