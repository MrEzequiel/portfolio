import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   /* nprogress lib style */
   #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: ${({ theme }) => theme.colorsPrimary.p800};
    position: fixed;
    z-index: 1024;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${props =>
      props.theme.colorsPrimary.p1400}, 0 0 5px ${props =>
  props.theme.colorsPrimary.p1400};
    opacity: 1.0;
    transform: rotate(3deg) translate(0px, -4px);
  }
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }


  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  :root {
    scroll-behavior: smooth;
    scroll-padding-top: ${({ theme }) => theme.spaces.medium_2};
    /* hack to rem = px */
    font-size: 62.5%;
  }

  body {
    font: 300 1.6rem ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colorsGrey.g12};
    color: ${({ theme }) => theme.colorsGrey.g2};

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colorsGrey.g12};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colorsPrimary.p800};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colorsPrimary.p900};
  }

  ::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.colorsPrimary.p600};
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
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
    -webkit-tap-highlight-color: transparent;
  }
`
