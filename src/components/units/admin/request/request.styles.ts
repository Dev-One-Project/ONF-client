import styled from '@emotion/styled';

import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.div`
  @media ${styleSet.breakPoints.tablet} {
    width: 95%;
  }
  @media (width: 1024px) {
    width: 100%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 90%;
  }
`;

export const TopWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.subTitle};
  font-family: ${styleSet.fonts.B};
`;

export const Ul = styled.ul`
  padding: 0.1rem 0;
  width: 100%;
  min-width: 1000px;
  border-top: 1px solid ${styleSet.colors.gray};

  li {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: nowrap;

    :nth-of-type(1) {
      border-bottom: 2px double ${styleSet.colors.gray};
      font-family: ${styleSet.fonts.EB};
    }
    :not(:nth-of-type(1)) {
      border-bottom: 1px solid ${styleSet.colors.gray};
    }
    div {
      padding-left: 5px;
    }
    span {
      text-align: center;
      :nth-of-type(1) {
        min-width: 8%;
      }
      :nth-of-type(2) {
        width: 8%;
      }
      :nth-of-type(3) {
        width: 12%;
      }
      :nth-of-type(4) {
        width: 12%;
      }
      :nth-of-type(5) {
        width: 10%;
      }
      :nth-of-type(6) {
        width: 5%;
      }
      :nth-of-type(7) {
        width: 11%;
      }
      :nth-of-type(8) {
        width: 100px;
      }
      :nth-of-type(9) {
        width: 13%;
        min-width: 140px;
        display: flex;
        gap: 0.5rem;
      }
    }
  }
`;
