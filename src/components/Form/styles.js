import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .h-input-box-duplo {
      display: flex;
      flex-direction: column;

      @media (min-width: 600px) {
        flex-direction: row;
      }
      .h-input-item {
        display: flex;
        flex-direction: column;

        width: 100%;

        &:first-child {
          margin-right: 8px;
        }
      }
    }
    button {
      font-weight: 600;
      margin-top: 10px;
      padding: 10px;
      border-radius: 4px;
      background-color: #e61748;
      color: white;
      font-size: 18px;
    }
    input {
      margin-bottom: 5px;
      padding: 2px 2px 2px 1px;
    }
  }
`;
