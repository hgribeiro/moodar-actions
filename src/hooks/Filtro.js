import React, { createContext, useState, useContext, useCallback } from 'react';
import { actions as orginalData } from '../Data/data';

import { useCategoriaFiltro } from './CategoriaFiltro';

const FiltroContext = createContext();

export const FiltroProvider = ({ children }) => {
  const [actions, setActions] = useState(orginalData);
  const { actionsCategorizada, setActionsCategorizada } = useCategoriaFiltro();

  const pesquisarDadosCategoria = useCallback((value) => {
    if (value === '') {
      setActions(orginalData);
      setActionsCategorizada(-1);
    } else {
      const actionsToFilter = [...orginalData];
      const newActions = actionsToFilter.filter(
        (action) => action.category[0] == value
      );
      setActions(newActions);
      setActionsCategorizada(value);
      console.log(newActions);
    }
  }, []);

  const pesquisarDados = useCallback(
    (value, actionsToFilter) => {
      const dadoFiltrado = [];

      if (value.length === 0 || actionsToFilter === []) {
        if (actionsCategorizada != -1) {
          console.log('aqui dentro de todos os ifff');
          pesquisarDadosCategoria(actionsCategorizada);
        } else {
          setActions(orginalData);
        }
      } else {
        for (let i = 0; i < actionsToFilter.length; i++) {
          const newValue = value.toLowerCase();
          const title = actionsToFilter[i].titulo.toLowerCase();

          if (title.includes(newValue)) {
            dadoFiltrado.push(actionsToFilter[i]);
          }
        }
        setActions(dadoFiltrado);
      }
    },
    [actionsCategorizada]
  );

  return (
    <FiltroContext.Provider
      value={{
        pesquisarDados,
        actions,
        pesquisarDadosCategoria,
      }}
    >
      {children}
    </FiltroContext.Provider>
  );
};

export function useFiltro() {
  const context = useContext(FiltroContext);

  if (!context) {
    throw new Error('useFiltro must be used within a FiltroProvider');
  }
  return context;
}
