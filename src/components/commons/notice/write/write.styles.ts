import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.div`
  margin-bottom: 1rem;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  padding-right: 2rem;
  padding-bottom: 1rem;
  font-size: ${styleSet.fontSizes.strong};
  font-family: ${styleSet.fonts.EB};
`;

export const WriteTop = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  select {
    width: 20%;
  }
`;
