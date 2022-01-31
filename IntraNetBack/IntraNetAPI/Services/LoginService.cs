using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Http;
using IntraNetAPI.Models;
using IntraNetAPI.Interfaces;
using static IntraNetAPI.Models.Collaborator;

namespace IntraNetAPI.Services
{
    public class LoginService
    {
        private IRepository<Collaborator> _collaboratorRepository;
        //private IHttpContextAccessor _accessor;

        public LoginService(IRepository<Collaborator> collaboratorRepository/*, IHttpContextAccessor accessor*/)
        {
            _collaboratorRepository = collaboratorRepository;
            //_accessor = accessor;
        }

        //public bool Login(string email, string password)
        //{
        //    Collaborator c = _collaboratorRepository.SearchOne(c => c.Email == email && c.Password == password);
        //    if (c != null)
        //    {
        //        _accessor.HttpContext.Session.SetString("isLogged", "true");
        //        return true;
        //    }
        //    return false;
        //}

        //public bool IsLogged()
        //{
        //    if (bool.TryParse(_accessor.HttpContext.Session.GetString("isLogged"), out bool isLogged))
        //    {
        //        if (isLogged)
        //        {
        //            return true;
        //        }
        //    }
        //    return false;
        //}

        public string GenerateToken(Collaborator c)
        {
                List<Claim> claims = new List<Claim>()
                {
                    new Claim(ClaimTypes.Email, c.Email),
                    new Claim(ClaimTypes.Authentication, c.Password),
                    new Claim(ClaimTypes.Role, c.Status.ToString()),
                };
                //signature du token
                SigningCredentials signingCredentials = new SigningCredentials(new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("voici donc une clé de sécurité d'une qualité exceptionnelle")), SecurityAlgorithms.HmacSha256);

                // Création du Token
                JwtSecurityToken jwt = new JwtSecurityToken(issuer: "infinIT", audience: "infinIT", claims: claims, signingCredentials: signingCredentials, expires: DateTime.Now.AddMinutes(1));

                return new JwtSecurityTokenHandler().WriteToken(jwt);
            }

    }
}