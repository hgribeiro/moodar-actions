import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Details from '../../components/Details';
import Footer from '../../components/Footer';

function Action() {
  return (
    <Container>
      <Header />
      <Details />
      <Footer />
    </Container>
  );
}

export default Action;
