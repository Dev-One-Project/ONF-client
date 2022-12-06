import styled from '@emotion/styled';
import { styleSet } from '../../../src/commons/styles/styleSet';

export const Wrapper = styled.section`
  padding-bottom: 10px;
  display: flex;
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.big};
  font-family: ${styleSet.fonts.EB};
  text-align: center;
  margin-bottom: 30px;

  p {
    display: block;
    font-size: ${styleSet.fontSizes.small};
  }
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
  z-index: 5;

  span {
    color: ${styleSet.colors.primary};
    font-family: ${styleSet.fonts.EB};
    cursor: pointer;
    &:hover {
      color: ${styleSet.colors.fail};
    }
  }

  p {
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.B};
  }
`;

export const Main = styled.main`
  width: 35%;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
  }

  button {
    width: 100%;
    border-radius: 4px;
    height: 50px;
    font-family: ${styleSet.fonts.B};
    margin-top: 20px;
  }

  @media ${styleSet.breakPoints.tablet} {
    width: 60%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 90%;
  }
`;

export const Data = styled.data`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-content: space-between;
  margin-bottom: 20px;

  input:focus {
    border: 1px solid ${styleSet.colors.primary};
    outline: none;
  }

  span {
    color: ${styleSet.colors.darkgray};
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.L};
    letter-spacing: -0.8px;
  }
`;

export const Label = styled.label`
  font-family: ${styleSet.fonts.EB};
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

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label:first-of-type {
    border-bottom: 1px solid ${styleSet.colors.gray};
    padding-bottom: 15px;
    margin-bottom: 5px;
  }
  label {
    color: ${styleSet.colors.darkgray};
  }
`;

export const Section = styled.section`
  padding: 0 50px;
  width: 450px;
  background-color: ${styleSet.colors.primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  position: sticky;
  top: 0;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: -600px;
    z-index: -1;
    left: -600px;
    width: 1200px;
    height: 1200px;
    border-radius: 100%;
    background-image: linear-gradient(
      290deg,
      rgba(201, 0, 77, 0.2) 40%,
      transparent 60%
    );
  }
  button {
    width: 100px;
    background: ${styleSet.colors.white};
    color: ${styleSet.colors.primary};
    font-family: ${styleSet.fonts.EB};
  }

  span {
    display: block;
  }

  p {
    color: ${styleSet.colors.white};
  }

  @media ${styleSet.breakPoints.tablet} {
    display: none;
  }
`;

export const H2 = styled.h2`
  color: ${styleSet.colors.white};
  font-family: ${styleSet.fonts.EB};
  font-size: ${styleSet.fontSizes.subTitle};
  text-align: center;
`;
