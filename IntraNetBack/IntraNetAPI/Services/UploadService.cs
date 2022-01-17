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
        private void MakeDir(string path)
        {
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
        }

        public string Upload(IFormFile file)
        {
            string fileName = Guid.NewGuid().ToString() + "-" + file.FileName;
            string path = Path.Combine(Environment.CurrentDirectory, "pdf", fileName);
            MakeDir(Path.Combine(Environment.CurrentDirectory, "pdf"));
            Stream stream = System.IO.File.Create(path);
            file.CopyTo(stream);
            stream.Close();
            return "pdf/" + fileName;
        }
    }
}
