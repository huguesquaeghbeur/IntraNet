using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace IntraNetAPI.Services
{
    public class UploadService
    {

        private IWebHostEnvironment _webHostEnvironment;
        public UploadService(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public string Upload(IFormFile file)
        {
            string fileName = Guid.NewGuid().ToString() + "-" + file.FileName;
            string path = Path.Combine(_webHostEnvironment.WebRootPath, "proofs", fileName);
            Stream stream = System.IO.File.Create(path);
            file.CopyTo(stream);
            stream.Close();
            return "proofs/" + fileName;
        }
    }
}
