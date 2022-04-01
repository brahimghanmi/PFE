using System.Linq;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Text;
using IdentityServerAspNetIdentity.Data;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Collections.Generic;

namespace IdentityServerAspNetIdentity.Helpers
{
    public class JwtService
    {
    
     private string secureKey="this is a very secure key ";
    
      public string Generate(string  id)
    {
       
        var symmetricSecurityKey= new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));
        var credentials=new SigningCredentials(symmetricSecurityKey,SecurityAlgorithms.HmacSha256Signature);
        var header=new JwtHeader(credentials);
        var payload=new JwtPayload(id ,null,null,null,DateTime.Today.AddDays(1));
        var securityToken= new JwtSecurityToken(header,payload);
        return new JwtSecurityTokenHandler().WriteToken(securityToken);
    }
    public JwtSecurityToken verify(string jwt){
        var tokenHandler= new JwtSecurityTokenHandler() ;
        var key=Encoding.ASCII.GetBytes(secureKey);
        tokenHandler.ValidateToken(jwt, new TokenValidationParameters
        {
            IssuerSigningKey=new SymmetricSecurityKey(key),
            ValidateIssuerSigningKey=true,
            ValidateIssuer=false,
            ValidateAudience=false,
        },
            out SecurityToken validatedToken);
            return (JwtSecurityToken) validatedToken;
           }

    }
   
}