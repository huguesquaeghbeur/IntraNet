using IntraNetAPI.Models;
using System;

namespace IntraNetAPI.Services
{
    public class HolidayService
    {
        public int calculHalfDayBreak(DateTime startDate, DateTime endDate, bool startOnMorning, bool endOnMorning)
        {
            int tmpHalfDayBreak = 0;
            if (startDate.DayOfYear == endDate.DayOfYear)
            {
                if (startOnMorning == true && endOnMorning == false)
                {
                    tmpHalfDayBreak = 1;
                }
            }
            if (startDate.DayOfYear < endDate.DayOfYear)
            {
                if (startOnMorning == true && endOnMorning == false)
                {
                    tmpHalfDayBreak += 1;
                }
                else if (startOnMorning == false && endOnMorning == true)
                {
                    tmpHalfDayBreak -= 1;
                }
            }
            return tmpHalfDayBreak;
        }

        public Holiday.ValidationEnum calculStatus(Collaborator collab)
        {
            if (collab != null)
            {
                if (collab.Status == Collaborator.StatusEnum.Basic)
                {
                    if (collab.Department.Title == "Ressources Humaines")
                    {
                        return Holiday.ValidationEnum.HRValidation;
                    }
                    return Holiday.ValidationEnum.InitialState;
                }
                else if (collab.Status == Collaborator.StatusEnum.ProjectChief || collab.Status == Collaborator.StatusEnum.DepartmentChief)
                {
                    if (collab.Department.Title == "Ressources Humaines")
                    {
                        return Holiday.ValidationEnum.HRValidation;
                    }
                    return Holiday.ValidationEnum.ChiefValidation;
                }
            }
            return Holiday.ValidationEnum.InitialState;
        }
    }
}
