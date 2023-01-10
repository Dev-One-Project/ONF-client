import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.section`
  /* max-width: 1270px; */
  max-width: calc(100vw - 300px);
  overflow: auto;
`;

export const Notice = styled.ul`
  gap: 20px;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  border-bottom: 2px solid ${styleSet.colors.gray};
  width: 100vw;

  li {
    min-width: 100px;
    flex: 0;
  }
`;

export const NoticeList = styled.ul`
  gap: 20px;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  border-bottom: 1px solid ${styleSet.colors.gray};
  width: 100vw;
  min-height: 70px;
  li {
    min-width: 100px;
    white-space: nowrap;
    .anticon {
      display: inline-block;
      color: ${styleSet.colors.fail};
    }
  }

  &:hover {
    background: ${styleSet.colors.lightGray};
  }

  span {
    display: block;
  }
`;
