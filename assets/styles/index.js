import styled from "styled-components";
import { colors } from "./colors";

export const Section = styled.div`
  background-color: ${({ color }) => color};

  @media (max-width: 999px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (min-width: 1000px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const Wrap = styled.div`
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 999px) {
    position: relative;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
  }

  @media (min-width: 1000px) and (max-width: 1249px) {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }

  @media (min-width: 1250px) {
    padding-left: 7vw;
    padding-right: 7vw;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const BaseText = styled.p`
  margin-bottom: 0.9375rem;
  line-height: 1.5em;
`;

export const BlockTitle = styled.p`
  line-height: 1.5;
  margin-bottom: 0;
  font-weight: 900;

  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }
`;

export const Bold = styled.strong`
  color: ${colors.pink};
`;

export const LineThrough = styled.span`
  text-decoration: line-through;
`;

export const ListUnstyled = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
  font-size: 0.875rem;

  @media (max-width: 999px) { line-height: 1.5; }

  &:not(:last-child) {
    margin-bottom: 0.625rem;
  }

  li:not(:last-child) {
    margin-bottom: 0.625rem;
  }
`;

export const ListItem = styled.li`
  &:before {
    content: "-";
    margin-right: 0.375rem;
  }
`;
