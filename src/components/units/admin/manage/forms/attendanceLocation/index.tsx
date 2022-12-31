import { WifiOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import Check01 from '../../../../../commons/input/check01';
import Input01 from '../../../../../commons/input/input01';
import Footer from '../common/footer';
import Label from '../common/label';
import { IFormProps } from '../common/form.types';
import InputLabel from '../../../../../commons/inputLabel';
import Memo from '../common/memo';
import KakaoMapLauncher from './kakaoMapLauncher';
import { InputNumber } from 'antd';
import { valueType } from 'antd/es/statistic/utils';

// API 키값 env로 ??
const IP_API_KEY = '726352a79674495788faaade6bbbb04d';

const AttendanceLocation = (props: IFormProps) => {
  const [positionTab, setPositionTab] = useState(false);
  const [wifiTab, setWifiTab] = useState(false);
  const [ip, setIp] = useState('');
  const [currentPosition, setCurrentPosition] =
    useState<Partial<GeolocationCoordinates>>();
  const [markerPosition, setMarkerPosition] =
    useState<Partial<GeolocationCoordinates>>();
  const [radius, setRadius] = useState<valueType | null>(150);
  const [address, setAddress] = useState<string>('');

  // IP 와 현재 위치 좌표를 얻어옴.
  useEffect(() => {
    const getIp = async () => {
      await axios
        .get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${IP_API_KEY}`)
        .then((res) => setIp(res.data.ip_address));
    };
    void getIp();

    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition(position.coords);
        setMarkerPosition(position.coords);
      });
    };

    void getLocation();
  }, []);

  const { setValue } = props;

  const paintIp = useCallback(() => {
    setValue?.('ip', ip);
  }, [ip, setValue]);

  return (
    <>
      <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Wrapper>
          <InputLabel
            register={props.register('name')}
            type="text"
            name="attendanceLocationName"
          >
            출퇴근 장소명
          </InputLabel>
          <InputLabel
            type="text"
            name="address"
            customInput={
              <input
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            }
          >
            근무지 주소
          </InputLabel>
          <FormContent>
            <Label for="method">출퇴근 수단</Label>
            <CheckBoxWrapper>
              <Check01
                text="좌표"
                onChange={() => setPositionTab((prev) => !prev)}
              />
              <Check01
                text="WiFi"
                onChange={() => setWifiTab((prev) => !prev)}
              />
            </CheckBoxWrapper>
          </FormContent>
          {positionTab && (
            <ConditionalTab>
              <FormContent>
                <Label>좌표</Label>
                <Label>
                  <>
                    ({markerPosition?.latitude?.toFixed(5)}
                    {' , '}
                    {markerPosition?.longitude?.toFixed(5)})
                  </>
                </Label>
              </FormContent>
              <FormContent>
                <Label for="radius">좌표 반경(m)</Label>
                <InputNumber
                  id="radius"
                  value={radius}
                  onChange={(value) => setRadius(value)}
                />
              </FormContent>
              <KakaoMapWrapper>
                <KakaoMapLauncher
                  setMarkerPosition={setMarkerPosition}
                  markerPosition={markerPosition}
                  setCurrentPosition={setCurrentPosition}
                  currentPosition={currentPosition}
                  radius={radius}
                  address={address}
                />
              </KakaoMapWrapper>
              <GuideLine>
                * 지도 내 마커를 움직여 정확한 근무지의 좌표를 설정하세요.
              </GuideLine>
            </ConditionalTab>
          )}
          {wifiTab && (
            <ConditionalTab>
              <FormContent
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Label for="wifi">WiFi IP주소</Label>
                <WifiBox>
                  <WifiButton type="button" onClick={paintIp}>
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
          <Memo register={props.register('memo')} />
        </Wrapper>
        <Footer onCancel={props.onCancel} />
      </form>
    </>
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

  .ant-input-number:hover,
  .ant-input-number-focused {
    border: 1px solid ${styleSet.colors.primary};
  }

  .ant-input-number-focused {
    box-shadow: 0 0 3px 1px ${styleSet.colors.primary + '55'};
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

const GuideLine = styled.span`
  line-height: 0;
  font-size: ${styleSet.fontSizes.small};
  color: ${styleSet.colors.darkGray};
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
