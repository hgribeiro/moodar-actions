import React from 'react';

import { Container, Catalogo } from './styles';

import { actions, categories } from '../../Data/data';

import { useAgendamentos } from '../../hooks/Agenda';

import Cartao from '../../components/Cartao';
import Header from '../../components/Header';

function Agendamentos() {
  const { agendamentos } = useAgendamentos();
  const actionsAgendados = actions.filter((action) => {
    for (let i = 0; i < agendamentos.length; i++) {
      if (agendamentos[i] === action.id) return true;
    }
    return false;
  });
  return (
    <Container>
      <Header />
      <Catalogo>
        {actionsAgendados.map((action) => (
          <Cartao
            key={action.id}
            id={action.id}
            photo={action.photo}
            titulo={action.titulo}
            category={categories[action.category[0]].nome}
            variant={categories[action.category[0]].color}
            description={action.description}
            audiencia={action.audiencia}
            tempo={action.tempo}
          />
        ))}
      </Catalogo>
    </Container>
  );
}

export default Agendamentos;
