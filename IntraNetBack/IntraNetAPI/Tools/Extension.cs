using System;
using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace IntraNetAPI.Tools
{
    public static class Extension
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped<DataContext>();
            services.AddScoped<IRepository<Mission>, MissionRepository>();
            services.AddScoped<IRepository<Collaborator>, CollaboratorRepository>();
        }
    }
}