import styled from '@emotion/styled';
import { styleSet } from '../../../../../commons/styles/styleSet';

export const Container = styled.div`
  width: calc(100vw - 18rem);
  @media ${styleSet.breakPoints.tablet} {
    width: calc(100vw - 9.5rem);
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
      align-items: flex-end;
      gap: 0.5rem;

      & > div:first-of-type {
        width: 100%;
      }
    }
  }
`;

export const Input = styled.input`
  width: 119px;
  height: 32px;
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 2px;
  @media ${styleSet.breakPoints.tablet} {
    width: 100%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 100%;
  }
`;

export const Span = styled.span`
  width: 40px;
  text-align: end;
  font-size: ${styleSet.fontSizes.small};
`;

export const Block = styled.div`
  background: ${styleSet.colors.primary};
  opacity: 0.3;
  width: 10px;
  height: 10px;
`;

export const OptSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const UlWrapper = styled.section`
  overflow: auto;
`;

export const DateUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 1100px;
  border-bottom: 1px solid ${styleSet.colors.gray};
  div:first-of-type {
    min-width: 80px;
    border-right: 1px solid ${styleSet.colors.gray};
    border-left: 1px solid ${styleSet.colors.gray};
    padding: 0.2rem 0;
    margin: 0;
  }
  div:last-of-type {
    display: flex;
    justify-content: center;
    min-width: 45px;
    border-right: 1px solid ${styleSet.colors.gray};
    padding: 0.2rem 0;
  }
  li {
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 25px;
    text-align: center;
    border-right: 1px solid ${styleSet.colors.gray};
    padding: 0.3rem;
    font-size: ${styleSet.fontSizes.small};
  }
`;
