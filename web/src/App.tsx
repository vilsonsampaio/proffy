import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import theme from './styles/theme';
import GlobalStyle from './styles/global';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
