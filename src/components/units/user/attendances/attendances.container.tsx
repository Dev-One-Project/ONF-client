import { useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { attendanceDateState } from '../../../../commons/store';
import {
  IQuery,
  IQueryFetchMemberWorkChecksArgs,
} from '../../../../commons/types/generated/types';
import { getStaticDateStr } from '../../../../commons/utils/getDate';
import AttendancesPresenter from './attendances.presenter';
import { FETCH_MEMBER_WORK_CHECKS } from './attendances.queries';

const AttendancesContainer = () => {
  const attendanceDate = useRecoilValue(attendanceDateState);
  const { data } = useQuery<
    Pick<IQuery, 'fetchMemberWorkChecks'>,
    IQueryFetchMemberWorkChecksArgs
  >(FETCH_MEMBER_WORK_CHECKS, {
    variables: {
      startDate: attendanceDate[0]
        ? attendanceDate[0]
        : getStaticDateStr(new Date()),
      endDate: attendanceDate[1]
        ? attendanceDate[1]
        : getStaticDateStr(new Date()),
    },
  });

  return <AttendancesPresenter data={data} />;
};
export default AttendancesContainer;
