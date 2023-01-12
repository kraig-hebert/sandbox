import React from 'react';
import { useStyles } from './styles';
import { Routes, Route, Link } from 'react-router-dom';
import WeekCalendar from '../calendars/weekCalendar/WeekCalendar';
import DayCalendar from '../calendars/dayCalendar/DayCalendar';
import TestBlue from '../colorTest/testBlue/TestBlue';
import TestMultipleColors from '../colorTest/testMultipleColors/TestMultipleColors';

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <button>
          <Link to="day">Day</Link>{' '}
        </button>
        <button>
          <Link to="week">Week</Link>
        </button>
        <button>
          <Link to="testColorBlue">Blue</Link>
        </button>
        <button>
          <Link to="testMultipleColors">Green</Link>
        </button>
      </div>
      <div className={classes.body}>
        <Routes>
          <Route path="/" element={<DayCalendar />} />
          <Route path="/day/" element={<DayCalendar />} />
          <Route path="/week/" element={<WeekCalendar />} />
          <Route path="/testColorBlue/" element={<TestBlue />} />
          <Route path="/testMultipleColors/" element={<TestMultipleColors />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
