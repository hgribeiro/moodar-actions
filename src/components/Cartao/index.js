import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import { Button, Card, Badge } from 'react-bootstrap';

import { useId } from '../../hooks/Id';
import { Redirect } from 'react-router-dom';

function Cartao(props) {
  let history = useHistory();
  const { salvarAction } = useId();
  const {
    id,
    photo,
    titulo,
    description,
    category,
    variant,
    audiencia,
  } = props;

  function handleDetails() {
    salvarAction(id);
    history.push('/action');
  }

  return (
    <React.Fragment>
      <Container>
        <Card>
          <Card.Img variant="top" src={photo} />
          <Card.Body className="h-card-body">
            <Card.Title className="h-card-title">{titulo}</Card.Title>
            <Badge pill variant={variant}>
              {category}
            </Badge>
            <Card.Text>{description}</Card.Text>
            <span>{audiencia} parcipantes | Remoto Ou Presencial</span>
            <Button onClick={() => handleDetails()} variant="outline-primary">
              Saber mais!
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Cartao;
