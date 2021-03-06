import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { fadeIn } from "../../styles/animations";

export const StyledLanguagesSwitcher = styled.div`
  position: absolute;
  top: 1.5rem;
  z-index: 2;

  @media (max-width: 999px) {
    right: 0.9375rem;
  }

  @media (min-width: 1000px) {
    right: 1.5rem;
  }

  &.state-active ul {
    display: block;
    animation: ${fadeIn} 0.3s ease-out;
  }
`;

export const StyledActiveLanguage = styled.button`
  background-color: ${colors.white};
  display: inline-block;
  padding: 0.5rem 1.25rem 0.5rem 0.5rem;
  border: 1px solid ${colors.lightgrey};
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease-out, border-color 0.3s ease-out;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${colors.lightPink};
    border-color: ${colors.lightPink};
  }

  &:after {
    font-family: "icomoon";
    content: "\\e90a";
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%) rotate(90deg);
    display: inline-block;
    font-size: 0.5rem;
  }
`;

export const StyledLanguagesList = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: ${colors.lightPink};
  list-style-type: none;
  line-height: 2;

  .switcher-label {
    display: none;
  }
`;

const currentLanguageStyles = css`
  background-color: ${colors.pinkActive};
  color: ${colors.white};
  cursor: not-allowed;
`;

export const StyledLanguageTrigger = styled.button`
  display: block;
  width: 100%;
  border: 0;
  background-color: transparent;
  padding: 0.1875rem;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  ${({ current }) => current && currentLanguageStyles};

  &:focus {
    outline: none;
  }

  &:hover:not(:disabled) {
    background-color: ${colors.pinkHover};
  }
`;
