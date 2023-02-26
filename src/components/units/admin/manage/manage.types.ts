import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import { Dispatch, SetStateAction } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IManagePresenterProps {
  setIsInActive: SetStateAction<any>;
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
  refetch?: (
    variables?: Partial<OperationVariables> | undefined,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchMembers'>>>;
  tab:
    | '직원'
    | '지점'
    | '직무'
    | '근무일정 유형'
    | '근무일정 템플릿'
    | '휴가 유형'
    | '근로 정보';
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
