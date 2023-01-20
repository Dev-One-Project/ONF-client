import { Dispatch, MouseEvent, SetStateAction } from 'react';
import {
  IQuery,
  IVacationIssue,
} from '../../../../commons/types/generated/types';
import { Dayjs } from 'dayjs';
import { InputData } from '../../../commons/input/select01';

export interface ILeaveAccrualsPresenterProps {
  setOrganizationArr: Dispatch<SetStateAction<IInputData[]>>;
  isSelect: boolean;
  onClickEmployee: () => void;
  onClickList: () => void;
  isOpen: boolean;
  aniMode: boolean;
  onClickOpenModal: () => void;
  onClickCloseModal: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  organizationsData?: IInputData[];
  init: boolean;
  setInit: Dispatch<SetStateAction<boolean>>;
  filterInit: boolean;
  setFilterInit: Dispatch<SetStateAction<boolean>>;
  onChangeDate: (value: Dayjs | null) => void;
  onChangeStartEndDate: (
    dates: null | Array<Dayjs | null>,
    dateString: string[],
  ) => void;
  date: Date;
  isSelectOpen: boolean;
  setIsSelectOpen: Dispatch<SetStateAction<boolean>>;
  onClickOpenSelectModal: () => void;
  isMemberOpen: boolean;
  vDetailDelete?: Pick<IQuery, 'fetchVacationIssueDetailDateDelete'>;
  vDetail?: Pick<IQuery, 'fetchVacationIssueDetailDate'>;
  vBase?: Pick<IQuery, 'fetchVacationIssueBaseDate'>;
  vBaseDelete?: Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>;
  setIsMemberOpen: Dispatch<SetStateAction<boolean>>;
  onClickCheckedChange: () => void;
  isCheckedChange: boolean;
  setIsCheckedChange: Dispatch<SetStateAction<boolean>>;
  onCheckedAll: (checked: boolean) => void;
  onCheckedElement: (checked: boolean, selectedTarget: IVacationIssue) => void;
  checkedList: IVacationIssue[];
  dataLength: number;
  organizationArr: InputData[];
  onClickDeleteChecked: () => void;
  setAniMode: Dispatch<SetStateAction<boolean>>;
  onClickOpenSelectListModal: (e: MouseEvent<HTMLUListElement>) => void;
  isSelectList: boolean;
  setIsSelectList: Dispatch<SetStateAction<boolean>>;
  listMemberName: string;
  listMemberId: string;
}

export interface IInputData {
  id: string;
  name: string;
}

export interface IStyedDate {
  memoChecked?: boolean;
}
