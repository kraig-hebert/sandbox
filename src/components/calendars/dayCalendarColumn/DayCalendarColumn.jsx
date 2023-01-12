import React, { useRef, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { differenceInHours, format } from 'date-fns';
import { useTheme } from 'react-jss';

// import { selectAllCalendars } from '../../../reducers/appSettings';
import { useStyles } from './styles.js';

const DayCalendarColumn = (props) => {
  const ref = useRef();
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

  // add midnight to column
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={1}>
      <div className={classes.time}>mid</div>
    </div>
  );
  // add 1am-11am to column
  for (let i = 1; i < 12; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 1}>
        <div className={classes.time}>{`${i}am`}</div>
      </div>
    );
  }
  // add noon to the column
  renderedTimeBlocks.push(
    <div className={classes.timeBlock} key={13}>
      <div className={classes.time}>noon</div>
    </div>
  );
  // add 1pm through midnight to the column
  for (let i = 13; i < 24; i++) {
    renderedTimeBlocks.push(
      <div className={classes.timeBlock} key={i + 13}>
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

DayCalendarColumn.propTypes = {
  borderRight: PropTypes.bool,
  blockWidth: PropTypes.string,
  displayTime: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default DayCalendarColumn;
