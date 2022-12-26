import styled from '@emotion/styled';
import { styleSet } from '../../../../../../commons/styles/styleSet';

export const ElementContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  background: ${(props) => {
    if (props.color) return String(props.color) + '44';
    else return styleSet.colors.primary + '44';
  }};
  width: 100%;
  height: 100%;
  padding: 0.125rem 0.125rem 0.125rem 0.125rem;
  border-radius: 0.5rem;
  /* opacity: 0.7; */
  z-index: 0;
`;

export const DetailText = styled.p`
  padding-top: 0.25rem;
  font-size: ${styleSet.fontSizes.normal};
  font-family: ${styleSet.fonts.B};
  word-break: keep-all;
  z-index: 1;
`;

export const CompanyInfoText = styled.p`
  padding: 0 0 0.125rem 0.25rem;
  font-size: ${styleSet.fontSizes.small};
  font-family: ${styleSet.fonts.M};
  text-align: left;
  z-index: 1;
`;
