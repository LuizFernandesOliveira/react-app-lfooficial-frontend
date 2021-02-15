import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    font-size: 60%;
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(#1ea2ac, #103330);
    height: 100vh;
    width: 100vw;
  }

  a {
    text-decoration: none;
  }
`;