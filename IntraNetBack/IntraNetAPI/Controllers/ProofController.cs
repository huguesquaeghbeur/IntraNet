using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.StaticFiles;
using System.IO;
using Microsoft.AspNetCore.Cors;

namespace IntraNetAPI.Controllers
{
    [EnableCors("allConnections")]
    [Route("intranet/v1/proof")]
    public class ProofController : ControllerBase
    {

    [HttpGet("{filePath}")]
    public async Task<ActionResult> DownloadFile(string filePath)
    {
        var provider = new FileExtensionContentTypeProvider();
        if (!provider.TryGetContentType(filePath, out var contentType))
        {
            contentType = "application/octet-stream";
        }
        var bytes = await System.IO.File.ReadAllBytesAsync("pdf/"+filePath);
        return File(bytes, contentType, Path.GetFileName(filePath));
    }
}
}
