import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';
import { ICalendarStyleProps } from './calendar.types';

export const WeekWrapper = styled.section`
  max-width: 78.75rem;
  height: ${(props: ICalendarStyleProps) => props.elementHeight || '4.385rem'};
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

  div:first-of-type,
  div:last-of-type {
    color: ${styleSet.colors.fail};
  }
`;

export const DayWrapper = styled.div`
  width: 100%;
  max-width: 11.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  word-break: break-all;
  border: 1px solid ${styleSet.colors.lightGray};
  border-bottom: none;
  border-top: none;
  color: ${(props: ICalendarStyleProps) =>
    props.selectedColor || styleSet.colors.subColor05};
  cursor: pointer;
  label {
    cursor: pointer;
  }
  :hover {
    background-color: ${styleSet.colors.subColor05};
  }
`;

export const FirstLine = styled.div`
  width: 100%;
  max-width: 11.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.625rem 0;
  font-size: ${(props: ICalendarStyleProps) =>
    props.daySize || styleSet.fontSizes.strong};
  border: 1px solid ${styleSet.colors.lightGray};
  font-family: ${styleSet.fonts.EB};
`;

export const DayBox = styled.div`
  overflow: hidden;
  padding-top: 0.625rem;
  height: max-content;
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

export const BtnWrapper = styled.section`
  display: flex;
  padding: 1.5rem 0 1rem 0;
  justify-content: flex-end;
  align-items: center;
`;

export const DateStyle = styled.div`
  width: 50%;
  font-family: ${styleSet.fonts.B};
  font-size: ${(props: ICalendarStyleProps) =>
    props.titleSize || styleSet.fontSizes.strong};
`;

export const YearStyle = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  font-size: ${(props: ICalendarStyleProps) =>
    props.titleSize || styleSet.fontSizes.strong};
  font-family: ${styleSet.fonts.B};
`;
