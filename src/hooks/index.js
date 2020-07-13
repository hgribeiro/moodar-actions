import React from 'react';

import { AgendaProvider } from './Agenda';
import { IdProvider } from './Id';
import { FiltroProvider } from './Filtro';
import { CategoriaFiltroProvider } from './CategoriaFiltro';

export const AppProvider = ({ children }) => {
  return (
    <IdProvider>
      <CategoriaFiltroProvider>
        <FiltroProvider>
          <AgendaProvider>{children}</AgendaProvider>
        </FiltroProvider>
      </CategoriaFiltroProvider>
    </IdProvider>
  );
};
