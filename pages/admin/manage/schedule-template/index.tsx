import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import { FETCH_ALL_SCHEDULE_TEMPLATE } from '../../../../src/components/units/admin/manage/manage.queries';

const ScheduleTemplate = () => {
  const { data: scheduleTemplates } = useQuery<
    Pick<IQuery, 'fetchAllScheduleTemplates'>
  >(FETCH_ALL_SCHEDULE_TEMPLATE);
  const data = {
    scheduleTemplates,
  };
  return <Manage tab="근무일정 템플릿" data={data} />;
};

export default ScheduleTemplate;
