﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webmp4.Data;
using Webmp4.Data.Models;
using Webmp4.Helpers;
using Webmp4.Constants;
using MediaToolkit.Model;
using MediaToolkit;
using MediaToolkit.Options;

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
        [Route("list")]
        [HttpGet]
        public IEnumerable<Video> GetVideosList(int offset, int limit)
        {
            return _videosContext.Videos.ToList().Skip(offset).Take(limit);
        }

        [Route("upload")]
        [HttpPost]
        public async Task<IActionResult> UploadVideo(
            [FromForm] string name, 
            [FromForm] string description, 
            [FromForm] string tags, 
            IFormFile video
        )
        {
            if (video != null)
            {
                string id = VideoHelpers.GenerateId();
                string extension = Path.GetExtension(video.FileName);
                string fileName = $"{id}{extension}";

                using (var fileStream = new FileStream(Path.Combine(VideosConstants.VIDEOS_PATH, fileName), FileMode.Create))
                {
                    await video.CopyToAsync(fileStream);
                }

                //Grabs thumbnail from video
                using (var engine = new Engine())
                {
                    var mediaVideoFile = new MediaFile { Filename = Path.Combine(VideosConstants.VIDEOS_PATH, fileName) };
                    var mediaThumbFile = new MediaFile { Filename = Path.Combine(VideosConstants.THUMBS_PATH, $"{id}.jpg") };

                    engine.GetMetadata(mediaVideoFile);
                    var options = new ConversionOptions { Seek = TimeSpan.FromSeconds(0) };
                    engine.GetThumbnail(mediaVideoFile, mediaThumbFile, options);
                }

                _videosContext.Videos.Add(new Video
                {
                    Id = id,
                    VideoFile = fileName,
                    Name = name,
                    Extension = extension,
                    Description = description,
                    UploadDate = DateTime.Now,
                    Thumbnail = $"{id}.jpg",
                });

                _videosContext.SaveChanges();
                return Ok();
            }

            return BadRequest();
        }

        [HttpGet("stream/{id}")]
        public IActionResult GetStream(string id)
        {
            var video = _videosContext.Videos.FirstOrDefault(x => x.Id == id);

            if (video != null)
            {
                FileStream fs = new FileStream(Path.Combine(VideosConstants.VIDEOS_PATH, video.VideoFile), FileMode.Open);

                return File(fs, $"{Path.GetExtension(video.VideoFile)}");
            }

            return NotFound();
        }

        [HttpGet("info/{id}")]
        public IActionResult GetInfo(string id)
        {
            var video = _videosContext.Videos.FirstOrDefault(x => x.Id == id);

            if (video != null)
            {
                return new ObjectResult(video);
            }

            return NotFound();
        }
    }
}