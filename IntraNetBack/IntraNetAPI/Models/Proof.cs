using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace IntraNetAPI.Models
{
    public class Proof
    {
        private int id;
        private string pdfUrl;
 
        [JsonIgnore]
        public virtual Spent spent { get; set; }
        public int Id { get => id; set => id = value; }
        public string PdfUrl { get => pdfUrl; set => pdfUrl = value; }
    }
}
