import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';
import { IStyle } from './manage.types';

export const Wrapper = styled.section``;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: ${styleSet.fonts.B};
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ContentBox = styled.div``;

export const SwitchBox = styled.div`
  padding: 1.5rem 0;
`;

export const TotalMembersCount = styled.span`
  font-family: ${styleSet.fonts.B};
`;

export const OrganizationTabBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonBox = styled.div`
  display: flex;
  font-size: ${styleSet.fontSizes.small};
  padding-bottom: 1rem;
`;

export const ToggleButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 0px;
  padding: 0.5rem 1rem;
  :hover {
    background-color: #eee;
  }
  ${(props: IStyle) =>
    props.isLocation
      ? css`
          background-color: ${styleSet.colors.subColor05};
          :hover {
            background-color: ${styleSet.colors.subColor05};
          }
        `
      : null}

  :first-of-type {
    border-right: 0px;
  }
`;
