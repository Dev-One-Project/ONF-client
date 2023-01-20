import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { IQuery } from '../../../../../commons/types/generated/types';
import { InputData } from '../../../../commons/input/select01';

export interface IAttendancesCalendarPresenterProps {
  monthArr: number[];
  yearArr: string[];
  organizationsData?: IInputData[];
  setOrganizationArr: Dispatch<SetStateAction<InputData[]>>;
  isOpen: boolean;
  aniMode: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setAniMode: Dispatch<SetStateAction<boolean>>;
  onClickOpenModal: () => void;
  organizationArr: InputData[];
  init: boolean;
  setInit: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, 'fetchMonthWorkChecks'>;
  onChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  memberSchedule?: Pick<IQuery, 'fetchMemberSchedule'>;
}

interface IInputData {
  id: string;
  name: string;
}
