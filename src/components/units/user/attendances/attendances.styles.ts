import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.section`
  /* max-width: 1270px; */
  max-width: calc(100vw - 300px);
  overflow: auto;
  padding-bottom: 1rem;
`;

export const Notice = styled.ul`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid ${styleSet.colors.gray};
  width: fit-content;

  li {
    min-width: 10rem;
    padding: 0.5rem 0 0.5rem 1rem;
    text-align: left;
    white-space: nowrap;
    flex: 0;
    :first-of-type {
      min-width: 6rem;
    }
  }
`;

export const NoticeList = styled.ul`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${styleSet.colors.gray};
  width: fit-content;
  min-height: 4rem;

  li {
    min-width: 10rem;
    text-align: left;
    padding: 0.5rem 0 0.5rem 1rem;
    :first-of-type {
      min-width: 6rem;
    }
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
