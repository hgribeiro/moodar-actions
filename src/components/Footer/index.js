import React from 'react';

import { Container } from './styles';
import Lovecode from '../../assets/lovecode.png';

function Footer() {
  return (
    <Container>
      <p>
        Made with <img src={Lovecode} alt="coracao com codigo" /> by Hugo
        Ribeiro
      </p>
    </Container>
  );
}

export default Footer;
