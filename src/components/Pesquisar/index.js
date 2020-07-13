import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { useFiltro } from '../../hooks/Filtro';
import { categories } from '../../Data/data';

function Pesquisar(value) {
  const { pesquisarDados, pesquisarDadosCategoria, actions } = useFiltro();

  function handleInput(event) {
    const inputValue = event.target.value;
    pesquisarDados(inputValue, actions);
  }
  function handleInputCategory(event) {
    const inputValue = event.target.value;
    pesquisarDadosCategoria(inputValue);
  }

  return (
    <Container>
      <input
        type="text"
        onChange={handleInput}
        id="filtro"
        placeholder="Qual ação você está procurando?"
      />

      <select onChange={handleInputCategory} name="select">
        <option value="" selectd="true">
          Categoria:
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.nome}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default Pesquisar;
