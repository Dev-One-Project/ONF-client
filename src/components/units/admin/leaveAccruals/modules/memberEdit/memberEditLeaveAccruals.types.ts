import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { IQuery } from '../../../../../../commons/types/generated/types';

export interface IMemberEditLeaveAccrualsContainerProps {
  listMemberId: string;
  setAniMode: Dispatch<SetStateAction<boolean>>;
}

export interface IMemberEditLeaveAccrualsPresenterProps {
  onClickCloseModal: () => void;
  isEditOpen: boolean;
  listMemberId: string;
  setAniMode: Dispatch<SetStateAction<boolean>>;
  manyVacationIssue?: Pick<IQuery, 'fetchManyVacationIssue'>;
  memberId: string;
  onClickEditMemberOpen: (e: MouseEvent<HTMLUListElement>) => void;
  onClickCloseMember: () => void;
  data?: Pick<IQuery, 'fetchVacationIssue'>;
  onClickAddMemberOpen: () => void;
  isAddOpen: boolean;
}
