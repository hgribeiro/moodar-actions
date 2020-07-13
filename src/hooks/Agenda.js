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
    (positionDeletado) => {
      const novoAgendamento = [...agendamentos];

      novoAgendamento.splice(positionDeletado, 1);
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

      const action = actions.find((action) => action.id === idAgendado);
      novoAgendamento.push(action);

      localStorage.setItem(
        '@moodar:idAgendado',
        JSON.stringify(novoAgendamento)
      );
      setAgendamentos(novoAgendamento);
    },
    [agendamentos]
  );

  // const newActionsAgendados = actions.filter((action) => {
  //   for (let i = 0; i < agendamentos.length; i++) {
  //     if (agendamentos[i] === action.id) return true;
  //   }
  //   return false;
  // });

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
