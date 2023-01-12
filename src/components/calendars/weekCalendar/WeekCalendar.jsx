import React from 'react';
import { startOfWeek, addDays } from 'date-fns';
import DayCalendarColumn from '../dayCalendarColumn/DayCalendarColumn';
import WeekCalendarColumn from '../weekCalendarColumn/WeekCalendarColumn';
import { useStyles } from './styles';

const WeekCalendar = () => {
  const classes = useStyles();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentDate = new Date();
  const startDateofWeek = startOfWeek(currentDate);
  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(addDays(startDateofWeek, i));
  }
  const setBorderRight = (index) => {
    if (index === days.length - 1) return true;
    else return false;
  };

  const renderedDayColumns = days.map((day, index) => {
    return (
      <div className={classes.dayContainer} key={index}>
        <p className={classes.dayName}>{`${dates[index].getDate()} ${
          days[index]
        }`}</p>
        <DayCalendarColumn
          blockWidth="100%"
          displayTime={day === 'Sun' ? true : false}
          borderRight={setBorderRight(index)}
          height={'50px'}
          width="100%"
        />
      </div>
    );
  });

  return <div className={classes.weekCalendar}>{renderedDayColumns}</div>;
};

export default WeekCalendar;
