import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.div`
  @media ${styleSet.breakPoints.tablet} {
    width: 95%;
  }
  @media (width: 1024px) {
    width: 100%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 90%;
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
    }
  }
  input {
    width: 119px;
    height: 32px;
    border: 1px solid ${styleSet.colors.gray};
    border-radius: 2px;
    @media ${styleSet.breakPoints.mobile} {
      width: 100%;
    }
  }
`;

export const OptSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  :first-of-type {
    width: 100%;
  }
  input {
    width: 100px;
    border: 1px solid ${styleSet.colors.gray};
    border-radius: 2px;
    @media ${styleSet.breakPoints.mobile} {
      width: 100%;
    }
  }
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Date = styled.div`
  border: 1px solid ${styleSet.colors.gray};
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px 0px 0px 2px;
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
  ul {
    border-bottom: 2px double ${styleSet.colors.gray};
  }
  li {
    border-bottom: 1px solid ${styleSet.colors.gray};
  }
`;

export const EmployeeUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 1000px;
  span {
    min-width: 175px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
  }
  span:nth-of-type(1) {
    min-width: 13%;
  }
  span:nth-of-type(2) {
    min-width: 13%;
  }
  span:nth-of-type(3) {
    width: 22%;
  }
`;

export const EmployeeLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 1000px;
  span {
    min-width: 175px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.M};
  }
  span:nth-of-type(1) {
    min-width: 13%;
  }
  span:nth-of-type(2) {
    min-width: 13%;
  }
  span:nth-of-type(3) {
    width: 22%;
  }
  span:nth-of-type(4) {
    padding-left: 2rem;
  }
  span:nth-of-type(5) {
    padding-left: 3.4rem;
  }
  span:nth-of-type(6) {
    padding-left: 1.5rem;
  }
`;

export const ListUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 1000px;
  span {
    min-width: 108px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
  }
  span:nth-of-type(6) {
    min-width: 12%;
  }
  span:nth-of-type(7) {
    min-width: 11%;
  }
`;

export const ListLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  min-width: 1000px;
  span {
    min-width: 108px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.M};
  }
  span:nth-of-type(5) {
    padding-left: 1.8rem;
  }
  span:nth-of-type(6) {
    min-width: 12%;
    padding-left: 4rem;
  }
  span:nth-of-type(7) {
    min-width: 11%;
    padding-left: 3rem;
  }
`;
