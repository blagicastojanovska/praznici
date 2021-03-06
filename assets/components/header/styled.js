import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BaseText } from "../../styles";

export const StyledHeaderStyles = styled.div`
  position: relative;

  @media (min-width: 750px) {
    display: flex;
  }

  @media (min-width: 1000px) {
    min-height: 38.75rem;
  }
`;

export const StyledMediaBox = styled.div`
  background-color: ${colors.lightBlue};
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    min-height: 22rem;
  }

  @media (min-width: 750px) {
    flex: 0 1 50%;
  }
`;

export const StyledBubbleStyles = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const StyledFlowerStyles = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;

  @media (max-width: 749px) {
    top: -3rem;
  }

  @media (min-width: 750px) and (max-width: 1499px) {
    top: -4rem;
  }

  @media (min-width: 1500px) {
    top: -7rem;
  }
`;

export const StyledContentBox = styled.div`
  @media (max-width: 749px) {
    padding-top: 1.875rem;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
  }

  @media (min-width: 750px) {
    flex: 0 0 50%;
    align-self: center;
    padding-top: 5rem;
    padding-left: 4.5vw;
    padding-right: 4.5vw;
  }

  @media (min-width: 1000px) {
    padding-bottom: 5rem;
  }

  & > p:last-of-type {
    margin-bottom: 0;
  }
`;

export const StyledMainTitle = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  color: ${colors.white};
  margin-bottom: 0;
  text-align: center;
  line-height: 1;
  text-transform: uppercase;
  width: 95%;

  span {
    display: block;
  }

  @media (max-width: 599px) {
    font-size: 2em;
  }

  @media (min-width: 600px) and (max-width: 749px) {
    font-size: 3em;
  }

  @media (min-width: 750px) and (max-width: 999px) {
    font-size: 2.5em;
  }

  @media (max-width: 999px) {
    bottom: 0.9375rem;

    span {
      margin-top: 1.25rem;
      font-size: 0.71rem;
    }
  }

  @media (min-width: 1000px) {
    font-size: 3.2em;
    bottom: 2rem;

    span {
      margin-top: 2rem;
      font-size: 1rem;
    }
  }
`;

export const StyledIntroText = styled(BaseText)`
  @media (min-width: 1000px) {
    font-size: 1.125rem;
  }
`;
