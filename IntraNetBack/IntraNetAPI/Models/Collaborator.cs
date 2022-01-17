using System;
using System.Collections.Generic;

namespace IntraNetAPI.Models
{
    public class Collaborator
    {
        private int id;
        private string firstName;
        private string lastName;
        private string email;
        private string password;
        private DateTime birthday;
        private bool isChief;
        private bool isAdmin;
        private int halfDayBreak;

        public int Id { get => id; set => id = value; }
        public string FirstName { get => firstName; set => firstName = value; }
        public string LastName { get => lastName; set => lastName = value; }
        public DateTime Birthday { get => birthday; set => birthday = value; }
        public bool IsChief { get => isChief; set => isChief = value; }
        public bool IsAdmin { get => isAdmin; set => isAdmin = value; }
        public int HalfDayBreak { get => halfDayBreak; set => halfDayBreak = value; }
        public virtual List<Mission> Missions { get; set; }
        //public virtual List<Bill> Bills { get; set; }
        public virtual List<Holiday> Holidays { get; set; }
        public virtual Department Department { get; set; }
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
    }
}
