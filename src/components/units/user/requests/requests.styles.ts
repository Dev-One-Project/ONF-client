import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.section`
  max-width: calc(100vw - 300px);
  overflow: auto;
  width: 100%;

  @media ${styleSet.breakPoints.deskTop} {
    min-width: 100%;
  }
`;
export const Wrapper = styled.main`
  margin: 0 auto;
  li.text {
    width: 180px;
    margin-left: 1rem;
    display: block;
  }
  li.text2 {
    width: 170px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 1rem;
    display: block;
  }
`;

export const Notice = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid ${styleSet.colors.gray};

  li {
    white-space: nowrap;
    cursor: pointer;
    font-family: ${styleSet.fonts.EB};
    letter-spacing: -0.8px;
    width: 110px;
    padding: 0.3rem 0.3rem;
    border-radius: 5px;

    &:hover {
      background: ${styleSet.colors.subColor05};
    }
  }
`;

export const NoticeList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid ${styleSet.colors.gray};
  position: relative;

  &:hover {
    background: ${styleSet.colors.lightGray};
  }

  > li {
    white-space: nowrap;
    cursor: pointer;
    letter-spacing: -0.8px;
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.B};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 110px;
    padding: 0.3rem 0.3rem;

    span {
      background: ${styleSet.colors.fail};
      color: ${styleSet.colors.white};
      font-family: ${styleSet.fonts.B};
      padding: 0.3rem;
      border-radius: 3px;
      font-size: ${styleSet.fontSizes.small};

      &:first-of-type {
        font-family: ${styleSet.fonts.EB};
      }
    }
  }
`;
