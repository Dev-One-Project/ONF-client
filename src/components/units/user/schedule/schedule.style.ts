import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const WeekWrapper = styled.section`
  max-width: 78.75rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid ${styleSet.colors.gray};
`;

export const FirstWrapper = styled.section`
  max-width: 78.75rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid ${styleSet.colors.gray};
  border-bottom: none;
  padding: 0.625rem 0;
`;

export const DayWrapper = styled.div`
  width: 100%;
  max-width: 11.25rem;
  display: flex;
  min-height: 7.5rem;
  flex-direction: column;
  align-items: center;
  max-height: 18.75rem;
  overflow: hidden;
  word-break: break-all;
`;

export const FirstLine = styled.div`
  width: 100%;
  max-width: 11.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${styleSet.fontSizes.strong};
`;

export const DayBox = styled.div`
  overflow: hidden;
  padding-top: 0.625rem;
  height: max-content;
`;

export const BtnWrapper = styled.section`
  display: flex;
  padding: 1.5rem 0 1rem 0;
  justify-content: flex-end;
  align-items: center;
`;

export const BtnBox = styled.article`
  width: 11rem;
  min-width: 11rem;
`;

export const ArrowButton = styled.button`
  border: solid 1px ${styleSet.colors.primary};
  padding: 0.5rem;
  svg {
    height: 1rem;
    width: 1rem;
  }
  :hover {
    background-color: ${styleSet.colors.lightGray};
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateStyle = styled.div`
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.strong};
`;

export const WorkingBtnBox = styled.article`
  width: 11rem;
  min-width: 11rem;
  button {
    :hover {
      background-color: ${styleSet.colors.primary};
      color: ${styleSet.colors.white};
    }
  }
`;
