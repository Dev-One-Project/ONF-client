import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.section`
  width: 100%;
`;

export const Row = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media ${styleSet.breakPoints.tablet} {
    flex-direction: column;
  }
`;

export const QuickBtnWrapper = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StatusWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
`;

export const StatusBox = styled.div`
  width: 100%;
  padding: 24px;
  box-shadow: 0 2px 4px 0 rgb(130 135 147 /12%);
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 0 0 2px 2px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    width: 100%;
    height: 4px;
    background-color: ${(props) => (props.color ? props.color : 'white')};
    position: absolute;
    top: 0;
    left: 0;
  }
  p {
    text-align: center;
    color: ${(props) => (props.color ? props.color : 'black')};
  }
`;

export const CommonBox = styled.div`
  width: 100%;
  padding: 24px;
  box-shadow: 0 2px 4px 0 rgb(130 135 147 /12%);
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 0 0 2px 2px;
  display: flex;
  flex-direction: column;
`;

export const BoxTitle = styled.label`
  font-size: ${styleSet.fontSizes.normal};
  font-family: ${styleSet.fonts.EB};
`;

export const StatusTitle = styled.p`
  font-size: ${styleSet.fontSizes.small};
  font-family: ${styleSet.fonts.EB};
`;

export const StatusNumber = styled.p`
  font-size: ${styleSet.fontSizes.big};
  font-family: ${styleSet.fonts.B};
`;

export const AlignRight = styled.div`
  padding: 5px;
  text-align: right;
`;

export const Ul = styled.ul`
  padding: 10px 0;
  width: 100%;
  height: 100%;

  li {
    padding: 10px 0;
    border-bottom: 1px solid ${styleSet.colors.gray};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Preface = styled.span`
  padding: 4px;
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.white};
  background-color: ${styleSet.colors.subColor02};
  border-radius: 2px;
  text-align: center;
`;

export const DateStyle = styled.span`
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.darkGray};
`;
