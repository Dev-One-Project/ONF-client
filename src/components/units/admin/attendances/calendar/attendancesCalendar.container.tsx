import { useMutation, useQuery } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IQuery,
  IQueryFetchMonthWorkChecksArgs,
} from '../../../../../commons/types/generated/types';
import { InputData } from '../../../../commons/input/select01';
import AttendancesCalendarPresenter from './attendancesCalendar.presenter';
import {
  CREATE_ADMIN_WORK_CHECK,
  FETCH_COMPANY_DETAIL,
  FETCH_MONTH_WORK_CHECKS,
  FETCH_ORGANIZATIONS,
} from './attendancesCalendar.queries';
import * as yup from 'yup';
import moment from 'moment';

const schema = yup.object({
  startHour: yup.string().matches(/^\d{2}$/),
  startMin: yup.string().matches(/^\d{2}$/),
  endHour: yup.string().matches(/^\d{2}$/),
  endMin: yup.string().matches(/^\d{2}$/),
});

const AttendancesCalendarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [organizationArr, setOrganizationArr] = useState<InputData[]>([]);
  const [init, setInit] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM'));

  const { handleSubmit, register, setValue, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

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

  const [createAdminWorkCheck] = useMutation(CREATE_ADMIN_WORK_CHECK);

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

  const onSubmit = async (data: any) => {
    try {
      data.workingTime = `${String(data.startHour)}${String(data.startMin)}`;
      data.quittingTime = `${String(data.endHour)}${String(data.endMin)}`;
      const { startHour, startMin, endHour, endMin, ...rest } = data;
      console.log(rest);
      await createAdminWorkCheck({
        variables: { createWorkCheckInput: { ...rest } },
      });
      setAniMode(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

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
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      setValue={setValue}
      control={control}
      organizationArr={organizationArr}
      init={init}
      setInit={setInit}
      data={data}
      onChangeSelect={onChangeSelect}
    />
  );
};

export default AttendancesCalendarContainer;
