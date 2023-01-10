import { useLazyQuery } from '@apollo/client';
import {
  IQuery,
  IQueryFetchMemberWorkChecksArgs,
} from '../../../../commons/types/generated/types';
import AttendancesPresenter from './attendances.presenter';
import { FETCH_MEMBER_WORK_CHECKS } from './attendances.queries';

const AttendancesContainer = () => {
  const [getMemberWorkChecks, { data }] = useLazyQuery<
    Pick<IQuery, 'fetchMemberWorkChecks'>,
    IQueryFetchMemberWorkChecksArgs
  >(FETCH_MEMBER_WORK_CHECKS);
  return <AttendancesPresenter />;
};
export default AttendancesContainer;
