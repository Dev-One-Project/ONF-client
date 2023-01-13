import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

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
`;

export const OptSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const SelectBox = styled.nav`
  width: 50px;
  border: 1px solid ${styleSet.colors.gray};
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.active {
    color: ${styleSet.colors.primary};
  }
`;

export const UlWrapper = styled.section`
  @media ${styleSet.breakPoints.tablet} {
    overflow: auto;
  }
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
    :hover {
      background-color: #eee;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 700px;
  li:not(:first-of-type) {
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
    flex: 1;
  }
  li:nth-of-type(1) {
    padding-left: 1rem;
    width: 4rem;
  }
  li:nth-of-type(2) {
    flex: 0.7;
  }
  li:nth-of-type(3) {
    flex: 1.3;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalField = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 29rem;
`;

export const MemoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 0;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  > label {
    width: 100px;
  }
`;

export const Span = styled.span`
  margin-right: 20px;
`;

export const P = styled.p`
  color: #777;
  font-size: ${styleSet.fontSizes.small};

  :nth-of-type(1) {
    width: 110px;
  }
`;

export const EmptyBox = styled.div`
  height: 36.5px;
`;
