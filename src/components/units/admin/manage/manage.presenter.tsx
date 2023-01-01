import * as S from './manage.styles';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import FallingModal from '../../../commons/modal/fallingModal';
import ScrollableTable from '../../../commons/scrollableTable/table';
import Switch01 from '../../../commons/switch/switch01';
import Form from './forms';
import { IManagePresenterProps } from './manage.types';

const ManagePresenter = (props: IManagePresenterProps) => {
  return (
    <>
      {props.isOpen && (
        <FallingModal
          setIsOpen={props.setIsOpen}
          isOpen={props.isOpen}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          title={`${props.tab} 추가하기`}
        >
          <Form {...props.formProps} tab={props.tab} />
        </FallingModal>
      )}
      <S.Wrapper>
        <S.Header>
          <S.Title>{props.tab} 관리</S.Title>
          <Btn01
            bdC={styleSet.colors.primary}
            bgC={styleSet.colors.primary}
            color="white"
            text={`+ ${props.tab} 추가하기`}
            onClick={props.onClickOpenModal}
          />
        </S.Header>
        <S.ContentBox>
          <S.SwitchBox>
            {['직원', '지점', '근로 정보'].includes(props.tab) && (
              <Switch01 text={`비활성화된 ${props.tab}들 보기`} />
            )}
          </S.SwitchBox>
          {props.tab === '직원' && (
            <S.TotalMembersCount>
              총 직원 수: {'직원 수 데이터'}
            </S.TotalMembersCount>
          )}
          {props.tab === '지점' && (
            <S.OrganizationTabBox>
              <S.ButtonBox>
                <S.ToggleButton
                  onClick={() => props.setIsLocation(false)}
                  isLocation={!props.isLocation}
                  type="button"
                >
                  지점
                </S.ToggleButton>
                <S.ToggleButton
                  onClick={() => props.setIsLocation(true)}
                  isLocation={props.isLocation}
                  type="button"
                >
                  출퇴근 장소
                </S.ToggleButton>
              </S.ButtonBox>
            </S.OrganizationTabBox>
          )}
          <ScrollableTable tab={props.tab} isLocation={props.isLocation} />
        </S.ContentBox>
      </S.Wrapper>
    </>
  );
};

export default ManagePresenter;
