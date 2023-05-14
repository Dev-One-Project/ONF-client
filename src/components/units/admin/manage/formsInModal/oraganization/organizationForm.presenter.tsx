import Btn01 from '../../../../../commons/button/btn01';
import InputLabel from '../common/inputLabel';
import Footer from '../common/footer';
import Memo from '../common/memo';
import Label from '../common/label';
import Check01 from '../../../../../commons/input/check01';
import { InputNumber } from 'antd';
import KakaoMapLauncher from './kakaoMapLauncher';
import Input01 from '../../../../../commons/input/input01';
import { WifiOutlined } from '@ant-design/icons';
import * as S from './organizationForm.styles';
import { OrganizationFormPresenterProps } from './organizationForm.types';
import { styleSet } from '../../../../../../commons/styles/styleSet';

const OrganizationFormPresenter = (props: OrganizationFormPresenterProps) => {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.editTarget ? props.onEdit : props.onSubmit,
      )}
    >
      <S.Wrapper>
        <InputLabel type="text" name="name" register={props.register('name')}>
          지점명
        </InputLabel>
        <InputLabel
          register={props.register('checkPoint')}
          type="text"
          name="checkPoint"
        >
          출퇴근 장소명
        </InputLabel>
        <InputLabel
          type="custom"
          name="address"
          register={props.register('address')}
          customInput={
            <Btn01
              type="button"
              text={props.address ? '주소 다시 찾기' : '주소 찾기'}
              bdC={styleSet.colors.gray}
              hoverBdc={styleSet.colors.primary}
              onClick={() => props.setIsOpenModal((prev) => !prev)}
            />
          }
        >
          근무지 주소
        </InputLabel>
        <S.Address>{props.address ? props.address : null}</S.Address>
        {props.isOpenModal && (
          <S.DaumPostCodeModal onComplete={props.onCompleteSearch} />
        )}
        <S.FormContent>
          <Label for="method">출퇴근 수단</Label>
          <S.CheckBoxWrapper>
            <Check01 text="좌표" onChange={props.onTogglePositionTab} />
            <Check01
              text="WiFi"
              onChange={() => props.setWifiTab((prev) => !prev)}
            />
          </S.CheckBoxWrapper>
        </S.FormContent>
        {props.positionTab && (
          <S.ConditionalTab>
            <S.FormContent>
              <Label>좌표</Label>
              <Label>
                <>
                  ({props.markerPosition?.latitude?.toFixed(5)}
                  {' , '}
                  {props.markerPosition?.longitude?.toFixed(5)})
                </>
              </Label>
            </S.FormContent>
            <S.FormContent>
              <Label for="radius">좌표 반경(m)</Label>
              <InputNumber
                id="range"
                value={props.range}
                onChange={(value) => {
                  props.setRange(value);
                  props.setValue('range', Number(value));
                }}
              />
              <input type="hidden" {...props.register('range')} />
            </S.FormContent>
            <S.KakaoMapWrapper>
              {props.currentPosition && (
                <KakaoMapLauncher
                  setMarkerPosition={props.onChangeMarkerPosition}
                  markerPosition={props.markerPosition}
                  setCurrentPosition={props.setCurrentPosition}
                  currentPosition={props.currentPosition}
                  radius={props.range}
                  address={props.address}
                />
              )}
            </S.KakaoMapWrapper>
            <S.GuideLine>
              * 지도 내 마커를 움직여 정확한 근무지의 좌표를 설정하세요.
            </S.GuideLine>
          </S.ConditionalTab>
        )}
        {props.wifiTab && (
          <S.ConditionalTab>
            <S.FormContent
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Label for="wifi">WiFi IP주소</Label>
              <S.WifiBox>
                <S.WifiButton type="button" onClick={props.paintIp}>
                  <WifiOutlined />
                </S.WifiButton>
                <Input01
                  // register={props.register('ip')}
                  width="10rem"
                  id="wifi"
                  type="text"
                />
              </S.WifiBox>
            </S.FormContent>
          </S.ConditionalTab>
        )}
        <Memo register={props.register('description')} />
      </S.Wrapper>
      <Footer
        isValid={props.isValid}
        onSoftDelete={props.onSoftDelete}
        isEdit={props.editTarget}
        onCancel={props.onCancel}
      />
    </form>
  );
};

export default OrganizationFormPresenter;
