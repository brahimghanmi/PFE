using System;
using System.Collections.Generic;
using System.Numerics;
using System.Threading.Tasks;
using IdentityServerAspNetIdentity.Data;
using IdentityServerAspNetIdentity.Data.Dtos;
using IdentityServerAspNetIdentity.Data.Repositories;
using IdentityServerAspNetIdentity.Models;
using IdentityServerHost.Quickstart.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IdentityServerAspNetIdentity.Quickstart.Account

{
    [SecurityHeaders]
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class UserManagementController:Controller
    { 
        private readonly UserManager<ApplicationUser> _userManager; 
        private readonly IUserRepository _repository;

        public UserManagementController(UserManager<ApplicationUser> usermanager,IUserRepository userRepository)
        {
            _userManager=usermanager;
            _repository=userRepository;
            
        }
        
    [HttpPost("create")]
        public async Task<IActionResult> register(RegisterDto dto)
        {
            var applicationUser = new ApplicationUser
            {

                UserName = dto.userName,
                Email = dto.email,
                // PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.password),
                PhoneNumber = dto.phoneNumber
            };
            IdentityResult result =  await  _userManager.CreateAsync(applicationUser, dto.password);
            Console.WriteLine(applicationUser);
            return Created("success",applicationUser);
        }
    [HttpPost("Delete")]
     
        public async Task<IActionResult> deleteUser(Deletedto deletedto) 
        {
          var   user=   _repository.GetById(deletedto.Id);
            Console.WriteLine(deletedto.Id);
            // var claims=await  _userManager.GetClaimsAsync(user);
            // Console.WriteLine(claims[0]);
            
            if(user==null)
            {
                return BadRequest(new{message="User Not Found"});

            }
            
            else
            {
              var result= await _userManager.DeleteAsync(user);
               if(result.Succeeded)
               {
                   return Ok(new{message="user deleted successfully"});

               }
               else{
                   return BadRequest(new{message="user has not been deleted"});
               }

            }
        }
    [HttpPatch("update")]
    public async Task<IActionResult> update(Updatedto updatedto)
    {
     var user= await _userManager.FindByIdAsync(updatedto.Id);
     if(user==null)
     {
         return BadRequest(new{message="invalid user"});
     }
     else{
         user.Email=updatedto.Email;
         user.PhoneNumber=updatedto.PhoneNumber;
         user.UserName=updatedto.Username;
        await _userManager.UpdateAsync(user);
        return Created("user updated successfully",user);
     }

    }
    
    [HttpGet("users")]
    public IActionResult GetUsersAsync()
    
    {
       var users= _userManager.Users;

       return Ok(users);
    }
 
     

        

        
    
    
}
}