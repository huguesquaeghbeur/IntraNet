using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace IntraNetAPI.Models
{
    public class Holiday
    {
        private int id;
        private DateTime startDate;
        private DateTime endDate;
        private bool startOnMorning;
        private bool endOnMorning;
        private int halfDayBreakCount;
        public int CollaboratorId { get; set; }
        [ForeignKey("CollaboratorId")]
        [JsonIgnore]
        public virtual Collaborator Collaborator { get; set; }
        public int Id { get => id; set => id = value; }
        public DateTime StartDate { get => startDate; set => startDate = value; }
        public DateTime EndDate { get => endDate; set => endDate = value; }
        public bool StartOnMorning { get => startOnMorning; set => startOnMorning = value; }
        public bool EndOnMorning { get => endOnMorning; set => endOnMorning = value; }
        public int HalfDayBreakCount { get => halfDayBreakCount; set => halfDayBreakCount = value; }
        public enum ValidationEnum
        {
            Refused,
            InitialState,
            ChiefValidation,
            HRValidation,
            Valided,
        }
        public ValidationEnum Validation { get; set; }
    }
}
