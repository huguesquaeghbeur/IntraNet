using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntraNetAPI.Models
{
    public class User
    {
        private int id;
        private string email;
        private string password;

        public User()
        {

        }

        public int Id { get => id; set => id = value; }
        public string Email { get => email; set => email = value; }
        public string Password { get => password; set => password = value; }
    }
}
