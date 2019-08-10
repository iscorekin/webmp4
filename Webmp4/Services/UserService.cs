using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Webmp4.Data;
using Webmp4.Data.Models;
using Webmp4.Helpers;

namespace Webmp4.Services
{
    public interface IUserService
    {
        void SetContext(Context context);
        User Authenticate(string username, string password);
        User CreateNew(string username, string password);
    }

    public class UserService : IUserService
    {
        private readonly AppSettings _appSettings;
        private Context _context;

        public UserService(IOptions<AppSettings> appSettings, Context context)
        {
            _appSettings = appSettings.Value;
            _context = context;
        }

        public void SetContext(Context context)
        {
            _context = context;
        }

        static private string ComputeSha256Hash(string rawData)
        {
            using (SHA256 sha256Hash = SHA256.Create())
            {
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                return builder.ToString();
            }
        }

        private string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, user.Role.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(365),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public User Authenticate(string username, string password)
        {
            var user = _context.Users.SingleOrDefault(x => x.Name == username && x.PasswordHash == ComputeSha256Hash(password));

            if (user == null)
                return null;

            return new User {
                Id = user.Id,
                Name = user.Name,
                Role = user.Role,
                Token = GenerateToken(user),
            };
        }

        public User CreateNew(string username, string password)
        {
            if (_context.Users.FirstOrDefault(x => x.Name == username) != null) {
                return null;
            }

            var newUser = new User
            {
                Id = GenericHelpers.GenerateId(),
                Name = username,
                PasswordHash = ComputeSha256Hash(password),
                Role = "user"
            };

            _context.Users.Add(newUser);

            _context.SaveChanges();

            return new User
            {
                Id = newUser.Id,
                Name = newUser.Name,
                Role = newUser.Role,
                Token = GenerateToken(newUser),
            }; ;
        }
    }
}
