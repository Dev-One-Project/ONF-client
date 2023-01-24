import { IFormProps } from './common/form.types';
import OrganizationFormContainer from './oraganization/organizationForm.container';
import MemberFormContainer from './member/memberForm.container';
import RoleCategoryFormContainer from './roleCategory/roleCategoryForm.container';
import ScheduleCategoryFormContainer from './scheduleCategory/scheduleCategoryForm.container';
import ScheduleTemplateFormContainer from './scheduleTemplate/scheduleTemplateForm.container';
import VacationCategoryFormContainer from './vacationCategory/vacationCategory.container';
import WorkInfoFormContainer from './workInfo/workInfo.container';

const Form = (props: IFormProps) => {
  switch (props.tab) {
    case '직원':
      return <MemberFormContainer {...props} />;
    case '지점':
      return <OrganizationFormContainer {...props} />;
    case '직무':
      return <RoleCategoryFormContainer {...props} />;
    case '근로 정보':
      return <WorkInfoFormContainer {...props} />;
    case '근무일정 유형':
      return <ScheduleCategoryFormContainer {...props} />;
    case '근무일정 템플릿':
      return <ScheduleTemplateFormContainer {...props} />;
    case '휴가 유형':
      return <VacationCategoryFormContainer {...props} />;
    default:
      return <MemberFormContainer {...props} />;
  }
};

export default Form;
