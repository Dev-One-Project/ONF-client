import styled from '@emotion/styled';
import { styleSet } from '../../src/commons/styles/styleSet';

export const Wrapper = styled.section`
  span {
    color: ${styleSet.colors.primary};
    font-family: ${styleSet.fonts.EB};
    cursor: pointer;
    &:hover {
      color: ${styleSet.colors.fail};
    }
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.big};
  font-family: ${styleSet.fonts.EB};
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 30px;
  p {
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.B};
  }
`;

export const Main = styled.main`
  width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    border-radius: 4px;
    height: 50px;
    font-family: ${styleSet.fonts.B};
    margin-top: 20px;
  }
`;

export const Data = styled.data`
  display: flex;
  gap: 5px;
  width: 450px;
  flex-direction: column;
  align-content: space-between;

  &:nth-of-type(1) {
    margin-bottom: 20px;
  }

  &:nth-of-type(2) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  font-family: ${styleSet.fonts.EB};
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: ${styleSet.fontSizes.small};
  }
`;

export const P = styled.p`
  width: 100%;
  padding-block: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  strong {
    background: ${styleSet.colors.white};
    z-index: 2;
    padding: 0 8px;
    font-family: ${styleSet.fonts.B};
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    border-top: 1px solid #c2cad5;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  img {
    width: 16px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid ${styleSet.colors.gray};
    padding: 0.7rem;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background-color: ${styleSet.colors.subColor05};
      border: 1px solid ${styleSet.colors.subColor05};
    }
  }
`;

export const Join = styled.p`
  font-family: ${styleSet.fonts.B};
  padding-top: 50px;
`;
