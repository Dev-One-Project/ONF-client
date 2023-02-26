import * as S from './manage.styles';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import FallingModal from '../../../commons/modal/fallingModal';
import Switch01 from '../../../commons/switch/switch01';
import Form from './formsInModal';
import { IManagePresenterProps } from './manage.types';
import ScrollableTable from './scrollableTable/index';

const tabsOwnInActiveFetch = ['직원', '지점', '근로 정보'];

const ManagePresenter = (props: IManagePresenterProps) => {
  return (
    <>
      {props.isOpen && (
        <FallingModal
          setIsOpen={props.setIsOpen}
          isOpen={props.isOpen}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          title={` ${
            props.editTarget
              ? props.tab === '직원'
                ? `${String(props.editTarget?.name)}의 정보 수정하기`
                : `${props.tab} 수정하기`
              : `${props.tab} 추가하기`
          } `}
        >
          <Form
            onCancel={props.onClickCloseModal}
            tab={props.tab}
            editTarget={props.editTarget}
            data={props.data}
          />
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
            {tabsOwnInActiveFetch.includes(props.tab) && (
              <Switch01
                setInit={props.setIsInActive}
                text={`비활성화된 ${props.tab}들 보기`}
              />
            )}
          </S.SwitchBox>
          {props.tab === '직원' && (
            <S.TotalMembersCount>
              총 직원 수:{' '}
              {Number(
                props.data?.members?.fetchMembers[0].company.memberCount,
              ) + 1}
            </S.TotalMembersCount>
          )}
          <ScrollableTable
            data={props.data}
            onOpenEdit={props.onOpenEdit}
            tab={props.tab}
            isLocation={props.isLocation}
          />
        </S.ContentBox>
      </S.Wrapper>
    </>
  );
};

export default ManagePresenter;
