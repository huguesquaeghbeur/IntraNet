using IntraNetAPI.Interfaces;
using IntraNetAPI.Models;
using IntraNetAPI.Repositories;
using IntraNetAPI.Services;
using Microsoft.Extensions.DependencyInjection;

namespace IntraNetAPI.Tools
{
    public static class Extension
    {
        public static void AddOurServices(this IServiceCollection services)
        {
            services.AddDbContext<DataContext>();
            services.AddScoped<IRepository<Bill>, BillRepository>();
            services.AddScoped<IRepository<Collaborator>, collaboratorRepository>();
            services.AddScoped<IRepository<Department>, DepartmentRepository>();
            services.AddScoped<IRepository<Holiday>, HolidayRepository>();
            services.AddScoped<IRepository<Info>, InfoRepository>();
            services.AddScoped<IRepository<Mission>, MissionRepository>();
            services.AddScoped<IRepository<Proof>, ProofRepository>();
            services.AddScoped<IRepository<Spent>, SpentRepository>();
            services.AddTransient<UploadService>();
            services.AddScoped<FormatService>();
        }
    }
}
