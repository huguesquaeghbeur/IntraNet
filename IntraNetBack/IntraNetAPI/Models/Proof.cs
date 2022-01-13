using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IntraNetAPI.Models
{
    public class Proof
    {
        private int id;
        private string pdfUrl;

        public int Id { get => id; set => id = value; }
        public string PdfUrl { get => pdfUrl; set => pdfUrl = value; }
    }
}
