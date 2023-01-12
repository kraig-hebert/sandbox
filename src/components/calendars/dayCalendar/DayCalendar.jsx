import React from 'react';
import { useSelector } from 'react-redux';
import DayCalendarColumn from '../dayCalendarColumn/DayCalendarColumn';
import { useStyles } from './styles';

const DayCalendar = () => {
  const classes = useStyles();
  return (
    <div className={classes.dayCalendar}>
      <DayCalendarColumn
        blockWidth="100%"
        displayTime={true}
        borderRight={true}
        width="90%"
      />
    </div>
  );
};

export default DayCalendar;
