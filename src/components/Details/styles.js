import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100%; */
  width: 100%;

  background-color: #309ae1;
  padding: 20px;
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    border-radius: 4px;

    figure {
      width: 90%;
      max-width: 459px;
      figcaption {
        font-size: 13px;
        text-align: center;
        @media (min-width: 600px) {
          font-size: 11px;
        }
      }
      img {
        border-radius: 4px;

        width: 100%;
      }
    }

    .h-info {
      height: 100%;
      width: 90%;
      max-width: 459px;

      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .h-title {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        width: 100%;
        margin-bottom: 50px;

        h2 {
          align-self: center;
        }
      }
    }
    .h-img-tag {
      display: flex;
      div {
        margin: 7px;
        img {
          margin: 5px;
          width: 20px;
        }
      }
    }
  }
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
