import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
`;

export const LeftDiv = styled.div`
  padding: 1rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const RightDiv = styled.div`
  padding: 1rem;
  width: 60%;
  border-left: 1px solid ${styleSet.colors.gray};

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const H4 = styled.h4`
  width: 8rem;
  font-size: ${styleSet.fontSizes.normal};
  font-family: ${styleSet.fonts.B};
`;

export const Textarea = styled.textarea`
  height: 8rem;
`;

export const Tag = styled.span`
  padding: 0.5rem;
  border: 1px solid ${styleSet.colors.gray};
  span {
    color: blue;
  }
`;

export const DetailWrapper = styled.div`
  padding: 1rem 0 0 0;
  border-top: 1px solid ${styleSet.colors.gray};

  display: flex;
  flex-direction: row;
`;

export const Date = styled.div`
  width: 8rem;
  font-family: ${styleSet.fonts.B};
  color: ${styleSet.colors.primary};
`;

export const DateDetail = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-family: ${styleSet.fonts.EB};
  }
`;

export const invisibleBtn = styled.button`
  display: none;
`;
