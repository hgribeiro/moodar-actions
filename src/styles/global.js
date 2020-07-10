import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   }

   html, body, #root {
     height: 100%;
     width: 100%;

   }

   body {
    background: #F0F2F5;
    -webkit-font-smoothing: antialiased;

  }

  #root {
    display: flex;

    align-content: center;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body, input, button, a  {
    font-family: Verdana, Geneva, Tahoma,sans-serif;
    font-size: 15px;
  }
`;
