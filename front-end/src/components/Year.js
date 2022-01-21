import React from 'react';
import moment from 'moment';
import daates from 'react-big-calendar/lib/utils/dates';
import {navigate} from 'react-big-calendar/lib/utils/constants';

function createCalendar(currentDate){
    if(!currentDate){
        currentDate = moment()
    }
    else{
        currentDate = moment(currentDate)
    }

    const first = currentDate.clone().startOf('month')
    const last = currentDate.clone().endOf('month')
    const weekCount = Math.ceil((first.day() + last.date()) / 7)
    const calendar = Object.assign([], {currentDate, first, last})

    for (let weekNumber = 0; weekNumber < weekCount; weekNumber++){}
}