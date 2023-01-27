import { Divider } from 'antd';
import { getDate } from '../../../../../../commons/utils/getDate';
import Btn01 from '../../../../../commons/button/btn01';
import AddLeaveAccruals from '../addLeaveAccruals';
import EditLeaveAccrualsContainer from '../edit/editLeaveAccruals.container';
import * as S from './memberEditLeaveAccruals.styles';
import { IMemberEditLeaveAccrualsPresenterProps } from './memberEditLeaveAccruals.types';

const MemberEditLeaveAccrualsPresenter = (
  props: IMemberEditLeaveAccrualsPresenterProps,
) => {
  return (
    <>
      <S.ModalBox>
        <S.Left>
          <S.UlWrapper>
            <S.SelectListUl>
              <li>발생 일수</li>
              <li>발생 시점</li>
              <li>만료 시점</li>
              <li>메모</li>
            </S.SelectListUl>
            {props.manyVacationIssue?.fetchManyVacationIssue.map(
              (fetchData) => (
                <S.SelectListUl
                  onClick={props.onClickEditMemberOpen}
                  key={fetchData.id}
                  id={fetchData.id}
                >
                  <li>{fetchData.vacationAll}</li>
                  <li>{getDate(fetchData.startingPoint)}</li>
                  <li>{getDate(fetchData.expirationDate)}</li>
                  <li>{fetchData.description}</li>
                </S.SelectListUl>
              ),
            )}
          </S.UlWrapper>
          <S.AccrualsBox>
            <strong onClick={props.onClickAddMemberOpen}>휴가 발생하기</strong>
          </S.AccrualsBox>
        </S.Left>

        {props.isEditOpen ? (
          <S.Right>
            <EditLeaveAccrualsContainer
              setAniMode={props.setAniMode}
              listMemberId={props.memberId}
              data={props.data?.fetchVacationIssue}
              role="member"
              onClickCloseMember={props.onClickCloseMember}
            />
          </S.Right>
        ) : props.isAddOpen ? (
          <S.Right>
            <AddLeaveAccruals
              setAniMode={props.setAniMode}
              listMemberId={props.listMemberId}
              onClickCloseModal={props.onClickCloseMember}
              role="member"
            />
          </S.Right>
        ) : (
          <S.PBox>
            <p>선택된 휴가 발생 건이 없습니다.</p>
          </S.PBox>
        )}
      </S.ModalBox>
      <Divider style={{ margin: '0.7rem 0 0', transform: 'scaleX(1.027)' }} />
      <S.ModalFooter>
        <Btn01 text="닫기" onClick={props.onClickCloseModal} bdC="#ddd" />
      </S.ModalFooter>
    </>
  );
};

export default MemberEditLeaveAccrualsPresenter;
