import React from 'react';
import './ExpenseDate.css';

const ExpenseDate=(props)=>{
    const year= props.date.getFullYear();
    const day= props.date.toLocaleString('en-US', {day: '2-digit'});
    const month=props.date.toLocaleString('en-US', {month: 'long'});
    return(
        <div>
            <div className='date_month'>{month}</div>
            <div className='date_day'>{day}</div>
            <div className='date_year'>{year}</div>
        </div>       
    );
}

export default ExpenseDate;