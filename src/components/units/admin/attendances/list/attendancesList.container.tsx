import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import AttendancesListPresenter from './attendancesList.presenter';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  IQuery,
  ISchedule,
} from '../../../../../commons/types/generated/types';
import {
  FETCH_LIST_TYPE_SCHEDULE,
  FETCH_ORGANIZATIONS,
  CREATE_ADMIN_WORK_CHECK,
  DELETE_MANY_WORK_CHECK,
} from './attendancesList.queries';
import { Dayjs } from 'dayjs';

import { useMutation, useQuery } from '@apollo/client';
import { InputData } from '../../../../commons/input/select01';

const schema = yup.object({
  startHour: yup.string().matches(/^\d{2}$/),
  startMin: yup.string().matches(/^\d{2}$/),
  endHour: yup.string().matches(/^\d{2}$/),
  endMin: yup.string().matches(/^\d{2}$/),
});

const AttendancesListContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [organizationArr, setOrganizationArr] = useState<InputData[]>([
    { id: '', name: '' },
  ]);

  const [checkedList, setCheckedList] = useState<ISchedule[]>([]);

  const [startEndDate, setStartEndDate] = useState([
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  ]);

  const { handleSubmit, register, setValue, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };
  const [createAdminWorkCheck] = useMutation(CREATE_ADMIN_WORK_CHECK);

  const [deleteManyWorkCheck] = useMutation(DELETE_MANY_WORK_CHECK);

  const { data } = useQuery<Pick<IQuery, 'fetchListTypeSchedule'>>(
    FETCH_LIST_TYPE_SCHEDULE,
    {
      variables: {
        organizationId: organizationArr?.map((organization) => organization.id),
        startDate: startEndDate[0] ? startEndDate[0] : null,
        endDate: startEndDate[1] ? startEndDate[1] : null,
      },
    },
  );

  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);

  const organizationsData = organizations?.fetchOrganizations.map(
    (organization) => ({
      id: String(organization.id),
      name: String(organization.name),
    }),
  );

  const onChangeStartEndDate = (
    dates: null | Array<Dayjs | null>,
    dateString: string[],
  ) => {
    if (dates === null) return;
    setStartEndDate([new Date(dateString[0]), new Date(dateString[1])]);
  };

  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray: ISchedule[] = [];
        data?.fetchListTypeSchedule.forEach((list) =>
          checkedListArray.push(list),
        );
        setCheckedList(checkedListArray);
        setIsOptionOpen(true);
      } else {
        setCheckedList([]);
        setIsOptionOpen(false);
      }
    },
    [data],
  );

  const onCheckedElement = useCallback(
    (checked, selectedTarget) => {
      if (checked) {
        setCheckedList([...checkedList, selectedTarget]);
        setIsOptionOpen(true);
      } else {
        setCheckedList(checkedList.filter((el) => el.id !== selectedTarget.id));
        setIsOptionOpen(false);
      }
    },
    [checkedList],
  );

  const onClickDeleteChecked = async () => {
    try {
      await deleteManyWorkCheck({
        variables: { workCheckId: checkedList.map((el) => el.id) },
      });
    } catch (error) {
      alert('다시 ㄱㄱ');
    }
  };

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

  return (
    <AttendancesListPresenter
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
      setOrganizationArr={setOrganizationArr}
      organizationsData={organizationsData}
      onChangeStartEndDate={onChangeStartEndDate}
      data={data}
      onCheckedAll={onCheckedAll}
      onCheckedElement={onCheckedElement}
      checkedList={checkedList}
      isOptionOpen={isOptionOpen}
      onClickDeleteChecked={onClickDeleteChecked}
    />
  );
};

export default AttendancesListContainer;
