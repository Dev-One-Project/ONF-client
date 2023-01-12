import styled from '@emotion/styled';
import { styleSet } from '../../../../../commons/styles/styleSet';

export const Container = styled.div`
  width: 100%;
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
  height: 36px;
  border: 1px solid #ddd;
  padding: 0.5rem;
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

// table

export const Table = styled.table`
  min-width: 1100px;
  overflow: auto;

  th,
  td {
    border: 1px solid ${styleSet.colors.gray};
    font-size: 8px;
    min-width: calc((100vw - 26.5rem) / 31);
    max-width: 30px;
    height: 3rem;
    text-align: center;
    box-sizing: border-box;

    &:nth-of-type(1) {
      min-width: 80px;
      font-family: ${styleSet.fonts.EB};
    }

    &:last-of-type {
      min-width: 45px;
      font-family: ${styleSet.fonts.EB};
    }
  }
  td label {
    font-family: ${styleSet.fonts.B};
  }
`;
