import styled from '@emotion/styled';
import {
  IMember,
  IOrganization,
  IRoleCategory,
  IScheduleCategory,
  IScheduleTemplate,
  IVacationCategory,
  IWorkInfo,
} from '../../../../../../commons/types/generated/types';
import MemberData from './members';
import OrganizationData from './organization';
import RoleCategoryData from './roleCategory';
import ScheduleCategoryData from './scheduleCategory';
import ScheduleTemplateData from './scheduleTemplate';
import VacationCategoryData from './vacationCategory';
import WageData from './wages';

export interface IRowDataCellsProps {
  tab: string;
  data?: IMember &
    IOrganization &
    IRoleCategory &
    IScheduleCategory &
    IScheduleTemplate &
    IVacationCategory &
    IWorkInfo;
}

interface IStyle {
  color?: string;
}

export const Td = styled.td`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  min-width: 100px;
`;

export const ColorBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ color }: IStyle) => color};
  border-radius: 0.2rem;
`;

const RowDataCells = (props: IRowDataCellsProps) => {
  switch (props.tab) {
    case '직원':
      return <MemberData data={props.data} />;
    case '지점':
      return <OrganizationData data={props.data} />;
    case '직무':
      return <RoleCategoryData data={props.data} />;
    case '근로 정보':
      return <WageData data={props.data} />;
    case '근무일정 유형':
      return <ScheduleCategoryData data={props.data} />;
    case '근무일정 템플릿':
      return <ScheduleTemplateData data={props.data} />;
    case '휴가 유형':
      return <VacationCategoryData data={props.data} />;
    default:
      return <MemberData data={props.data} />;
  }
};

export default RowDataCells;
