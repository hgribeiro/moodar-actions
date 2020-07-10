import React from 'react';

import { Container, Catalogo } from './styles';

import Header from '../../components/Header';
import Cartao from '../../components/Cartao';

import { actions } from '../../Data/data';

function Main() {
  return (
    <Container>
      <Header />
      <Catalogo>
        {actions.map((action) => (
          <Cartao
            key={action.id}
            id={action.id}
            photo={action.photo}
            titulo={action.titulo}
            category={action.category[0]}
            variant={action.category[1]}
            description={action.description}
            audiencia={action.audiencia}
          />
        ))}
      </Catalogo>
    </Container>
  );
}

export default Main;
