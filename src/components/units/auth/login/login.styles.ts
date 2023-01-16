import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

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
  position: fixed;
  top: 0;

  p {
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.B};
  }
`;

export const Main = styled.main`
  width: 35%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;

  form {
    width: 100%;
    input:focus {
      outline: none;
      border: 1px solid ${styleSet.colors.primary};
    }
  }

  button {
    width: 100%;
    border-radius: 4px;
    height: 50px;
    font-family: ${styleSet.fonts.B};
    margin-top: 1.5rem;
  }

  @media ${styleSet.breakPoints.tablet} {
    width: 50%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 65%;
  }
`;

export const Data = styled.data`
  display: flex;
  gap: 5px;
  width: 100%;
  flex-direction: column;
  align-content: space-between;

  &:nth-of-type(1) {
    margin-bottom: 1.5rem;
  }

  &:nth-of-type(2) {
    margin-bottom: 1rem;
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
  padding-block: 1.5rem;
  position: relative;
  display: flex;
  justify-content: center;
  strong {
    background: ${styleSet.colors.white};
    z-index: 2;
    padding: 0 0.8rem;
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

export const Join = styled.p`
  font-family: ${styleSet.fonts.B};

  @media ${styleSet.breakPoints.mobile} {
    font-size: ${styleSet.fontSizes.small};
  }
`;
