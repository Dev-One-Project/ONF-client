import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Wrapper = styled.section`
  width: 100%;
  height: 60px;
  background: ${styleSet.colors.white};
  box-shadow: 0 4px 8px rgb(175 180 190 / 20%);
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// export const Wrapper = styled.section`
//   width: 100%;
//   height: 60px;
//   background: ${styleSet.colors.white};
//   box-shadow: 0 4px 8px rgb(175 180 190 / 20%);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

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
