using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Webmp4.Data.Models;

namespace Webmp4.Data
{
    public class VideosContext : DbContext
    {
        public DbSet<Video> Videos { get; set; }

        public VideosContext(DbContextOptions<VideosContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

    }
}
