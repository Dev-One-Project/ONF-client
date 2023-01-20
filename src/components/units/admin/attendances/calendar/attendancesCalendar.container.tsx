import { useQuery } from '@apollo/client';
import { ChangeEvent, useMemo, useState } from 'react';
import {
  IQuery,
  IQueryFetchMonthWorkChecksArgs,
} from '../../../../../commons/types/generated/types';
import { InputData } from '../../../../commons/input/select01';
import AttendancesCalendarPresenter from './attendancesCalendar.presenter';
import {
  FETCH_COMPANY_DETAIL,
  FETCH_MONTH_WORK_CHECKS,
  FETCH_ORGANIZATIONS,
} from './attendancesCalendar.queries';
import moment from 'moment';

const AttendancesCalendarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [organizationArr, setOrganizationArr] = useState<InputData[]>([]);
  const [init, setInit] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM'));

  const { data } = useQuery<
    Pick<IQuery, 'fetchMonthWorkChecks'>,
    IQueryFetchMonthWorkChecksArgs
  >(FETCH_MONTH_WORK_CHECKS, {
    variables: {
      organizationId: organizationArr.map((data) => data.id),
      month: selectedDate,
      isActiveMember: init,
    },
    fetchPolicy: 'network-only',
  });

  const { data: companyDetail } =
    useQuery<Pick<IQuery, 'fetchCompanyDetail'>>(FETCH_COMPANY_DETAIL);

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(event.target.value);
  };

  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);

  const organizationsData = organizations?.fetchOrganizations.map(
    (organization) => ({
      id: String(organization.id),
      name: String(organization.name),
    }),
  );

  useMemo(() => {
    if (organizations !== undefined) {
      const organization = organizations.fetchOrganizations.map((data) => ({
        id: String(data.id),
        name: String(data.name),
      }));
      setOrganizationArr(organization ?? []);
    }
  }, [organizations]);

  const monthArr = [];
  const date = moment(companyDetail?.fetchCompanyDetail.createdAt);
  const days = moment(selectedDate).endOf('month').date();

  const yearArr = [];
  for (let i = Math.ceil(moment().diff(date, 'months', true)); i >= 0; i--) {
    yearArr.push(moment().subtract(i, 'month').format('YYYY-MM'));
  }

  for (let i = 1; i <= days; i++) {
    monthArr.push(i);
  }

  return (
    <AttendancesCalendarPresenter
      monthArr={monthArr}
      yearArr={yearArr}
      organizationsData={organizationsData}
      setOrganizationArr={setOrganizationArr}
      isOpen={isOpen}
      aniMode={aniMode}
      setIsOpen={setIsOpen}
      setAniMode={setAniMode}
      onClickOpenModal={onClickOpenModal}
      organizationArr={organizationArr}
      init={init}
      setInit={setInit}
      data={data}
      onChangeSelect={onChangeSelect}
    />
  );
};

export default AttendancesCalendarContainer;
