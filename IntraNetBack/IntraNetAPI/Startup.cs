using IntraNetAPI.Tools;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntraNetAPI.Models;
using IntraNetAPI.Tools;


namespace IntraNetAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.Converters.Add(new Converters.DateTimeConverter());
            });
            services.AddOurServices();
            
            services.AddCors(options =>
            {
                options.AddPolicy("allConnections", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
                options.AddPolicy("specialOrigin", builder =>
                {
                    builder.WithMethods("GET").WithOrigins("https://localhost:5000");
                    builder.WithMethods("POST").WithOrigins("http://localhost:3000");
                    builder.WithMethods("PATCH").WithOrigins("http://localhost:3000");
                    builder.WithMethods("PUT").WithOrigins("http://localhost:3000");
                    builder.WithMethods("DELETE").WithOrigins("http://localhost:3000");
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();
            app.UseCors(c => c
                .AllowAnyHeader()
                .AllowAnyMethod()
                .SetIsOriginAllowed(origin => true)
                .AllowCredentials());

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{Controller=Mission}/{Action=Getcollabs}/{id?}");
            });
        }
    }
}
