import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  width: 100%;
`;

export const TopWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.subTitle};
  font-family: ${styleSet.fonts.B};
`;

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.8rem;
`;

export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;
`;

export const Label = styled.label`
  width: 16%;
  font-family: ${styleSet.fonts.B};
`;
