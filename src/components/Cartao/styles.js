import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  @media (min-width: 500px) {
    max-width: 250px;
  }

  .h-card-body {
    display: flex;
    flex-direction: column;

    .h-card-title {
      font-weight: 600;
      align-self: center;
    }

    span {
      align-self: center;
      font-size: 0.7rem;
      margin-bottom: 8px;
    }
  }
`;
