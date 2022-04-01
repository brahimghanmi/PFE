using IdentityServerAspNetIdentity.Models;

namespace IdentityServerAspNetIdentity.Data.Repositories
{
    public interface IUserRepository
    {
         ApplicationUser Create(ApplicationUser applicationUser);
         ApplicationUser GetByEmail(string email);
         ApplicationUser GetById(string id);
    }
}