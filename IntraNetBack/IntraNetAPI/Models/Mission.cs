using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace IntraNetAPI.Models
{
    public class Mission
    {
        private int id;
        private bool isActive;
        private string name;
        private string description;
        private DateTime startTime;
        private DateTime endTime;

        public int DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        [JsonIgnore]
        public virtual Department Department { get; set; }
        [JsonIgnore]
        public virtual List<Collaborator> Collaborators { get; set; }
        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Description { get => description; set => description = value; }
        public DateTime StartTime { get => startTime; set => endTime = value; }
        public DateTime EndTime { get => endTime; set => endTime = value; }
        public bool IsActive { get => isActive; set => isActive = value; }
    }
}
