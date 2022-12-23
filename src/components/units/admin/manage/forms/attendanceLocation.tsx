import { WifiOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Check01 from '../../../../commons/input/check01';
import Input01 from '../../../../commons/input/input01';
import Textarea from '../../../../commons/textarea';
import Footer from './common/footer';
import Label from './common/label';
import { IFormProps } from './common/form.types';

// API 키값 env로 ??
const API_KEY = '726352a79674495788faaade6bbbb04d';

const AttendanceLocation = (props: IFormProps) => {
  const [positionTab, setPositionTab] = useState(false);
  const [wifiTab, setWifiTab] = useState(false);

  const getMyIp = async () => {
    const getIp = async () => {
      await axios
        .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`)
        .then((res) => props.setValue?.('ip', res.data.ip_address));
    };
    await getIp();
  };
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <FormContent>
          <Label for="name">출퇴근 장소명</Label>
          <Input01
            register={props.register('name')}
            width="10rem"
            type="text"
            id="name"
          />
        </FormContent>
        <FormContent>
          <Label for="address">근무지 주소</Label>
          <Input01
            register={props.register('address')}
            width="10rem"
            type="text"
            id="address"
          />
        </FormContent>
        <FormContent>
          <Label for="method">출퇴근 수단</Label>
          <CheckBoxWrapper>
            <Check01
              text="좌표"
              onChange={() => setPositionTab((prev) => !prev)}
            />
            <Check01 text="WiFi" onChange={() => setWifiTab((prev) => !prev)} />
          </CheckBoxWrapper>
        </FormContent>

        {positionTab && (
          <ConditionalTab>
            <FormContent>
              <Label>좌표</Label>
              <Label>(37.56650, 126.97810)</Label>
            </FormContent>
            <FormContent>
              <Label>좌표 반경</Label>
              <Input01 type="number" />
            </FormContent>
            <KakaoMapWrapper>
              ㅈ같은 카카오맵이 들어올 예정입니다^^
            </KakaoMapWrapper>
          </ConditionalTab>
        )}

        {wifiTab && (
          <ConditionalTab>
            <FormContent style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Label for="wifi">WiFi IP주소</Label>
              <WifiBox>
                <WifiButton type="button" onClick={getMyIp}>
                  <WifiOutlined />
                </WifiButton>
                <Input01
                  register={props.register('ip')}
                  width="10rem"
                  id="wifi"
                  type="text"
                />
              </WifiBox>
            </FormContent>
          </ConditionalTab>
        )}

        <FormContent>
          <Label for="memo">메모</Label>
          <Textarea
            register={props.register('memo')}
            placeholder="메모 입력"
          ></Textarea>
        </FormContent>
      </Wrapper>
      <Footer onCancel={props.onCancel} />
    </form>
  );
};

export default AttendanceLocation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30rem;

  > div:last-of-type {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const FormContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  > label {
    flex: 0;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const ConditionalTab = styled.div`
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

const KakaoMapWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-color: #eee;
`;

const WifiBox = styled.div`
  display: flex;

  > input {
    border-radius: 0px;
  }
`;

const WifiButton = styled.button`
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
