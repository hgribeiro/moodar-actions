import React, { useEffect, useState } from 'react';

import { Container, Catalogo, Title } from './styles';

import { actions, categories } from '../../Data/data';

import { useAgendamentos } from '../../hooks/Agenda';

import Cartao from '../../components/Cartao';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function Agendamentos() {
  const { agendamentos } = useAgendamentos();
  // const [actionsAgendados, setActionsAgendados] = useState();
  // useEffect(() => {
  //   const newActionsAgendados = actions.filter((action) => {
  //     for (let i = 0; i < agendamentos.length; i++) {
  //       if (agendamentos[i] === action.id) return true;
  //     }
  //     return false;
  //   });
  //   setActionsAgendados(newActionsAgendados);
  // }, [agendamentos]);
  // console.log(actionsAgendados);
  return (
    <Container>
      <Header />
      <Title>AGENDAMENTOS</Title>
      <Catalogo>
        {agendamentos.map((action, index) => (
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
            page="agendamento"
            index={index}
          />
        ))}
      </Catalogo>
      <Footer />
    </Container>
  );
}

export default Agendamentos;
