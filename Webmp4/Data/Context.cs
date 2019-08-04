using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webmp4.Data.Models;

namespace Webmp4.Data
{
    public class Context : DbContext
    {
        public DbSet<Video> Videos { get; set; }
        public DbSet<User> Users { get; set; }

        public Context(DbContextOptions<Context> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
