import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  @media (min-width: 500px) {
    flex-direction: row;
  }
  select {
    padding: 5px;
    margin: 10px;
    width: 90%;

    @media (min-width: 500px) {
      max-width: 200px;
    }
  }

  input {
    width: 90%;
    margin: 10px;
    padding: 5px;
  }
`;
