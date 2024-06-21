import React from 'react';
import { Button } from 'react-bootstrap';

const DateSelector = ({ dates, selectedDate, onSelectDate }) => (
  <div className="date-selector">
    {dates.map((date) => (
      <Button
        key={date}
        variant={date === selectedDate ? 'primary' : 'secondary'}
        onClick={() => onSelectDate(date)}
        className="m-1"
      >
        {date}
      </Button>
    ))}
  </div>
);

export default DateSelector;
