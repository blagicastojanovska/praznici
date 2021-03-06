import { createGlobalStyle } from "styled-components";

const Reboot = createGlobalStyle`
  *,
  *::before,
  *::after { box-sizing: border-box; }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.15;
    text-size-adjust:         100%;
    -ms-text-size-adjust:     100%;
    -moz-text-size-adjust:    100%;
    -webkit-text-size-adjust: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol {
    margin-top: 0;
  }

  blockquote {
    font-style: italic;
  }

  img,
  iframe {
    vertical-align: middle;
    border-style: none;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    border-radius: 0;
    margin: 0;
    overflow: visible;
    text-transform: none;
  }

  button,
  html [type='button'] {
    -webkit-appearance: button;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  a {
    background-color: transparent;
  }

  b,
  strong {
    font-weight: bolder;
  }

  img {
    border-style: none;
  }
`;

export default Reboot;
