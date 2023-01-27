import { useQuery } from '@apollo/client';
import { MouseEvent, useState } from 'react';
import {
  IQuery,
  IQueryFetchManyVacationIssueArgs,
  IQueryFetchVacationIssueArgs,
} from '../../../../../../commons/types/generated/types';
import { FETCH_VACATION_ISSUE } from '../../leaveAccruals.queries';
import MemberEditLeaveAccrualsPresenter from './memberEditLeaveAccruals.presenter';
import { FETCH_MANY_VACATION_ISSUE } from './memberEditLeaveAccruals.queries';
import { IMemberEditLeaveAccrualsContainerProps } from './memberEditLeaveAccruals.types';

const MemberEditLeaveAccrualsContainer = (
  props: IMemberEditLeaveAccrualsContainerProps,
) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [memberId, setMemberId] = useState('');
  const [isAddOpen, setIsAddOpen] = useState(false);

  const { data: manyVacationIssue } = useQuery<
    Pick<IQuery, 'fetchManyVacationIssue'>,
    IQueryFetchManyVacationIssueArgs
  >(FETCH_MANY_VACATION_ISSUE, { variables: { memberId: props.listMemberId } });

  const { data } = useQuery<
    Pick<IQuery, 'fetchVacationIssue'>,
    IQueryFetchVacationIssueArgs
  >(FETCH_VACATION_ISSUE, {
    variables: { vacationIssueId: memberId },
  });

  const onClickCloseModal = () => {
    props.setAniMode(false);
  };

  const onClickCloseMember = () => {
    setIsEditOpen(false);
    setIsAddOpen(false);
  };

  const onClickEditMemberOpen = (e: MouseEvent<HTMLUListElement>) => {
    setIsEditOpen(true);
    setMemberId(e.currentTarget.id);
  };

  const onClickAddMemberOpen = () => {
    setIsAddOpen(true);
  };

  return (
    <MemberEditLeaveAccrualsPresenter
      onClickCloseModal={onClickCloseModal}
      isEditOpen={isEditOpen}
      listMemberId={props.listMemberId}
      setAniMode={props.setAniMode}
      manyVacationIssue={manyVacationIssue}
      memberId={memberId}
      onClickEditMemberOpen={onClickEditMemberOpen}
      onClickCloseMember={onClickCloseMember}
      data={data}
      onClickAddMemberOpen={onClickAddMemberOpen}
      isAddOpen={isAddOpen}
    />
  );
};

export default MemberEditLeaveAccrualsContainer;
