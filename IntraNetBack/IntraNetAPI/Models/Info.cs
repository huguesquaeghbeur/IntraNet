using System.Collections.Generic;

namespace IntraNetAPI.Models
{
    public class Info
    {
        private int id;
        private string title;
        private string body;

        public int Id { get => id; set => id = value; }
        public string Title { get => title; set => title = value; }
        public string Body { get => body; set => body = value; }
        public virtual Collaborator Collaborator { get; set; }
        public virtual Department Department { get; set; }
    }
}
