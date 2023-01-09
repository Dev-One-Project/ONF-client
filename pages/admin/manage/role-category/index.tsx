import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import { FETCH_ROLE_CATEGORIES } from '../../../../src/components/units/admin/manage/manage.queries';

const RoleCategory = () => {
  const { data: roleCategories } = useQuery<
    Pick<IQuery, 'fetchRoleCategories'>
  >(FETCH_ROLE_CATEGORIES);
  const data = { roleCategories };
  return <Manage tab="직무" data={data} />;
};

export default RoleCategory;
