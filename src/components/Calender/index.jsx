import React, { useState } from 'react';

const Calendar = ({ onDateSelect }) => {
  const [fromDate, setFromDate] = useState('');
  // const [toDate, setToDate] = useState('');

  const handleFromDateChange = (e) =>  setFromDate(e.target.value);

  // const handleToDateChange = (e) => setToDate(e.target.value);

  const send = ()=> fromDate && onDateSelect(fromDate);

  return (
    <div>
      <label htmlFor="fromDate">מתאריך: </label>
      <input
        type="date"
        id="fromDate"
        value={fromDate}
        onChange={handleFromDateChange}
      />
      <br />
      {/* <label htmlFor="toDate">עד: </label>
      <input
        type="date"
        id="toDate"
        value={toDate}
        onChange={handleToDateChange}
      /> */}
      <div onClick={send} style={{border:'1px solid black',borderRadius:'7px' , padding:'3px'}}>חפש</div>
    </div>
  );
};

export default Calendar;
