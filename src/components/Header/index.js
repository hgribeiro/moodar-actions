import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Image, Image2 } from './styles';

import Logo from '../../assets/logo.png';
import Logo2 from '../../assets/logo2.png';
import Calendar from '../../assets/calendar.png';
import Acao from '../../assets/online-class.png';

function Header() {
  return (
    <Container>
      <Image className="h-logo" src={Logo} alt="Ações Moodar" />
      <Image2 className="h-logo2" src={Logo2} alt="Ações Moodar" />
      <nav>
        <Link to="/">
          <img src={Acao} alt="Ações Moodar" />
          <b>Ações</b>
        </Link>

        <Link to="/agendamentos">
          <img src={Calendar} alt="Ações Moodar" />
          <b>Agendamentos</b>
        </Link>
      </nav>
    </Container>
  );
}

export default Header;
