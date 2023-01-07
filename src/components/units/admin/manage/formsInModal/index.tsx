import { IFormProps } from './common/form.types';
import AttendanceLocation from './attendanceLocation';
import LeaveTypes from './leaveTypes';
import MemberForm from './member/member';
import OrganizationForm from './oranization';
import ShiftTemplate from './shiftTemplate';
import ShiftTypes from './shiftTypes';
import Wages from './wages';
import RoleCategoryForm from './roleCategory';

const Form = (props: IFormProps) => {
  if (props.tab === '직원') return <MemberForm {...props} />;
  if (props.tab === '지점') return <OrganizationForm {...props} />;
  if (props.tab === '출퇴근 장소') return <AttendanceLocation {...props} />;
  if (props.tab === '직무') return <RoleCategoryForm {...props} />;
  if (props.tab === '근로 정보') return <Wages {...props} />;
  if (props.tab === '근무일정 유형') return <ShiftTypes {...props} />;
  if (props.tab === '근무일정 템플릿') return <ShiftTemplate {...props} />;
  if (props.tab === '휴가 유형') return <LeaveTypes {...props} />;
  return <MemberForm {...props} />;
};

export default Form;
