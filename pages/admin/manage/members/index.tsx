import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import {
  FETCH_MEMBERS,
  FETCH_ORGANIZATIONS,
  FETCH_ROLE_CATEGORIES,
} from '../../../../src/components/units/admin/manage/manage.queries';

const ManageMember = () => {
  const { data: members } =
    useQuery<Pick<IQuery, 'fetchMembers'>>(FETCH_MEMBERS);
  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);
  const { data: roleCategories } = useQuery<
    Pick<IQuery, 'fetchRoleCategories'>
  >(FETCH_ROLE_CATEGORIES);

  const data = {
    members,
    organizations,
    roleCategories,
  };
  return <Manage tab="직원" data={data} />;
};

export default ManageMember;
