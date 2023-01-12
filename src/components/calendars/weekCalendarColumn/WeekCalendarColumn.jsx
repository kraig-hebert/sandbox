import React, { useRef, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { differenceInHours, format } from 'date-fns';
import { useTheme } from 'react-jss';

// import { selectAllCalendars } from '../../../reducers/appSettings';
import { useStyles } from './styles.js';

const WeekCalendarColumn = (props) => {
  const { dayFilteredEvents, maxAllDayEvents, type } = props;
  const allDayEventsList = dayFilteredEvents.allDay;
  const timedEventsList = dayFilteredEvents.timed;

  const ref = useRef();
  const theme = useTheme();

  const renderedTimeBlocks = [];

  /* 
    value is set when calendar is painted, and is used to set each event width
    see useLayoutEffect()
  */
  const [calendarWidthValue, setCalendarWidthValue] = useState(0);
  const classes = useStyles({
    ...props,
    calendarWidth: calendarWidthValue,
  });

  // returns height of a timeBlock based on how long event is
  const calculateEventHeight = (event) => {
    const diff = differenceInHours(event.endTime, event.startTime);
    const height = diff * 30 + (diff - 3);
    return height;
  };

  // add midnight to column
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={1}>
      {/* {renderTimedEvents(0)} */}
      <div className={classes.time}>mid</div>
    </div>
  );
  // add 1am-11am to column
  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 1}>
        {/* {renderTimedEvents(0)} */}
        <div className={classes.time}>{`${i}am`}</div>
      </div>
    );
  }
  // add noon to the column
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={13}>
      {/* {renderTimedEvents(0)} */}
      <div className={classes.time}>noon</div>
    </div>
  );
  // add 1pm through midnight to the column
  for (let i = 13; i < 24; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 13}>
        {/* {renderTimedEvents(0)} */}
        <div className={classes.time}>{`${i - 12}pm`}</div>
      </div>
    );
  }
  useLayoutEffect(() => {
    setCalendarWidthValue(ref.current.offsetWidth);
  });

  return (
    <div className={classes.dayCalendar} ref={ref}>
      <div className={classes.allDayEvents}>{/* {renderAllDayEvents()} */}</div>
      <div className={classes.timeBlocks}>{renderedTimeBlocks}</div>
    </div>
  );
};

WeekCalendarColumn.propTypes = {
  borderRight: PropTypes.bool,
  blockWidth: PropTypes.string,
  dayFilteredEvents: PropTypes.object,
  displayTime: PropTypes.bool,
  height: PropTypes.string,
  maxAllDayEvents: PropTypes.number,
  width: PropTypes.string,
};

export default WeekCalendarColumn;
