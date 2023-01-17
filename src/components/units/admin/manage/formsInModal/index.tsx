import { IFormProps } from './common/form.types';
import Wages from './wages';
import OrganizationFormContainer from './oraganization/organizationForm.container';
import MemberFormContainer from './member/memberForm.container';
import RoleCategoryFormContainer from './roleCategory/roleCategoryForm.container';
import ScheduleCategoryFormContainer from './scheduleCategory/scheduleCategoryForm.container';
import ScheduleTemplateFormContainer from './scheduleTemplate/scheduleTemplateForm.container';
import VacationCategoryFormContainer from './vacationCategory/vacationCategory.container';

const Form = (props: IFormProps) => {
  if (props.tab === '직원') return <MemberFormContainer {...props} />;
  if (props.tab === '지점') return <OrganizationFormContainer {...props} />;
  if (props.tab === '직무') return <RoleCategoryFormContainer {...props} />;
  if (props.tab === '근로 정보') return <Wages {...props} />;
  if (props.tab === '근무일정 유형')
    return <ScheduleCategoryFormContainer {...props} />;
  if (props.tab === '근무일정 템플릿')
    return <ScheduleTemplateFormContainer {...props} />;
  if (props.tab === '휴가 유형')
    return <VacationCategoryFormContainer {...props} />;
  return <MemberFormContainer {...props} />;
};

export default Form;
