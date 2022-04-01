using System.Linq;
using IdentityServerAspNetIdentity.Data.Repositories;
using IdentityServerAspNetIdentity.Models;

namespace IdentityServerAspNetIdentity.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _applicationDbContext;
        public UserRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext=applicationDbContext;
        }
          public ApplicationUser Create(ApplicationUser applicationUser)
        {
         _applicationDbContext.AspNetUsers.Add(applicationUser);
        _applicationDbContext.SaveChanges();
         return applicationUser;
        }

        public ApplicationUser GetByEmail(string email)
        {
            return _applicationDbContext.AspNetUsers.FirstOrDefault(u=>u.Email==email);
        }
         public ApplicationUser GetById(string id)
        {
            return _applicationDbContext.AspNetUsers.FirstOrDefault(u=>u.Id==id);
        }
    }

   

   
      
}