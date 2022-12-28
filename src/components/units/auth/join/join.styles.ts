import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Wrapper = styled.section`
  padding-bottom: 1rem;
  display: flex;
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.big};
  font-family: ${styleSet.fonts.EB};
  text-align: center;
  margin-bottom: 2rem;

  p {
    display: block;
    font-size: ${styleSet.fontSizes.small};
    padding-top: 0.5rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2rem;
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
  margin: 7rem auto;
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
    margin-top: 1.5rem;
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
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;

  input:focus {
    border: 1px solid ${styleSet.colors.primary};
    outline: none;
  }

  span {
    color: ${styleSet.colors.darkGray};
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
    margin-bottom: 1rem;
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
    padding-bottom: 1rem;
    margin-bottom: 0.5rem;
  }
  label {
    color: ${styleSet.colors.darkGray};
  }
`;

export const Section = styled.section`
  padding: 0 3.5rem;
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

export const ChooseCompany = styled.ul`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    padding: 1rem;
    border: 2px dashed ${styleSet.colors.subColor05};
    width: calc(100% / 2 - 10px);
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: ${styleSet.colors.subColor05};
      color: ${styleSet.colors.fail};
    }
  }
  span {
    margin-left: 0.3rem;
    font-family: ${styleSet.fonts.B};
  }
  p {
    padding-top: 0.5rem;
  }
`;

export const ChooseModal = styled.section`
  div {
    margin-bottom: 1rem;
    p {
      font-family: ${styleSet.fonts.B};
      &:last-of-type {
        margin-bottom: 2rem;
      }
    }
  }
  ul {
    border-bottom: 1px solid ${styleSet.colors.gray};
    margin-bottom: 1rem;
    li {
      display: flex;
      align-items: center;
      padding-bottom: 1rem;

      &:last-of-type {
        margin-bottom: 2rem;
      }
      span {
        width: 100px;
      }
      input {
        width: 180px;
      }
      select {
        height: 40px !important;
        padding-inline: 0.5rem;
      }
    }
  }
`;

export const ChooseModal2 = styled.section`
  p {
    color: ${styleSet.colors.darkGray};
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${styleSet.colors.gray};
  }
  div {
    padding-block: 1rem;
    display: flex;
    align-items: center;
    span {
      width: 100px;
    }
    input {
      width: 180px;
    }
  }
`;

export const ButtonBox = styled.article`
  display: flex;
  justify-content: flex-end;
`;

export const SelectPeople = styled.select`
  width: 285px;
`;
