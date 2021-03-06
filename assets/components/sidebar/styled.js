import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BlockTitle, ListUnstyled } from "../../styles";

export const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  height: 100%;
  opacity: 0;
  transition: right 0.5s, opacity 0.5s, z-index 0.5s;

  @media (max-width: 999px) {
    right: -100vw;
    width: 100%;
  }

  @media (min-width: 1000px) {
    right: -42vw;
    width: 42vw;
  }

  &:before {
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.overlay};
    opacity: 0;
    transition: opacity 0.5s;
  }
`;

export const StyledInner = styled.div`
  position: relative;
  z-index: 4;
  padding-top: 5rem;
  padding-right: 4.5vw;
  padding-left: 4.5vw;
  background-color: ${colors.white};
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledHolidaysTitle = styled(BlockTitle)`
  position: relative;
  color: ${({ odd }) => odd && colors.whiteShade};

  &:not(:last-child) {
    margin-bottom: 0.9375rem;
  }

  &:before {
    content: "";
    position: absolute;
    left: -2.5rem;
    right: -2.5rem;
    top: -0.1875rem;
    bottom: -0.1875rem;
    background: url(${({ styleElement }) => styleElement}) no-repeat center / 100%;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export const StyledHolidaysList = styled(ListUnstyled)`
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 1.875rem;
  }

  &:last-child {
    margin-bottom: 5rem;
  }
`;

export const StyledTriggerCloseSidebar = styled.button`
  position: absolute;
  top: 0.975rem;
  right: 0.9875rem;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background-color: ${colors.lightPink};
  color: ${colors.pink};
  text-align: center;
  cursor: pointer;

  &:focus { outline: none; }

  @media (min-width: 1000px) { display: none; }

  &:before {
    font-family: "icomoon";
    content: '\\e906';
    font-size: 0.875rem;
  }
`;