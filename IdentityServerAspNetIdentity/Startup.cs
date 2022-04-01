// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using System;
using IdentityServer4;
using IdentityServerAspNetIdentity.Data;
using IdentityServerAspNetIdentity.Data.Repositories;
using IdentityServerAspNetIdentity.Helpers;
using IdentityServerAspNetIdentity.Models;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace IdentityServerAspNetIdentity
{
    public class Startup
    {
        public IWebHostEnvironment Environment { get; }
        public IConfiguration Configuration { get; }

        public Startup(IWebHostEnvironment environment, IConfiguration configuration)
        {
            Environment = environment;
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)

        
        {
            services.AddCors();
            var connectionString = Configuration.GetConnectionString("connectionString");
            services.AddControllersWithViews();

            services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<JwtService>();
            services.AddScoped<IUserRepository,UserRepository>();
            
            services.AddIdentity<ApplicationUser, IdentityRole>(opt=>
            {
                opt.Lockout.AllowedForNewUsers = true;
                opt.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(2);
                opt.Lockout.MaxFailedAccessAttempts = 3;
            }
            


            )
            
                    .AddEntityFrameworkStores<ApplicationDbContext>()
                    .AddDefaultTokenProviders();
                

            var builder = services.AddIdentityServer(options =>
            {
                options.UserInteraction.LoginUrl="http://localhost:3000/login";
                options.Events.RaiseErrorEvents = true;
                options.Events.RaiseInformationEvents = true;
                options.Events.RaiseFailureEvents = true;
                options.Events.RaiseSuccessEvents = true;

                // see https://identityserver4.readthedocs.io/en/latest/topics/resources.html
                options.EmitStaticAudienceClaim = true;
            })
               
                .AddAspNetIdentity<ApplicationUser>()
                .AddProfileService<ProfileService>()
                .AddConfigurationStore(options =>
            {
                options.ConfigureDbContext = builder => builder.UseSqlite(connectionString);
            })
            // this adds the operational data from DB (codes, tokens, consents)
               .AddOperationalStore(options =>
            {
                options.ConfigureDbContext = builder => builder.UseSqlite(connectionString);

                // this enables automatic token cleanup. this is optional.
                options.EnableTokenCleanup = true;
            });

            // not recommended for production - you need to store your key material somewhere secure
            builder.AddDeveloperSigningCredential();

            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie();
                
        }

        public void Configure(IApplicationBuilder app)
        {
            var cookiePolicyOptions = new CookiePolicyOptions
                {
                    MinimumSameSitePolicy = SameSiteMode.Strict,
                };
            app.UseCors(options=>options
            .WithOrigins(new[]{"http://localhost:3000"})
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());

            if (Environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }

            app.UseStaticFiles();
            app.UseHttpsRedirection();
            // app.UseCookiePolicy(cookiePolicyOptions);
            app.UseRouting();
            app.UseIdentityServer();
            app.UseAuthorization();

            

            
        
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}