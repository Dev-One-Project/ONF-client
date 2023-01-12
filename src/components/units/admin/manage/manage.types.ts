import { Dispatch, SetStateAction } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IManagePresenterProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  aniMode: boolean;
  onClickCloseModal: () => void;
  onClickOpenModal: (el: any) => void;
  tab: string;
  setIsLocation: Dispatch<SetStateAction<boolean>>;
  isLocation: boolean;
  onOpenEdit: (el: any) => void;
  editTarget: any;
  data?: {
    members?: Pick<IQuery, 'fetchMembers'>;
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
    roleCategories?: Pick<IQuery, 'fetchRoleCategories'>;
    scheduleCategories?: Pick<IQuery, 'fetchAllScheduleCategories'>;
    scheduleTemplates?: Pick<IQuery, 'fetchAllScheduleTemplates'>;
    vacationCategories?: Pick<IQuery, 'fetchVacationCategories'>;
    fetchWorkInfos?: Pick<IQuery, 'fetchWorkInfos'>;
  };
}

export interface IManageProps {
  tab: string;
  data?: {
    members?: Pick<IQuery, 'fetchMembers'>;
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
    roleCategories?: Pick<IQuery, 'fetchRoleCategories'>;
    scheduleCategories?: Pick<IQuery, 'fetchAllScheduleCategories'>;
    scheduleTemplates?: Pick<IQuery, 'fetchAllScheduleTemplates'>;
    vacationCategories?: Pick<IQuery, 'fetchVacationCategories'>;
    fetchWorkInfos?: Pick<IQuery, 'fetchWorkInfos'>;
  };
}

export interface IStyle {
  isLocation: boolean;
}
