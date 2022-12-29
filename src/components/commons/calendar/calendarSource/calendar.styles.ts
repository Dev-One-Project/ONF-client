import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const WeekWrapper = styled.section`
  max-width: 78.75rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid ${styleSet.colors.lightGray};
`;

export const FirstWrapper = styled.section`
  max-width: 78.75rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid ${styleSet.colors.lightGray};
  border-bottom: none;
  border-top: none;
`;

export const DayWrapper = styled.div`
  width: 100%;
  height: 4.385rem;
  max-width: 11.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  word-break: break-all;
  border: 1px solid ${styleSet.colors.lightGray};
  border-bottom: none;
  border-top: none;
  cursor: pointer;
  label {
    cursor: pointer;
  }
  :hover {
    background-color: ${styleSet.colors.primary};
  }
`;

export const FirstLine = styled.div`
  width: 100%;
  max-width: 11.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.625rem 0;
  font-size: ${styleSet.fontSizes.strong};
  border: 1px solid ${styleSet.colors.lightGray};
`;

export const DayBox = styled.div`
  overflow: hidden;
  padding-top: 0.625rem;
  height: max-content;
`;
