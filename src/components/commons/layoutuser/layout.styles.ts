import styled from '@emotion/styled';
import { styleSet } from '../../../commons/styles/styleSet';
import { IUserHeaderProps } from './layout.types';

// Header

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background: ${styleSet.colors.white};
  box-shadow: 0 4px 8px rgb(175 180 190 / 20%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  box-sizing: border-box;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
`;

export const Ul: any = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 100px;
  box-sizing: border-box;
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
    &:nth-of-type(${(props: any) => (props.tab ? props.tab : 1)}) {
      color: ${styleSet.colors.primary};
      font-family: ${styleSet.fonts.EB};
    }
    span {
      font-size: ${styleSet.fontSizes.strong};
    }
  }
`;

export const Ul2 = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 100px;
  box-sizing: border-box;
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
      font-size: ${styleSet.fontSizes.subTitle};
    }
  }
`;

export const Groove = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ isOn }: IUserHeaderProps) =>
      isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transition: all 0.35s;
`;

export const Handle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background: ${({ isOn }: IUserHeaderProps) =>
    isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transform: translateX(${({ isOn }) => (isOn ? '45px' : '5px')});
  transition: 0.35s;
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ isOn }: IUserHeaderProps) => (isOn ? '#6cc387' : '#ccc')};
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
  font-size: ${styleSet.fontSizes.normal};
  font-family: ${styleSet.fonts.EB};
  color: ${({ isOn }: IUserHeaderProps) =>
    isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transition: all 0.3s;
`;

// Sidebar
export const Sidebar = styled.section`
  background: ${styleSet.colors.subColor05};
  height: 100vh;
  width: 380px;
  padding: 36px 36px 0 36px;
  box-sizing: content-box;
  &.min {
    width: 250px;
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.strong};
  font-family: ${styleSet.fonts.EB};
  padding-block: 10px;
`;

export const InvisibleCheckbox = styled.input`
  display: none;

  :checked ~ .checkbox {
    margin: 0 5px 0 10px;
    transform: rotate(45deg) translateX(-20%) translateY(-20%);
    width: 10px;
    border-color: ${styleSet.colors.primary};
    border-top-color: transparent;
    border-left-color: transparent;
  }
`;

export const Checkbox = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid ${styleSet.colors.black};
  transition: all 0.35s;
  cursor: pointer;
`;

export const Date = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    .ant-space-vertical {
      border: 1px solid ${styleSet.colors.primary};
    }
    &.tab2 {
      border-bottom: 1px solid gray;
      padding-bottom: 30px;
      width: 100%;
    }

    span {
      font-family: ${styleSet.fonts.EB};
    }
  }
`;

export const DateInfo = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  padding: 25px 0;
  gap: 15px;
  border-bottom: 1px solid ${styleSet.colors.gray};
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.normal};
    strong {
      font-family: ${styleSet.fonts.EB};
    }
  }
`;

export const H2 = styled.h2`
  font-size: ${styleSet.fontSizes.strong};
  font-family: ${styleSet.fonts.EB};
  margin-top: 20px;
`;

export const Vacation = styled.section`
  .range {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    .ant-space-vertical {
      border: 1px solid ${styleSet.colors.primary};
    }
  }
`;

export const Aside = styled.aside`
  font-size: ${styleSet.fontSizes.normal};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0 10px 0;
  p {
    color: ${styleSet.colors.darkgray};
    font-family: ${styleSet.fonts.B};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    li {
      color: ${styleSet.colors.darkgray};
      font-family: ${styleSet.fonts.B};
      font-size: ${styleSet.fontSizes.normal};
    }
  }
`;

export const Aside2 = styled.aside`
  font-size: ${styleSet.fontSizes.normal};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 10px 0;
  p {
    font-family: ${styleSet.fonts.B};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
    li {
      font-family: ${styleSet.fonts.B};
      font-size: ${styleSet.fontSizes.normal};
    }
  }
`;

export const Check = styled.ul`
  padding-top: 30px;
  li {
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.normal};
    padding-bottom: 10px;
  }
`;

export const Date2 = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${styleSet.colors.gray};
  padding-bottom: 20px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${styleSet.fontSizes.normal};
    font-family: ${styleSet.fonts.B};
    gap: 10px;
    margin-bottom: 10px;
    .ant-space-vertical {
      border: 1px solid ${styleSet.colors.primary};
    }
    &.top {
      padding-top: 20px;
    }
  }
`;

export const Li = styled.li`
  color: ${styleSet.colors.darkgray};

  strong {
    font-family: ${styleSet.fonts.EB};
    font-size: ${styleSet.fontSizes.small};
    background: #607d8b;
    color: ${styleSet.colors.white};
    padding: 3px 10px;
    border-radius: 5px;
    min-width: 35px;
    text-align: center;
  }
`;
