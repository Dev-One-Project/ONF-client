import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import { FETCH_ORGANIZATIONS } from '../../../../src/components/units/admin/manage/manage.queries';

const Organization = () => {
  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);
  const data = { organizations };
  return <Manage tab="지점" data={data} />;
};

export default Organization;
