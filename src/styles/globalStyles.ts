import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  html body #root {
    height: 100vh;
  }
`;

export default GlobalStyle;
