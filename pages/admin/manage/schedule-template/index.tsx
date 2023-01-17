import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import {
  FETCH_ALL_SCHEDULE_CATEGORIES,
  FETCH_ALL_SCHEDULE_TEMPLATE,
  FETCH_ORGANIZATIONS,
  FETCH_ROLE_CATEGORIES,
} from '../../../../src/components/units/admin/manage/manage.queries';

const ScheduleTemplate = () => {
  const { data: scheduleTemplates } = useQuery<
    Pick<IQuery, 'fetchAllScheduleTemplates'>
  >(FETCH_ALL_SCHEDULE_TEMPLATE);
  const { data: scheduleCategories } = useQuery<
    Pick<IQuery, 'fetchAllScheduleCategories'>
  >(FETCH_ALL_SCHEDULE_CATEGORIES);
  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);
  const { data: roleCategories } = useQuery<
    Pick<IQuery, 'fetchRoleCategories'>
  >(FETCH_ROLE_CATEGORIES);
  const data = {
    scheduleTemplates,
    scheduleCategories,
    organizations,
    roleCategories,
  };
  return <Manage tab="근무일정 템플릿" data={data} />;
};

export default ScheduleTemplate;
