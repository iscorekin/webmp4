using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Webmp4.Data.Models
{
    public class Video
    {
        [Key]
        public string Id { get; set; }
        public string VideoFile { get; set; }
        public string Thumbnail { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime UploadDate { get; set; }
        private string _tags { get; set; }
        public List<string> Tags
        {
            get { return _tags.Split(',').ToList(); }
            set { _tags = String.Join(',', value.ToArray()); }
        }
    }
}
