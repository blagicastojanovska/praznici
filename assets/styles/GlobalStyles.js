import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";
import ColorBasics from "./colors";
import Reboot from "./reboot";

const StyledBodyStyles = createGlobalStyle`
  html {
    @media (max-width: 1439px) {
      font-size: 16px;
    }

    @media (min-width: 1440px) and (max-width: 1649px) {
      font-size: 18px;
    }

    @media (min-width: 1650px) and (max-width: 1919px) {
      font-size: 20px;
    }

    @media (min-width: 1920px) {
      font-size: 22px;
    }
  }

  body {
    &.state-body-fixed {
      position: relative;
      overflow: hidden;

      @media (max-width: 750px) {
        position: fixed;
        height: 100%;
      }
    }

    &.state-sidebar-open .Sidebar {
      right: 0;
      opacity: 1;
      z-index: 1111;

      &:before {
        opacity: 1;
      }
    }
  }
`;

const GlobalStyles = () => (
  <>
    <Reboot />
    <StyledBodyStyles />
    <Fonts />
    <ColorBasics />
  </>
);

export default GlobalStyles;
