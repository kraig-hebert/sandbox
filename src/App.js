import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/main/Main';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/mainTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
