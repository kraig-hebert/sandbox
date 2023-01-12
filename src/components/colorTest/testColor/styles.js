import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  button: (props) => ({
    width: props.width,
    color: props.buttonColor,
  }),
}));
