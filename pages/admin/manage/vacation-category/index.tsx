import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import { FETCH_ORGANIZATIONS } from '../../../../src/components/units/admin/leaveAccruals/leaveAccruals.queries';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import {
  FETCH_ROLE_CATEGORIES,
  FETCH_VACATION_CATEGORIES,
} from '../../../../src/components/units/admin/manage/manage.queries';

const VacationCategory = () => {
  const { data: vacationCategories } = useQuery<
    Pick<IQuery, 'fetchVacationCategories'>
  >(FETCH_VACATION_CATEGORIES);
  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);
  const { data: roleCategories } = useQuery<
    Pick<IQuery, 'fetchRoleCategories'>
  >(FETCH_ROLE_CATEGORIES);
  const data = {
    vacationCategories,
    organizations,
    roleCategories,
  };
  return <Manage tab="휴가 유형" data={data} />;
};

export default VacationCategory;
