import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    html {
      height: 100%;
      font-size: 62.5%; /* 1rem = 10px */
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
    }
    
    body, input, button {
      font: 500 1.6rem 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      line-height: 1.48;
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
      max-width: 700px;
    }

    @media (min-width: 70rem) {
      :root {
        font-size: 62.5%;
      }
    }
  `}
`;