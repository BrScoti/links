import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  //@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
  a {
  color: inherit;
  text-decoration: none;
  }

  *{
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 16px;
    color: #303030;
    font-family: 'Open Sans', sans-serif;
  }

`;

export { GlobalStyle };