import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Wrapper = styled.div`
  width: 200px;
  height: 100vh;
  background: ${styleSet.colors.primary};
  position: fixed;
  z-index: 0;
  padding-top: 50px;
  @media ${styleSet.breakPoints.tablet} {
    width: 60px;
  }
`;

export const Container = styled.ul`
  padding: 1rem;
  list-style: none;
`;
export const List = styled.li`
  cursor: pointer;
  margin-bottom: 1rem;
  font-family: ${styleSet.fonts.EB};
  color: ${styleSet.colors.white};
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  /* :nth-child(3) {
    display: none;
  }

  :nth-child(4) {
    display: none;
  }
  :nth-child(6) {
    display: none;
  }
  :nth-child(7) {
    display: none;
  }
  :nth-child(9) {
    display: none;
  }
  :nth-child(10) {
    display: none;
  }
  :nth-child(2):hover ~ :nth-child(3),
  :nth-child(2):hover ~ :nth-child(4),
  :nth-child(5):hover ~ :nth-child(6),
  :nth-child(5):hover ~ :nth-child(7),
  :nth-child(8):hover ~ :nth-child(9),
  :nth-child(8):hover ~ :nth-child(10) {
    display: block;
  } */
`;

export const Svg = styled.div`
  width: 20px;
  height: 20px;
  padding-bottom: 3px;
`;
export const Text = styled.p`
  @media ${styleSet.breakPoints.tablet} {
    display: none;
  }
`;
