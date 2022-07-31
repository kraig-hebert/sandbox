import { red, blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
      dark: red[900],
      master: blue[600],
    },
  },
});
