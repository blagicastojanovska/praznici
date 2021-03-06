import styled from "styled-components";
import Slider from "react-slick";
import { colors } from "../../styles/colors";
import { fadeInUp } from "../../styles/animations";
import { BlockTitle } from "../../styles";

export const StyledMonthSlider = styled(Slider)`
  @media (max-width: 999px) {
    position: relative;
    padding-top: 3.125rem;
    overflow: hidden;
  }

  @media (min-width: 600px) and (max-width: 999px) {
    .slick-list {
      margin-right: -1.875rem;
    }

    .slick-slide {
      margin-right: 1.875rem;
    }
  }

  @media (min-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    margin-right: -1.875rem;
  }

  .slick-track {
    display: flex;
    align-items: flex-start;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const StyledSliderArrow = styled.button`
  position: absolute;
  top: 0;
  width: 2.8125rem;
  height: 2.8125rem;
  line-height: 2.8125rem;
  border: 0;
  padding: 0;
  background-color: ${colors.lightPink};
  color: ${colors.darkBlue};
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.slick-next {
    right: 0;

    &:before {
      content: "\\e905";
    }
  }

  &.slick-prev {
    left: 0;

    &:before {
      content: "\\e903";
    }
  }

  &:before {
    font-family: "icomoon";
    font-size: 0.75rem;
  }
`;

export const StyledSliderLabel = styled.p`
  position: absolute;
  top: 0.9375rem;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0;
  font-size: 0.8125rem;
  color: ${colors.darkBlue};
  text-align: center;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const StyledCalendarInfo = styled.div`
  @media (max-width: 999px) {
    padding-bottom: 1.5rem;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
  }

  @media (min-width: 1000px) {
    padding-bottom: 3rem;
    padding-left: 4.5vw;
    padding-right: 4.5vw;
    display: flex;
  }
`;

export const StyledPrimaryInfo = styled.div`
  @media (min-width: 1000px) {
    flex: 1 1 auto;
  }
`;

export const StyledSecondaryInfo = styled.div`
  @media (max-width: 999px) {
    animation: ${fadeInUp} 0.3s ease-out;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${colors.lightgrey};
    text-align: center;
    z-index: 111;
  }

  @media (min-width: 1000px) {
    flex: 0 1 auto;
    margin-left: auto;
    text-align: right;
  }
`;

export const StyledCodeListItem = styled.li`
  padding-left: 0.9375rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ color }) => (color ? color : colors.darkBlue)};

    @media (max-width: 999px) {
      top: 0.375rem;
    }

    @media (min-width: 1000px) {
      top: 0.25rem;
    }
  }
`;

export const StyledSquare = styled.span`
  position: relative;
  top: -1px;
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ color }) => color};
`;

export const StyledLinkBtn = styled(BlockTitle)`
  display: block;
  border: 0;
  color: ${colors.extraDarkBlue};
  background-color: transparent;
  cursor: pointer;

  @media (max-width: 999px) {
    flex: 0 1 50%;
    padding: 0.75rem 0.625rem;
    font-size: 0.75rem;

    &:not(:last-child) {
      margin-bottom: 0;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 15%;
        bottom: 15%;
        width: 1px;
        background-color: ${colors.overlay};
      }
    }
  }

  @media (min-width: 1000px) {
    width: 100%;
    padding: 0;
    text-align: right;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledAnchorBtn = styled(BlockTitle)`
  color: ${colors.extraDarkBlue};
  text-decoration: none;

  @media (max-width: 999px) {
    flex: 0 1 50%;
    padding: 0.75rem 0.625rem;
    font-size: 0.75rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
