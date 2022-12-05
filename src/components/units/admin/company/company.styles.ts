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

export const H2 = styled.h2`
  font-size: ${styleSet.fontSizes.strong};
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
  width: 18%;
  font-family: ${styleSet.fonts.B};
`;

export const SubLabel = styled.label`
  padding-right: 0.6rem;
`;

export const HolydayTable = styled.div`
  width: 100%;
`;

export const TableTitleWrapper = styled.div`
  padding: 0.6rem 0;
  width: 100%;
  border-bottom: 1px solid ${styleSet.colors.gray};

  font-size: ${styleSet.fontSizes.small};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem; ;
`;

export const TableUl = styled.ul`
  li {
    padding-top: 0.6rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const TableTitle = styled.span`
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 0.6rem;
  width: 100%;
  height: 6rem;
  resize: none;
`;

export const RightInner = styled.div`
  width: 100%;
`;

export const Explanation = styled.p`
  padding: 0.6rem 0;
  width: 100%;
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.darkgray};
`;

export const Select = styled.select`
  padding: 0.3rem;
`;
