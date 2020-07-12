import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  max-width: 960px;

  border-right: 1px solid;
  border-left: 1px solid;
  border-color: rgba(225, 32, 76, 0.07);
`;

export const Catalogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;

  align-items: flex-start;
  justify-content: space-between;
`;
