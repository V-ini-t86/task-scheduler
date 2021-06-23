import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
import './Cal.css'

function Calendar() {
    // console.log(new Date(2021,4,1));
    const today = new Date();

    const yy = today.getUTCFullYear();
    const mm = today.getMonth();
    const mainMonth = today.getMonth();
    const dd = today.getDate();
    console.log(today.getMonth());
    const [incMonths,setMonths] = useState(mm);
    
    
    const newToday = new Date(yy,incMonths,dd);
    const day = new Date(newToday.getUTCFullYear(),newToday.getMonth(),1).toDateString().substr(0,3);
    console.log(day);
    const monthStr = newToday.toDateString().toString().substr(4,4);


    const months = [31,28,31,30,31,30,31,31,30,31,30,31];
    const mont = months[newToday.getMonth()];
    let date = newToday.getUTCDate();

    const incByOne = ()=>{
        setMonths(incMonths+1);
    }
    const decByOne = ()=>{
        setMonths(incMonths-1);
    }
    
    console.log(date);
    var k = 0;
    if( day === "Mon"){
        k = 1;
    }else if(day === "Tue"){
        k = 2;
    }else if(day === "Wed"){
        k = 3;
    }else if(day === "Thu"){
        k = 4;
    }else if(day === "Fri"){
        k = 5;
    }else if(day === "Sat"){
        k = 6;
    }else if(day === "Sun"){
        k = 7;
    }

    const skipDays = [];
    for (let index = 0; index < k; index++) {
        skipDays.push(index);
    }

    const numbers = [];
    for (let index = 0; index < mont; index++) {
        numbers.push(index);
    }

    return (
        <div className="calendar">
            <h1>Calender</h1>
            <div className="calendar__Months">
                <div className="calendar__heading" >
                    <button onClick={decByOne}><AiOutlineLeft /></button>
                    <h4 className="calendar__currentMonths">{monthStr}</h4>
                    <button onClick={incByOne} ><AiOutlineRight /></button>

                </div>
                <div className="calendar__day">
                    <h5>Su</h5>
                    <h5>Mo</h5>
                    <h5>Tu</h5>
                    <h5>We</h5>
                    <h5>Th</h5>
                    <h5>Fr</h5>
                    <h5>Sa</h5>
                    
                    {skipDays.map((val,i)=>{
                        return <h6>{}</h6>
                    })}

                    {numbers.map((val,i,months) =>{
                        return i === date && mainMonth === mm  ? <button key={i} style={{background:"darkgray"}} >{i+1}  </button> : <button key={i}>{i+1}</button> 
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calendar;
