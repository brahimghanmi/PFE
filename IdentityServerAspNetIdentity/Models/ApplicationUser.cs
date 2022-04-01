using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace IdentityServerAspNetIdentity.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser

    {
        override
        public string Id { get; set; }
        override
        public string Email { get; set; }
        override
        public string UserName { get; set; }
        
        //  [JsonIgnore] public string PasswordHash { get; set; }
        override
        public string   PhoneNumber{get;set;}
        
    }
}
