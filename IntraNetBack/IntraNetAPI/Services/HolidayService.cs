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

        public string validationStateMsg(int validationEnum)
        {

            if (validationEnum == 0)
            {
                return "holiday refused";
            }
            else if (validationEnum == 1)
            {
                return "Initial state holiday";
            }
            else if (validationEnum == 2)
            {
                return "holiday approved by Chief";
            }
            else if (validationEnum == 3)
            {
                return "holiday approved by Human Ressources";
            }
            else if (validationEnum == 4)
            {
                return "holiday approved by All";
            }
            return "unchange validation";
        }
    }
}
