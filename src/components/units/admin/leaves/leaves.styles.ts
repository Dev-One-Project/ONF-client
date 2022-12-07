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

export const OptWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${styleSet.colors.darkGray};
`;

export const OptBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  :nth-of-type(1) {
    @media ${styleSet.breakPoints.mobile} {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  input {
    width: 119px;
    height: 32px;
    @media ${styleSet.breakPoints.mobile} {
      width: 100%;
    }
  }
`;

export const OptSelectBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  :first-of-type {
    width: 100%;
  }
  input {
    width: 100px;
    @media ${styleSet.breakPoints.mobile} {
      width: 100%;
    }
  }
`;

export const UlWrapper = styled.section`
  @media ${styleSet.breakPoints.tablet} {
    overflow: auto;
  }
  ul:nth-of-type(1) {
    border-bottom: 2px double ${styleSet.colors.darkGray};
  }
  ul:not(:first-of-type) {
    border-bottom: 1px solid ${styleSet.colors.darkGray};
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 700px;
  li:not(:first-child) {
    min-width: 85px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
  }
  li:nth-of-type(1) {
    width: 57px;
    padding-left: 1rem;
  }
  li:nth-of-type(3) {
    width: 21%;
    @media ${styleSet.breakPoints.tablet} {
      max-width: 15%;
    }
  }
`;

export const UlData = styled(Ul)`
  li:not(:first-child) {
    font-family: ${styleSet.fonts.M};
  }
  li:nth-of-type(4) {
    text-align: center;
    padding-left: 0.1rem;
  }
  li:nth-of-type(5) {
    text-align: center;
    padding-left: 0.1rem;
  }
  li:nth-of-type(6) {
    text-align: center;
    padding-left: 0.1rem;
  }
  li:nth-of-type(7) {
    text-align: center;
    padding-left: 0.1rem;
  }
`;
