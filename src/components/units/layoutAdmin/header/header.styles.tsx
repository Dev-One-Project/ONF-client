import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';
import { IAdminHeaderProps } from './header.types';

export const Wrapper = styled.section`
  width: 100%;
  height: 60px;
  background: ${styleSet.colors.white};
  box-shadow: 0 4px 8px rgb(175 180 190 / 20%);
  position: fixed;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  margin-right: 1rem;
  li {
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.strong};
    cursor: pointer;
    padding: 5px;
    box-sizing: border-box;
    &:hover {
      color: ${styleSet.colors.primary};
      font-family: ${styleSet.fonts.EB};
    }
    span {
      font-size: ${styleSet.fontSizes.normal};
    }
  }
`;

export const Groove = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ isOn }: IAdminHeaderProps) =>
      isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transition: all 0.35s;
`;

export const Handle = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  background: ${({ isOn }: IAdminHeaderProps) =>
    isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transform: translateX(${({ isOn }) => (isOn ? '20px' : '3px')});
  transition: 0.35s;
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ isOn }: IAdminHeaderProps) => (isOn ? '#6cc387' : '#ccc')};
  transition: background 0.35s;
`;

export const Switch = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  margin-right: 15px;
  transition: all 0.35s;
`;

export const Strong = styled.strong`
  font-size: ${styleSet.fontSizes.small};
  font-family: ${styleSet.fonts.M};
  color: ${({ isOn }: IAdminHeaderProps) =>
    isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transition: all 0.3s;
`;

export const ChangeBtn = styled.button`
  font-size: ${styleSet.fontSizes.small};
  border: 1px solid black;
  border-radius: 2px;
  padding: 0.5rem 1rem;
  margin-right: 2rem;
  display: flex;
  gap: 0.5rem;
  :hover {
    background-color: ${styleSet.colors.primary};
    color: #fff;
    border: 1px solid ${styleSet.colors.primary};
  }
`;
