import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    scroll-behavior: smooth;
    /* hack to rem = px */
    font-size: 62.5%;
  }

  body {
    font: 300 1.6rem ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colorsGrey.g12};
    color: ${({ theme }) => theme.colorsGrey.g2};
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  button,
  input,
  textarea {
    border: none;
    color: inherit;
    font-family: inherit;
  }
`
