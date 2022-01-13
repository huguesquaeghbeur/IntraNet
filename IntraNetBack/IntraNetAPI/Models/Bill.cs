using System.Collections.Generic;

namespace IntraNetAPI.Models
{
    public class Bill
    {
        private int id;
        public virtual Collaborator Collaborator { get; set; }
        public virtual List<Spent> Spents { get; set; }
        public int Id { get => id; set => id = value; }
    }
}
