using System.Collections.Generic;

namespace IntraNetAPI.Models
{
    public class Spent
    {
        private int id;
        private decimal amount;
        private string commentary;
        private bool advanceCash;
        private bool isExactAmount;
        public virtual Mission Mission { get; set; }
        public virtual List<string> PdfUrl { get; set; }
        public int Id { get => id; set => id = value; }
        public decimal Amount { get => amount; set => amount = value; }
        public string Commentary { get => commentary; set => commentary = value; }
        public bool AdvanceCash { get => advanceCash; set => advanceCash = value; }
        public bool IsExactAmount { get => isExactAmount; set => isExactAmount = value; }

        public enum ValidationEnum
        {
            Refused,
            InitialState,
            ChiefValidation,
            BookKeeperValidation,
            Valided,
        }
        public ValidationEnum Validate { get; set; }
    }
}
