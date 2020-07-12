import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { AppProvider } from './hooks/index';

const App = () => (
  <AppProvider>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </AppProvider>
);

export default App;
