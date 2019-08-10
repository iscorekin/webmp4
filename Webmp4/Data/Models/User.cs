using System.ComponentModel.DataAnnotations;

namespace Webmp4.Data.Models
{
    public class User
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string PasswordHash { get; set; }
        public string Role { get; set; }
    }

    public class UserResponse
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }
        public UserResponse(User user, string token = null)
        {
            Id = user.Id;
            Name = user.Name;
            Role = user.Role;

            if (token != null)
                Token = token;
        }
    }
}
