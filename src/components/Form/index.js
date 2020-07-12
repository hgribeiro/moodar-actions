import React, { useState } from 'react';

import { Container } from './styles';
import { useAgendamentos } from '../../hooks/Agenda';

function Form({ id }) {
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [observacao, setObservacao] = useState('');

  const { agendamentos, salvarAgendamento } = useAgendamentos();

  function handleSubmit(event) {
    event.preventDefault();
    salvarAgendamento(parseInt(id));
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="h-input-box-duplo">
          <div className="h-input-item">
            <label htmlFor="empresa">Empresa:</label>
            <input
              id="empresa"
              placeholder="Sua empresa incrível"
              value={empresa}
              onChange={(event) => setEmpresa(event.target.value)}
              type="text"
            />

            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              placeholder="Seu e-mail incrível"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
          </div>

          <div className="h-input-item">
            <label htmlFor="hora">Horário:</label>
            <input
              id="hora"
              placeholder="O melhor horário"
              value={hora}
              onChange={(event) => setHora(event.target.value)}
              type="text"
            />

            <label htmlFor="data">Data:</label>
            <input
              id="data"
              placeholder="A melhor data"
              value={data}
              onChange={(event) => setData(event.target.value)}
              type="date"
            />
          </div>
        </div>

        <label htmlFor="data">Endereço:</label>
        <input
          id="endereco"
          placeholder="O endereço de vocês"
          value={endereco}
          onChange={(event) => setEndereco(event.target.value)}
          type="text"
        />

        <label htmlFor="data">
          Quer nos dizer algo mais especifico? Fique a vontade!
        </label>
        <input
          id="observacao"
          placeholder="Se quiser especificar algo mais, pode nos contar aqui!"
          value={observacao}
          onChange={(event) => setObservacao(event.target.value)}
          type="text"
        />

        <button type="submit">Agendar Ação!</button>
      </form>
    </Container>
  );
}

export default Form;
