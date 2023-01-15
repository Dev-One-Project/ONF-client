import styled from '@emotion/styled';
import DaumPostCode from 'react-daum-postcode';
import { styleSet } from '../../../../../../commons/styles/styleSet';
export const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .ant-input-number:hover,
  .ant-input-number-focused {
    border: 1px solid ${styleSet.colors.primary};
  }

  .ant-input-number-focused {
    box-shadow: 0 0 3px 1px ${styleSet.colors.primary + '55'};
  }
`;

export const DaumPostCodeModal = styled(DaumPostCode)``;

export const Address = styled.span`
  padding-left: 7rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const FormContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  > label {
    flex: 0;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const ConditionalTab = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > div {
    > input {
      width: 5rem;
    }
  }
`;

export const KakaoMapWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: #eee;
`;

export const GuideLine = styled.span`
  line-height: 0;
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.darkGray};
`;

export const WifiBox = styled.div`
  display: flex;

  > input {
    border-radius: 0px;
  }
`;

export const WifiButton = styled.button`
  background-color: ${styleSet.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 0px;
  * {
    color: white;
  }

  :hover {
    opacity: 0.9;
  }
`;
