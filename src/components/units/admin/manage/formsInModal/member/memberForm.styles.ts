import styled from '@emotion/styled';
import { Divider } from 'antd';
import { styleSet } from '../../../../../../commons/styles/styleSet';

export const WrapperM = styled.div`
  min-width: 1100px;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  h3 {
    background-color: ${styleSet.colors.lightGray};
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.normal};
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    min-width: auto;
    width: 100%;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 3;
`;
export const Right = styled.div`
  flex: 2;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const InnerContent = styled.div`
  min-width: 18rem;
  height: 2rem;
  display: flex;
  gap: 1rem;
`;

export const CustomDivider = styled(Divider)`
  margin: 0;
`;

export const GuidLine = styled.p`
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.small};
  color: #777;
`;
