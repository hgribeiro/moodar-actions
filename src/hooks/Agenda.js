import React, { createContext, useState, useContext, useCallback } from 'react';
import { actions } from '../Data/data';
const AgendaContext = createContext();

export const AgendaProvider = ({ children }) => {
  const [agendamentos, setAgendamentos] = useState(() => {
    const agendamentosAntigos = localStorage.getItem('@moodar:idAgendado');
    if (agendamentosAntigos != null) {
      return JSON.parse(agendamentosAntigos);
    }

    return [];
  });

  const salvarAgendamento = useCallback((idAgendado) => {
    const oldAgendamentos = [...agendamentos];

    oldAgendamentos.push(idAgendado);

    localStorage.setItem('@moodar:idAgendado', JSON.stringify(oldAgendamentos));
    setAgendamentos(oldAgendamentos);
  });

  return (
    <AgendaContext.Provider
      value={{
        agendamentos,
        salvarAgendamento,
      }}
    >
      {children}
    </AgendaContext.Provider>
  );
};

export function useAgendamentos() {
  const context = useContext(AgendaContext);

  if (!context) {
    throw new Error('useAgendamentos must be used within a AgendaPrpvider');
  }
  return context;
}
