using System;

namespace IntraNetAPI.Services
{
    public class FormatService
    {
        public FormatService() { }

        public DateTime FormatDate(DateTime date)
        {
            return Convert.ToDateTime(date.ToString("dd/MM/yyyy"));
        }
        //public string FormatDate(DateTime date)
        //{
        //    return date.ToString("dd/MM/yyyy");
        //}
    }
}
