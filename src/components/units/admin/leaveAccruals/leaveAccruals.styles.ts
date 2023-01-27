import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';
import { IStyedDate } from './leaveAccruals.types';

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

      & > div:first-of-type {
        width: 100%;
      }
    }
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

export const ListUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 950px;
  li {
    flex: 1;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
  }
  li:nth-of-type(1) {
    flex: 0.3;
    width: 1rem;
  }
  li:nth-of-type(6) {
    flex: 1.2;
  }
  li:nth-of-type(7) {
    flex: 1.2;
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
  min-width: 27rem;
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & input {
    height: 32px;
  }
`;

export const Label = styled.label`
  display: block;
  width: 100px;
  padding-right: 1rem;
`;

export const MemoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 0;
  gap: 1rem;
`;

export const ModalBoxRow = styled.div`
  display: flex;
  flex-direction: ${(props: IStyedDate) =>
    props.memoChecked ? 'column' : 'row'} !important;
  align-items: center;
  label:nth-of-type(2) {
    margin-right: 1rem;
  }
  & > div {
    height: 2rem;
    width: ${(props: IStyedDate) => (props.memoChecked ? '100%' : '')};
  }
  & > input {
    width: 5rem;
    border-radius: 0;
  }
`;

export const LabelText = styled.label`
  color: #666;
  font-size: ${styleSet.fontSizes.small};
`;

export const P = styled.p`
  color: #777;
  font-size: ${styleSet.fontSizes.small};
  margin-bottom: 1rem;
`;

export const EmptyBox = styled.div`
  height: 36.5px;
  width: 100%;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 1rem;
`;
