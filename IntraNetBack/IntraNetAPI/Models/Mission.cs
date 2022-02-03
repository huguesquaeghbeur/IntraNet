using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace IntraNetAPI.Models
{
    public class Mission
    {
        private int id;
        private bool isActive;
        public int DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        [JsonIgnore]
        public virtual List<Collaborator> Collaborators { get; set; }
        public int Id { get => id; set => id = value; }
        public bool IsActive { get => isActive; set => isActive = value; }
    }
}
