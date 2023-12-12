import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #fff6c7;
    --text-color: #333333;
    --font-size: 16px;

    --color-white: #ffffff;
    --color-black: #000000;

    --color-primary: #fee74b;
    --color-green: #b8c353;
    --color-secondary: #ef795b;
    --color-tertiary: #569c33;

    --primary-font: 'Belgrano', serif;
    --secondary-font: 'Love Ya Like A Sister', cursive;
    
    --special-font: 'Gloria Hallelujah', cursive;
  }

  body {
    background-color: var(--color-green);
    color: var(--text-color);

    font-family: var(--primary-font);
  }

  a {
    text-decoration: none;
    color: var(--text-white);
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;