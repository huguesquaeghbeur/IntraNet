using System;
using System.Collections.Generic;

namespace IntraNetAPI.Models
{
    public class Bill
    {
        private int id;
        //private bool isSubmitted;
        //private DateTime submissionDate;
        public virtual Collaborator Collaborator { get; set; }
        public virtual List<Spent> Spents { get; set; }
        public int Id { get => id; set => id = value; }
        //public bool IsSubmitted { get => isSubmitted; set => isSubmitted = value; }
        //public DateTime SubmissionDate { get => submissionDate; set => submissionDate = value; }
    }
}
