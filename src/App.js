import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { IdProvider } from './hooks/Id';

const App = () => (
  <IdProvider>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </IdProvider>
);

export default App;
