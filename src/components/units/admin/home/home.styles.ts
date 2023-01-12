import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.section`
  width: 100%;
`;

export const TopRow = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const BodyRow = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  @media ${styleSet.breakPoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .notice {
      grid-area: 2/1/3/3;
    }
  }

  @media ${styleSet.breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const QuickBtnWrapper = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
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

export const OmissionUl = styled.ul`
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
    text-align: center;
    span {
      :nth-of-type(1) {
        width: 20%;
      }
      :nth-of-type(2) {
        width: 40%;
      }
      :nth-of-type(3) {
        width: 15%;
      }
      :nth-of-type(4) {
        width: 10%;
      }
      :nth-of-type(5) {
        width: 15%;
      }
    }
  }
`;

export const NoticeUl = styled.ul`
  padding: 10px 0;
  width: 100%;
  height: 100%;

  li {
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid ${styleSet.colors.gray};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;
  }
`;

export const Preface = styled.span`
  padding: 4px;
  min-width: 2.5rem;
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.white};
  background-color: ${styleSet.colors.subColor02};
  border-radius: 2px;
  text-align: center;
`;

export const Title = styled.span`
  min-width: 7rem;
  max-width: 13rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${styleSet.breakPoints.tablet} {
    max-width: 40rem;
  }
`;

export const DateStyle = styled.span`
  min-width: 4.7rem;
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.darkGray};
`;
