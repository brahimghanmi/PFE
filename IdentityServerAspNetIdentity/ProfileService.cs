using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityServer4.Models;
using IdentityServer4.Services;
using IdentityServerAspNetIdentity.Data;
using IdentityServerAspNetIdentity.Models;
using Microsoft.AspNetCore.Identity;

namespace IdentityServerAspNetIdentity
{
    public class ProfileService : IProfileService
    {
        private readonly UserManager<ApplicationUser> userManager;
        private  ApplicationDbContext dbContext { get; }
        public ProfileService(UserManager<ApplicationUser> userManager, ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
            this.userManager = userManager;

        }

       

        public Task IsActiveAsync(IsActiveContext context)
        {
            var user = userManager.GetUserAsync(context.Subject).Result;
        context.IsActive = user != null && user.LockoutEnd == null;
        return Task.FromResult(0);
    
        }

        public Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            var user = userManager.GetUserAsync(context.Subject).Result;
            var claims = new List<Claim>();

            claims.AddRange(userManager.GetClaimsAsync(user).Result);
            var userClaims = dbContext.UserClaims.Where(m => m.UserId == user.Id).ToList();
            userClaims.ForEach(m => claims.Add(new Claim(m.ClaimType, m.ClaimValue)));
            context.IssuedClaims.AddRange(claims);
            return Task.FromResult(0);

        }
    }
}