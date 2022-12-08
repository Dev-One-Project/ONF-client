import styled from '@emotion/styled';
import { styleSet } from '../../../commons/styles/styleSet';
import { IUserHeaderProps } from './layout.types';

// Header

export const Header = styled.header`
  width: 100%;
  height: 60px;
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
  padding-left: 4rem;
  box-sizing: border-box;

  @media ${styleSet.breakPoints.tablet} {
    gap: 15px;
    padding-left: 2rem;
  }
`;

export const Menu: any = styled.li`
  word-break: keep-all;
  white-space: nowrap;
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.normal};
  cursor: pointer;
  padding: 0.5rem;
  box-sizing: border-box;

  color: ${(props: any) =>
    props.menu ? `${styleSet.colors.primary}` : 'black'};

  span {
    font-size: ${styleSet.fontSizes.strong};
  }

  @media ${styleSet.breakPoints.tablet} {
    gap: 15px;
    padding-left: 2rem;
  }
`;

export const Ul2 = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 4rem;
  box-sizing: border-box;
  position: relative;

  li {
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.normal};
    cursor: pointer;
    padding: 0.5rem;
    box-sizing: border-box;
    &:hover {
      color: ${styleSet.colors.primary};
      font-family: ${styleSet.fonts.EB};
    }

    span {
      font-size: ${styleSet.fontSizes.strong};
    }
  }
`;

export const Mypage = styled.article`
  width: 240px;
  height: 180px;
  background: ${styleSet.colors.white};
  position: absolute;
  top: 50px;
  right: 0;
  border-radius: 5px;

  box-shadow: 0 4px 16px rgb(130 135 147 / 36%);
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    li {
      width: 100%;
      padding-left: 1rem;
      font-size: ${styleSet.fontSizes.small};
      &:first-of-type {
        border-bottom: 1px solid ${styleSet.colors.lightGray};
        padding-bottom: 0.8rem;
        font-family: ${styleSet.fonts.EB};
      }
      &:last-of-type {
        border-top: 1px solid ${styleSet.colors.lightGray};
        padding-top: 0.8rem;
      }
      span {
        font-size: ${styleSet.fontSizes.normal};
        padding-right: 0.5rem;
      }
    }
  }
`;

// Sidebar
export const Sidebar = styled.section`
  background: ${styleSet.colors.subColor05};
  height: 100vh;
  width: 400px;
  padding: 2rem;
  box-sizing: content-box;
  &.min {
    width: 250px;
    padding: 1rem;
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.normal};
  font-family: ${styleSet.fonts.EB};
  padding-block: 10px;
`;

export const Date = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  .ant-picker {
    border-radius: 0;
    border: 1px solid ${styleSet.colors.primary};
  }

  li {
    display: flex;
    justify-content: flex-end;
    label {
      gap: 5px;
    }

    &.tab2 {
      border-bottom: 1px solid gray;
      padding-bottom: 30px;
      width: 100%;
    }

    span {
      font-family: ${styleSet.fonts.B};
      word-break: keep-all;
      white-space: nowrap;
      font-size: ${styleSet.fontSizes.small};
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
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.small};
    strong {
      font-family: ${styleSet.fonts.EB};
    }
  }
`;

export const H2 = styled.h2`
  font-size: ${styleSet.fontSizes.normal};
  font-family: ${styleSet.fonts.EB};
  margin-top: 20px;
`;

export const Vacation = styled.section`
  .range {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-top: 20px;
  }
  .ant-picker {
    border-radius: 0;
    border: 1px solid ${styleSet.colors.primary};
  }
`;

export const Aside = styled.aside`
  font-size: ${styleSet.fontSizes.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0 10px 0;
  p {
    color: ${styleSet.colors.darkGray};
    font-family: ${styleSet.fonts.B};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    li {
      color: ${styleSet.colors.darkGray};
      font-family: ${styleSet.fonts.B};
      font-size: ${styleSet.fontSizes.small};
    }
  }
`;

export const Aside2 = styled.aside`
  font-size: ${styleSet.fontSizes.small};
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
    gap: 42px;
    li {
      font-family: ${styleSet.fonts.B};
      font-size: ${styleSet.fontSizes.small};
    }
  }
`;

export const Check = styled.ul`
  padding-top: 30px;
  li {
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.B};

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
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.B};
    gap: 10px;
    margin-bottom: 10px;
    .ant-picker {
      border-radius: 0;
      border: 1px solid ${styleSet.colors.primary};
    }
    &.top {
      padding-top: 20px;
    }
  }
`;

export const Li = styled.li`
  color: ${styleSet.colors.darkGray};

  strong {
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.small};
    background: #607d8b;
    color: ${styleSet.colors.white};
    padding: 3px 10px;
    border-radius: 5px;
    min-width: 35px;
    text-align: center;
  }
`;
