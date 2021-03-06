import styled from "styled-components";

export const StyledMonth = styled.div`
  & > *:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1000px) {
    flex: 0 0 25%;

    &:nth-child(n + 5) {
      margin-top: 1.875rem;
    }
  }
`;

export const StyledMonthInner = styled.div`
  @media (min-width: 1000px) {
    margin-right: 1.875rem;
    box-shadow: 0 0.625rem 1.875rem rgba(42, 61, 61, 0.1);
    min-height: 100%;
  }
`;

export const StyledMonthName = styled.p`
  margin-bottom: 0;
  padding-top: 0.9375rem;
  padding-bottom: 1.25rem;
  text-align: center;
  font-size: 0.9375rem;
  text-transform: uppercase;
  font-weight: 900;

  @media (min-width: 1000px) {
    padding-top: 1.25rem;
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
  }
`;

export const StyledMonthBody = styled.div`
  @media (min-width: 1000px) {
    padding: 0 0.985rem 0.985rem;
  }
`;

export const StyledDaysWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${({ weekdays }) => weekdays && "padding-bottom: 1.25rem"}
`;
