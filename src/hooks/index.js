import React from 'react';

import { AgendaProvider } from './Agenda';
import { IdProvider } from './Id';

export const AppProvider = ({ children }) => {
  return (
    <IdProvider>
      <AgendaProvider>{children}</AgendaProvider>
    </IdProvider>
  );
};
