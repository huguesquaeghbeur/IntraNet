using System.Collections.Generic;

namespace IntraNetAPI.Models
{
    public class Mission
    {
        private int id;
        private bool isActive;
        public virtual Department Department { get; set; }
        public virtual List<Collaborator> Collaborators { get; set; }
        public int Id { get => id; set => id = value; }
        public bool IsActive { get => isActive; set => isActive = value; }
    }
}
