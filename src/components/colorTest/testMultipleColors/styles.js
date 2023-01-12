import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  colorButton: (props) => ({
    color: props.buttonColor,
  }),
});
