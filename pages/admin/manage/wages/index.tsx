// import { useQuery } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { IQuery } from '../../../../src/commons/types/generated/types';
import Manage from '../../../../src/components/units/admin/manage/manage.container';
import { FETCH_WORK_INFOS } from '../../../../src/components/units/admin/manage/manage.queries';

const Wages = () => {
  const { data: fetchWorkInfos } =
    useQuery<Pick<IQuery, 'fetchWorkInfos'>>(FETCH_WORK_INFOS);
  const data = {
    fetchWorkInfos,
  };
  return <Manage tab="근로 정보" data={data} />;
};

export default Wages;
