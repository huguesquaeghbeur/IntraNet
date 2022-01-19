using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace IntraNetAPI.Models
{
    public class Bill
    {
        private int id;
        private bool isSubmitted;
        private DateTime submissionDate;
        public int CollaboratorId { get; set; }
        [ForeignKey("CollaboratorId")]
        [JsonIgnore]
        public virtual Collaborator Collaborator { get; set; }
        public virtual List<Spent> Spents { get; set; }
        public int Id { get => id; set => id = value; }
        public bool IsSubmitted { get => isSubmitted; set => isSubmitted = value; }
        public DateTime SubmissionDate { get => submissionDate; set => submissionDate = value; }
    }
}

