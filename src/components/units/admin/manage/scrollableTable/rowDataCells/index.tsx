import {
  IMember,
  IOrganization,
  IRoleCategory,
} from '../../../../../../commons/types/generated/types';
import MemberData from './members';
import OrganizationData from './organization';
import RoleCategoryData from './roleCategory';

export interface IRowDataCellsProps {
  tab: string;
  data?: IMember & IOrganization & IRoleCategory;
}

const RowDataCells = (props: IRowDataCellsProps) => {
  switch (props.tab) {
    case '직원':
      return <MemberData data={props.data} />;
    case '지점':
      return <OrganizationData data={props.data} />;
    case '직무':
      return <RoleCategoryData data={props.data} />;
    case '근로 정보':
      return <>근로 정보탭</>;
    case '근무일정 유형':
      return <>근무일정 유형탭</>;
    case '근무일정 템플릿':
      return <>근무일정 템플릿탭</>;
    case '휴가 유형':
      return <>휴가 유형탭</>;
    default:
      return <MemberData data={props.data} />;
  }
};

export default RowDataCells;
