import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fadeInDownAnchor } from "../../styles/animations";

const StyledAnchorDown = styled.button`
  @media (max-width: 999px) {
    display: none;
  }

  @media (min-width: 1000px) {
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
    display: block;
    width: 5rem;
    height: 5rem;
    padding: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.5em;
    transform: rotate(90deg);
    animation: ${fadeInDownAnchor} 1.7s ease infinite both;

    &:focus {
      outline: none;
    }

    &:hover:before {
      background-color: ${colors.lightPink};
    }

    &:after {
      position: relative;
      z-index: 1;
      color: ${colors.pink};
      font-family: "icomoon";
      content: "\\e905";
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border-radius: 50%;
      transition: background-color 0.2s ease-out;
    }
  }
`;

export default StyledAnchorDown;
