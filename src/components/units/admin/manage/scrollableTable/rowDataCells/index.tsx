import { IMember } from '../../../../../../commons/types/generated/types';
import MemberData from './members';

interface IRowDataCellsProps {
  tab: string;
  data?: IMember;
}

const RowDataCells = (props: IRowDataCellsProps) => {
  switch (props.tab) {
    case '직원':
      return <MemberData data={props.data} />;
    case '지점':
      return <>지점탭</>;
    case '직무':
      return <>직무탭</>;
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
