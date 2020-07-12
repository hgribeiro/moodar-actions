import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';

import { Container, Item } from './styles';

import Form from '../../components/Form';

import { actions, categories } from '../../Data/data';
import { useId } from '../../hooks/Id';
import Users from '../../assets/users.png';
import Presencial from '../../assets/lecture.png';
import Remoto from '../../assets/video-call.png';
import Timer from '../../assets/time.png';

function Details() {
  const { idToShow } = useId();
  // const [index, setIndex] = useState(idToShow);

  return (
    <Container>
      <section>
        <figure>
          <img src={actions[idToShow].photo} alt="Action" />
          <figcaption>Ação realizada na HUGSFOT.</figcaption>
        </figure>
        <div className="h-info">
          <div className="h-title">
            <h2>{actions[idToShow].titulo}</h2>
            <Badge
              pill
              variant={categories[actions[idToShow].category[0]].color}
            >
              {categories[actions[idToShow].category[0]].nome}
            </Badge>
          </div>
          <p>{actions[idToShow].fulldescription}</p>
          <span className="h-img-tag">
            <Item>
              <img src={Users} alt="número de participantes" />
              <small>{actions[idToShow].audiencia} participantes</small>
            </Item>
            {actions[idToShow].category[0] === 0 && (
              <Item>
                <img src={Remoto} alt="Remoto" />
                <small>Remoto</small>
              </Item>
            )}
            {actions[idToShow].category[0] != 0 && (
              <Item>
                <img src={Presencial} alt="Presencial" />
                <small>Presencial</small>
              </Item>
            )}
            <Item>
              <img src={Timer} alt="duracao" />
              <small>{actions[idToShow].tempo} minutos</small>
            </Item>
          </span>
        </div>
      </section>
      <Form id={idToShow} />
    </Container>
  );
}

export default Details;
