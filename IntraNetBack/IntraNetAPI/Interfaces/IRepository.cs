using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace IntraNetAPI.Interfaces
{
    public interface IRepository<T>
    {
        bool Save(T element);
        bool Update(T element);
        T FinById(int id);
        IEnumerable<T> Search(Expression<Func<T, bool>> predicate);
        T SearchOne(Expression<Func<T, bool>> searchMethode);
        IEnumerable<T> GetAll();
        bool Delete(T element);
    }
}
