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

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
`;

export const DropWrapper = styled.section`
  position: relative;
`;

export const DropSetting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  max-width: 500px;
  min-width: 12rem;
  position: absolute;
  top: 50px;
  padding-bottom: 0.3rem;
  right: 190px;
  border: 1px solid #ddd;
  background-color: white;
  box-shadow: 0 4px 16px rgb(130 135 147 / 36%);
  z-index: 1002;
`;

export const SettingBox = styled.div`
  strong {
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.small};
    padding: 0.7rem 1rem;
    display: block;
  }
  & p {
    font-size: ${styleSet.fontSizes.small};
    padding: 0.7rem 1rem;
    :hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
`;

export const ModalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 4rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  > h4 {
    font-family: ${styleSet.fonts.B};
  }
  > span {
    font-size: ${styleSet.fontSizes.small};
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
