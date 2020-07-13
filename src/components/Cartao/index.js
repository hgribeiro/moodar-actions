import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import { Button, Card, Badge } from 'react-bootstrap';

import { useId } from '../../hooks/Id';
import { Redirect } from 'react-router-dom';
import { useAgendamentos } from '../../hooks/Agenda';

function Cartao({
  id,
  photo,
  titulo,
  description,
  category,
  variant,
  audiencia,
  tempo,
  page,
  index,
}) {
  let history = useHistory();
  const { salvarAction } = useId();
  const { deltarAgendamento } = useAgendamentos();

  function handleDetails() {
    salvarAction(id);
    history.push('/action');
  }
  function handleDelete() {
    deltarAgendamento(index);
    // history.push('/action');
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
            <span>
              {audiencia} parcipantes | {tempo} minutos
            </span>
            {page === 'lista' && (
              <Button onClick={() => handleDetails()} variant="outline-primary">
                Saber mais!
              </Button>
            )}
            {page === 'agendamento' && (
              <Button onClick={() => handleDelete()} variant="outline-danger">
                Cancelar
              </Button>
            )}
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Cartao;
