import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap');

    :root {
      font-size: 50%;
      
      @media (min-width: 700px) {
        font-size: 60%;
      }
    }

    * {
      margin: 0;
      padding: 0;

      box-sizing: border-box;
      
      outline: 0;
    }

    html {
      height: 100%;
    }

    body {
      background: ${theme.colors.background};
      color: ${theme.colors.textBase};

      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
    }

    body, #root {
      position: relative;

      min-height: 100vh;

      display: flex;
      flex-direction: column;

      overflow-x: hidden;
    }
    
    body, input, button {
      font: 400 1.6rem 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      line-height: 1.48;
      
      outline: none;
      
      /* reset appearance */
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
    }

    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 700;
    }
    
    a {
      background: none;

      font-weight: 700;
      
      border: 0;
      
      cursor: pointer;
      
      text-decoration: none;
      
      transition: 180ms ease-in-out;
    }

    button {
      cursor: pointer;
    }

    ul {
      padding: 0;

      text-align: left;
      
      list-style: none;
    }

    .container { 
      width: 90vw;
      max-width: 70rem;
    }
  `}
`;