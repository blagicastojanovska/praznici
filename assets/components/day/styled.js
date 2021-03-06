import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const weekdayStyles = css`
  text-transform: uppercase;
  font-size: 0.5rem;
  color: ${colors.grey};
  font-weight: 800;
`;

const monthdayStyles = css`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${colors.dark};
`;

const backgroundStyles = css`
  color: ${colors.white};
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  background-color: ${({ background }) => background};
`;

export const StyledDay = styled.p`
  flex: 0 0 calc(100% / 7);
  margin-bottom: 0;
  text-align: center;
  font-family: Montserrat, sans-serif;
  ${({ weekdays }) => weekdays && weekdayStyles};
  ${({ monthdays }) => monthdays && monthdayStyles};
  ${({ disabledDays }) => disabledDays && "visibility: hidden"};
  ${({ background }) => background && backgroundStyles};

  &:nth-child(n + 8) {
    margin-top: 0.5rem;
  }
`;

export const StyledTooltip = styled(Tippy)`
  .tippy-content {
    position: relative;
    padding: 0.3125rem 0.9375rem;
    background: ${colors.darkBlue};
    color: ${colors.white};
    font-family: Montserrat, sans-serif;
    font-size: 0.875rem;
    text-align: center;
    box-shadow: 0 0 2.1875rem rgba(42, 61, 61, 0.15);
  }

  .tippy-arrow {
    color: ${colors.darkBlue};
  }
`;
