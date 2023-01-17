import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import { FETCH_ALL_SCHEDULE_CATEGORIES } from '../../../../src/components/units/admin/manage/manage.queries';

const ScheduleCategory = () => {
  const { data: scheduleCategories } = useQuery<
    Pick<IQuery, 'fetchAllScheduleCategories'>
  >(FETCH_ALL_SCHEDULE_CATEGORIES);
  const data = {
    scheduleCategories,
  };
  return <Manage tab="근무일정 유형" data={data} />;
};

export default ScheduleCategory;
