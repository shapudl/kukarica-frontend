import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #fff6c7;
    --text-color: #333333;
    --font-size: 16px;

    --primary-font: 'Belgrano', serif;
    --secondary-font: 'Love Ya Like A Sister', cursive;
    
    --special-font: 'Gloria Hallelujah', cursive;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);

    font-family: var(--primary-font);
  }
`;

export default GlobalStyles;