import React, { useState, useEffect } from 'react';

import { Container, Catalogo } from './styles';

import Header from '../../components/Header';
import Pesquisar from '../../components/Pesquisar';
import Cartao from '../../components/Cartao';
import Footer from '../../components/Footer';

import { actions as originalData, categories } from '../../Data/data';
import { useFiltro } from '../../hooks/Filtro';

function Main() {
  const { actions } = useFiltro();
  // const [actionsRender, setActionsRender] = useState(actions);
  // useEffect(() => {
  //   setActionsRender(actions);
  // }, [actions]);
  return (
    <Container>
      <Header />
      <Pesquisar />
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
            page="lista"
          />
        ))}
      </Catalogo>
      <Footer />
    </Container>
  );
}

export default Main;
