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
  const deltarAgendamento = useCallback(
    (idDeletado) => {
      console.log('awww');
      const novoAgendamento = [...agendamentos];

      novoAgendamento.splice(idDeletado, 1);
      console.log(novoAgendamento);

      localStorage.setItem(
        '@moodar:idAgendado',
        JSON.stringify(novoAgendamento)
      );
      setAgendamentos(novoAgendamento);
    },
    [agendamentos]
  );

  const salvarAgendamento = useCallback(
    (idAgendado) => {
      const novoAgendamento = [...agendamentos];

      novoAgendamento.push(idAgendado);

      localStorage.setItem(
        '@moodar:idAgendado',
        JSON.stringify(novoAgendamento)
      );
      setAgendamentos(novoAgendamento);
    },
    [agendamentos]
  );

  return (
    <AgendaContext.Provider
      value={{
        agendamentos,
        salvarAgendamento,
        deltarAgendamento,
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
