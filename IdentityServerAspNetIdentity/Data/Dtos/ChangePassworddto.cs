using System.ComponentModel;
namespace IdentityServerAspNetIdentity.Data.Dtos
{
    public class ChangePassworddto
    {
    public string Email { get; set; }
    public string CurrentPassword { get; set; }
    public string NewPassword { get; set; }
    }
}