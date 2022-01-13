using System.Collections.Generic;

namespace IntraNetAPI.Models
{
    public class Department
    {
        private int id;
        private string title;
        public virtual List<Mission> Missions { get; set; }
        public virtual List<Collaborator> Collaborators { get;set; }
        public int Id { get => id; set => id = value; }
        public string Title { get => title; set => title = value; }
    }
}
