import React, { createContext, useState, useContext, useCallback } from 'react';
import { actions as orginalData } from '../Data/data';

import Acao1 from '../assets/Acao1.jpeg';
const CategoriaFiltroContext = createContext();

export const CategoriaFiltroProvider = ({ children }) => {
  const [actionsCategorizada, setActionsCategorizada] = useState(-1);

  return (
    <CategoriaFiltroContext.Provider
      value={{
        actionsCategorizada,
        setActionsCategorizada,
      }}
    >
      {children}
    </CategoriaFiltroContext.Provider>
  );
};

export function useCategoriaFiltro() {
  const context = useContext(CategoriaFiltroContext);

  if (!context) {
    throw new Error(
      'useCategoriaFiltro must be used within a CategoriaFiltroProvider'
    );
  }
  return context;
}
