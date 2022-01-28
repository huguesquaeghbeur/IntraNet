using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace IntraNetAPI.Models
{
    public class Spent
    {
        public Spent()
        {
            Proofs = new List<Proof>();
        }

        private int id;
        private decimal amount;
        private string commentary;
        private bool advanceCash;
        private bool isExactAmount;
        private DateTime expenseDate;
        public int MissionId { get; set; }
        public FeeTypeEnum FeeType { get; set; }
        public ValidationEnum Validate { get; set; }


        [ForeignKey("MissionId")]
        [JsonIgnore]
        public virtual Mission Mission { get; set; }
        public virtual List<Proof> Proofs { get; set; }
        public int Id { get => id; set => id = value; }
        public decimal Amount { get => amount; set => amount = value; }
        public string Commentary { get => commentary; set => commentary = value; }
        public bool AdvanceCash { get => advanceCash; set => advanceCash = value; }
        public bool IsExactAmount { get => isExactAmount; set => isExactAmount = value; }
        public DateTime ExpenseDate { get => expenseDate; set => expenseDate = value; }

        public enum ValidationEnum
        {
            Refused,
            InitialState,
            ChiefValidation,
            BookKeeperValidation,
            Valided,
        }
        public enum FeeTypeEnum
        {
            Other,
            Transport,
            Registration,
            Equipment,
        }


    }
}
