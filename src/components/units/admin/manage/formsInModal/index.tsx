import { IFormProps } from './common/form.types';
import LeaveTypes from './leaveTypes';
import Wages from './wages';
import OrganizationFormContainer from './oraganization/organizationForm.container';
import ScheduleTemplate from './scheduleTemplate';
import ScheduleCategory from './scheduleCategory';
import MemberFormContainer from './member/memberForm.container';
import RoleCategoryFormContainer from './roleCategory/roleCategoryForm.container';

const Form = (props: IFormProps) => {
  if (props.tab === '직원') return <MemberFormContainer {...props} />;
  if (props.tab === '지점') return <OrganizationFormContainer {...props} />;
  if (props.tab === '직무') return <RoleCategoryFormContainer {...props} />;
  if (props.tab === '근로 정보') return <Wages {...props} />;
  if (props.tab === '근무일정 유형') return <ScheduleCategory {...props} />;
  if (props.tab === '근무일정 템플릿') return <ScheduleTemplate {...props} />;
  if (props.tab === '휴가 유형') return <LeaveTypes {...props} />;
  return <MemberFormContainer {...props} />;
};

export default Form;
