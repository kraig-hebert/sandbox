import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  weekCalendar: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    height: '100%',
  },
  dayContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  dayName: {
    width: '100%',
    textAlign: 'center',
    fontSize: '1.25rem',
  },
});
