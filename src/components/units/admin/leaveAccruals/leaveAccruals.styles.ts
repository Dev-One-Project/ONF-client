import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

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

export const OptSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  :last-of-type {
    width: 100%;
  }
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Date = styled.div`
  border: 1px solid ${styleSet.colors.gray};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 0;
  background-color: #eee;
`;

export const SelectBox = styled.nav`
  width: 50px;
  border: 1px solid ${styleSet.colors.gray};
  font-size: ${styleSet.fontSizes.small};
  padding: 0.3rem 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #eee;
  }
  &.active {
    background-color: ${styleSet.colors.subColor05};
  }
  :first-of-type {
    border-right: 0px;
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

export const EmployeeUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 700px;
  @media ${styleSet.breakPoints.tablet} {
    min-width: 1000px;
  }
  li {
    min-width: 175px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
  }
  li:nth-of-type(2) {
    min-width: 25%;
  }
`;

export const SelectListUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  /* min-width: 600px; */
  li {
    min-width: 120px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
  }
  li:nth-of-type(1) {
    min-width: 80px;
  }
`;

export const ListUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 950px;
  li {
    min-width: 108px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
  }
  li:nth-of-type(5) {
    min-width: 12%;
  }
  li:nth-of-type(6) {
    min-width: 11%;
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
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  label {
    display: block;
    width: 100px;
    padding-right: 1rem;
  }
  input {
    height: 32px;
  }
`;

export const MemoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0 0;
  gap: 1rem;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 72rem;
  min-height: 30rem;
`;

export const Left = styled.div`
  flex: 3;
  border-right: 1px solid #ddd;
`;
export const Right = styled.div`
  min-width: 31rem;
  flex: 2;
  padding: 1rem;
`;

export const PBox = styled(Right)`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${styleSet.colors.darkGray};
  }
`;

export const AccrualsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  strong {
    font-size: ${styleSet.fontSizes.small};
    color: ${styleSet.colors.primary};
    font-family: ${styleSet.fonts.B};
    :hover {
      color: #111;
      border-bottom: 1px solid #111;
      cursor: pointer;
    }
  }
`;
