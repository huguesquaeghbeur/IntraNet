using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntraNetAPI.Models;
using IntraNetAPI.Repositories;
using Microsoft.EntityFrameworkCore;

namespace IntraNetAPI.Tools
{
    public class DataContext : DbContext
    {
        public DbSet<Bill> Bills { get; set; }
        public DbSet<Collaborator> Collaborators { get; set; }

        internal void Holiday()
        {
            throw new NotImplementedException();
        }

        public DbSet<Department> Departments { get; set; }
        public DbSet<Holiday> Holidays { get; set; }
        public DbSet<Info> Infos { get; set; }
        public DbSet<Mission> Missions { get; set; }
        public DbSet<Spent> Spents { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            MySqlServerVersion v = new MySqlServerVersion(new System.Version(10, 4, 19));
            optionsBuilder.UseMySql(@"server = localhost; user id = root; database = intranet_db", v);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
