import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import { FETCH_VACATION_CATEGORIES } from '../../../../src/components/units/admin/manage/manage.queries';

const VacationCategory = () => {
  const { data: vacationCategories } = useQuery<
    Pick<IQuery, 'fetchVacationCategories'>
  >(FETCH_VACATION_CATEGORIES);
  const data = {
    vacationCategories,
  };
  return <Manage tab="휴가 유형" data={data} />;
};

export default VacationCategory;
