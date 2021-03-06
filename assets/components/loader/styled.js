import styled from "styled-components";
import { loadingAnimation } from "../../styles/animations";

const StyledLoader = styled.div`
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border: 0.5rem solid #335e5d;
    opacity: 1;
    border-radius: 50%;
    animation: ${loadingAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  &:after {
    animation-delay: -0.5s;
  }
`;

export default StyledLoader;