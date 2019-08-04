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
        public string Token { get; set; }
    }
}
