using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Webmp4.Data;
using Webmp4.Data.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Webmp4.Controllers
{
    public class VideosController : Controller
    {
        private VideosContext _videosContext;

        public VideosController(VideosContext videosContext)
        {
            _videosContext = videosContext;
        }

        // GET: /videos/list&offset={offset}&limit={limit}
        [HttpGet]
        public IEnumerable<Video> GetVideos(int offset, int limit)
        {
            return _videosContext.Videos.ToList().Skip(offset).Take(limit);
        }
    }
}
