import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './contexts/auth';

import Routes from './routes/routes';

import theme from './styles/theme';
import GlobalStyle from './styles/global';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        
      <ToastContainer />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
