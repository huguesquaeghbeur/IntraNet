import React, {Fragment} from 'react';
import '../styles/calendar.css'

import useCalendar from '../hooks/useCalendar';

const Calendar = () =>{
    const {calendarRows , selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth} = useCalendar();

    const dateClickHandler = date =>{
        console.log(date);
    }
    return(
        <Fragment>
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title has-text-centered">Calendrier</h1>
                </div>
            </section>

            <p>{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
            <table className='table'>
                <thead>
                    <tr>
                        {daysShort.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>

                </thead>
                <tbody>
                   {
                       Object.values(calendarRows).map(cols => {
                           return <tr key={cols[0].date}>
                               {cols.map(col => (
                                   col.date === todayFormatted
                                   ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                                       {col.value}
                                   </td>
                                   : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                               ))}
                           </tr>
                       })
                   }
                </tbody>
            </table>
            <button className='button' onClick={getPrevMonth}>Precedent</button>
            <button className='button' onClick={getNextMonth}>Suivant</button>

            
            
        </Fragment>
    )
}

export default Calendar;

