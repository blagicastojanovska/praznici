import styled from "styled-components";
import { colors } from "../../styles/colors";
import { BaseText, Section, Wrap } from "../../styles";

export const StyledFooterSection = styled(Section)`
  @media (max-width: 999px) {
    margin-top: 1.5rem;
    padding-top: 1.875rem;
    padding-bottom: 1.875rem;
  }

  @media (min-width: 1000px) {
    margin-top: 3rem;
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }
`;

export const StyledFooterWrap = styled(Wrap)`
  @media (min-width: 750px) {
    display: flex;
    align-items: flex-start;
  }

  & > p {
    margin-left: auto;

    @media (min-width: 750px) {
      text-align: right;
    }
  }
`;

export const StyledFooterText = styled(BaseText)`
  color: ${colors.white};
  line-height: 1.5;
  font-size: 0.875rem;
  margin-bottom: 0.625rem;

  span {
    color: ${colors.yellow};
  }
`;

export const StyledSocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 749px) {
    margin-bottom: 1.2rem;
  }

  .social-icon {
    display: block;
    height: 30px;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }

    &:focus {
      outline: none;
    }
  }
`;
