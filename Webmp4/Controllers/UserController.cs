using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Webmp4.Data;
using Webmp4.Data.Models;
using Webmp4.Services;

namespace Webmp4.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private Context _context;

        public UserController(Context context, IUserService userService)
        {
            _userService = userService;
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromForm] string login, [FromForm] string password)
        {
            var user = _userService.Authenticate(login, password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromForm] string login, [FromForm] string password)
        {
            var user = _userService.CreateNew(login, password);

            if (user == null)
                return BadRequest(new { message = "Username is already exist" });

            return Ok(user);
        }

        [Authorize(Roles = "admin")]
        [HttpGet("all")]
        public IEnumerable<User> GetAll()
        {
            return _context.Users.ToList();
        }

        [Authorize]
        [HttpGet("info")]
        public IActionResult Info()
        {
            string userId = HttpContext.User.Claims.FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier).Value;

            if (userId != null) {
                var user = _context.Users.FirstOrDefault(x => x.Id == userId);

                if (user != null)
                    return new ObjectResult(
                        new UserResponse(user)
                    );
            }

            return NotFound();
        }
    }
}