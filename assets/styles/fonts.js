import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Black.eot');
      src: url('/fonts/Montserrat-Black.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Montserrat-Black.woff2') format('woff2'),
          url('/fonts/Montserrat-Black.woff') format('woff'),
          url('/fonts/Montserrat-Black.ttf') format('truetype'),
          url('/fonts/Montserrat-Black.svg#Montserrat-Black') format('svg');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-Regular.eot');
      src: url('/fonts/Montserrat-Regular.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Montserrat-Regular.woff2') format('woff2'),
          url('/fonts/Montserrat-Regular.woff') format('woff'),
          url('/fonts/Montserrat-Regular.ttf') format('truetype'),
          url('/fonts/Montserrat-Regular.svg#Montserrat-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Montserrat';
      src: url('/fonts/Montserrat-ExtraBold.eot');
      src: url('/fonts/Montserrat-ExtraBold.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Montserrat-ExtraBold.woff2') format('woff2'),
          url('/fonts/Montserrat-ExtraBold.woff') format('woff'),
          url('/fonts/Montserrat-ExtraBold.ttf') format('truetype'),
          url('/fonts/Montserrat-ExtraBold.svg#Montserrat-ExtraBold') format('svg');
      font-weight: 800;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
    font-family: 'icomoon';
    src: url("/fonts/icomoon.eot");
    src: url('/fonts/icomoon.eot?#iefix') format('embedded-opentype'),
    url("/fonts/icomoon.woff") format('woff'),
    url("/fonts/icomoon.woff2") format('woff2'),
    url("/fonts/icomoon.ttf") format('truetype'),
    url("/fonts/icomoon.svg") format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [class^='icon-']:before,
  [class*=' icon-']:before,
  [class^='icon-']:after,
  [class*=' icon-']:after {
    font-family: 'icomoon';
  }

  html,
  body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  b,
  strong {
    font-weight: 900;
  }
`;
