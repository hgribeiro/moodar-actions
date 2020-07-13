import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
    a {
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: #eeeeee;
      b {
        display: none;
        /* margin-left: 0.5rem; */
        @media (min-width: 600px) {
          display: inline;
        }
      }
      &:first-child {
        margin-right: 50px;
      }
    }
    img {
      width: 40px;
      margin-right: 8px;
      @media (min-width: 600px) {
        width: 30px;
      }
    }
  }
`;

export const Image = styled.img`
  display: none;
  max-width: 150px;

  @media (min-width: 600px) {
    display: inline-block;
  }
`;
export const Image2 = styled.img`
  display: inline-block;
  max-width: 70px;

  @media (min-width: 600px) {
    display: none;
  }
`;
