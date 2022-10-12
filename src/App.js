import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/mainTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
