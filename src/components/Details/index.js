import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';

import { Container } from './styles';

import { actions } from '../../Data/data';
import { useId } from '../../hooks/Id';
import Users from '../../assets/users.png';
import Presencial from '../../assets/lecture.png';
import Remoto from '../../assets/video-call.png';

function Details() {
  const { idToShow } = useId();
  const [index, setIndex] = useState(idToShow - 1);

  return (
    <Container>
      <section>
        <figure>
          <img src={actions[index].photo} alt="Action" />
          <figcaption>Ação realizada na HUGSFOT.</figcaption>
        </figure>
        <div className="h-info">
          <div className="h-title">
            <h2>{actions[index].titulo}</h2>
            <Badge pill variant={actions[index].category[1]}>
              {actions[index].category[0]}
            </Badge>
          </div>
          <p>{actions[index].description}</p>
          <span className="h-img-tag">
            <div>
              <img src={Users} alt="número de participantes" />
              <small>{actions[index].audiencia} participantes</small>
            </div>
            <div>
              <img src={Remoto} alt="Remoto" />
              <small>Remoto</small>
            </div>
            <div>
              <img src={Presencial} alt="Presencial" />
              <small>Presencial</small>
            </div>
          </span>
        </div>
      </section>
    </Container>
  );
}

export default Details;
