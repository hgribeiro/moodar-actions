import React, { createContext, useState, useContext, useCallback } from 'react';
import { actions } from '../Data/data';

const IdContext = createContext();

export const IdProvider = ({ children }) => {
  const [idToShow, setIdToShow] = useState(() => {
    const id = localStorage.getItem('@moodar:id');
    return id;
  });

  const salvarAction = useCallback((id) => {
    localStorage.setItem('@moodar:id', id);
    setIdToShow(id);
  }, []);

  return (
    <IdContext.Provider
      value={{
        idToShow,
        salvarAction,
      }}
    >
      {children}
    </IdContext.Provider>
  );
};

export function useId() {
  const context = useContext(IdContext);

  if (!context) {
    throw new Error('useModal must be used within a IdProvider');
  }
  return context;
}
