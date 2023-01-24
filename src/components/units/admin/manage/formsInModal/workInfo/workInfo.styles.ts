import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { styleSet } from '../../../../../../commons/styles/styleSet';

export interface IStyle {
  isActive: boolean | number;
}

export const Wrapper = styled.div`
  width: 44rem;
`;

export const TabUl = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

export const TabLi = styled.li`
  margin-bottom: -1px;
`;

export const Tab = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  cursor: pointer;

  :hover {
    color: ${styleSet.colors.primary};
  }

  ${(props: IStyle) =>
    props.isActive &&
    css`
      border-bottom: 2px solid ${styleSet.colors.primary};
      :not(span) {
        color: ${styleSet.colors.primary};
      }
    `};
`;

export const InputWrapper = styled.div`
  & > div:not(:nth-of-type(${(props: IStyle) => Number(props.isActive) + 1})) {
    display: none;
  }
`;
