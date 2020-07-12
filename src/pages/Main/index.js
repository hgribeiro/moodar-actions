import React from 'react';

import { Container, Catalogo } from './styles';

import Header from '../../components/Header';
import Cartao from '../../components/Cartao';

import { actions, categories } from '../../Data/data';

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

export default Main;
