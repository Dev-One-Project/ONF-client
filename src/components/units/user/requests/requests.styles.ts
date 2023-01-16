import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.section`
  max-width: calc(100vw - 300px);
  width: 100%;

  @media ${styleSet.breakPoints.deskTop} {
    min-width: 100%;
  }
`;
export const Wrapper = styled.main`
  margin: 0 auto;
  overflow: auto;
`;

export const RequestTable = styled.table`
  width: 100%;
  text-align: left;
  letter-spacing: -0.8px;
`;

export const Title = styled.thead`
  border-bottom: 2px solid ${styleSet.colors.gray};

  th {
    font-family: ${styleSet.fonts.B};
    padding: 1rem;
    white-space: nowrap;
  }
`;

export const Contents = styled.tbody`
  tr {
    border-bottom: 1px solid ${styleSet.colors.gray};
    max-height: 52px;
    position: relative;

    td {
      font-family: ${styleSet.fonts.B};
      font-size: ${styleSet.fontSizes.small};
      padding: 0.5rem 1rem;
      white-space: nowrap;

      p {
        overflow: hidden;
        height: 15px;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 170px;
      }
      > span {
        display: block;
        background: ${styleSet.colors.fail};
        color: ${styleSet.colors.white};
        font-family: ${styleSet.fonts.B};
        padding: 0.2rem;
        margin-bottom: 2px;
        border-radius: 3px;
        font-size: 10px;
        width: 35px;
        height: 18px;
        box-sizing: border-box;
      }
    }
  }
`;
