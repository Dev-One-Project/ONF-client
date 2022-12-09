import styled from '@emotion/styled';
import { styleSet } from '../../../../../commons/styles/styleSet';

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
  border-bottom: 1px solid ${styleSet.colors.gray};
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
  :nth-of-type(2) {
    align-items: flex-end;
  }
  input {
    width: 119px;
    height: 32px;
    border: 1px solid ${styleSet.colors.gray};
    border-radius: 2px;
    @media ${styleSet.breakPoints.mobile} {
      width: 100%;
    }
  }
`;

export const OptSelect = styled.div`
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
  overflow: auto;
  max-width: 1152px;
  ul:first-of-type {
    border-bottom: 2px double ${styleSet.colors.gray};
    li {
      font-family: ${styleSet.fonts.EB};
    }
  }
  ul:not(:first-of-type) {
    border-bottom: 1px solid ${styleSet.colors.gray};
    li {
      font-family: ${styleSet.fonts.M};
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 1900px;
  li:not(:first-of-type) {
    min-width: 115px;
    padding: 0.5rem;
  }
  li:nth-of-type(1) {
    padding: 1rem;
  }

  li:nth-of-type(8) {
    width: 9%;
  }
  li:nth-of-type(9) {
    width: 9%;
  }
  li:nth-of-type(13) {
    width: 11%;
  }
  li:nth-of-type(14) {
    width: 11%;
  }
  li:nth-of-type(15) {
    width: 11%;
  }
`;
