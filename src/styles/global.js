import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: #FAFAFA;
    color: black;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Baloo 2', cursive;
    font-weight: 400;
    font-size: 1rem;
  }
`