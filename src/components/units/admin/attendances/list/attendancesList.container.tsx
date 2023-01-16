import { MouseEvent, useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import AttendancesListPresenter from './attendancesList.presenter';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  IQuery,
  IQueryFetchDateMemberWorkChecksArgs,
  IWorkCheckOutput,
} from '../../../../../commons/types/generated/types';
import {
  FETCH_ORGANIZATIONS,
  CREATE_ADMIN_WORK_CHECK,
  DELETE_MANY_WORK_CHECK,
  FETCH_DATE_MEMBER_WORK_CHECKS,
} from './attendancesList.queries';
import { Dayjs } from 'dayjs';

import { useMutation, useQuery } from '@apollo/client';
import { InputData } from '../../../../commons/input/select01';
import { notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { styleSet } from '../../../../../commons/styles/styleSet';

const schema = yup.object({
  startHour: yup.string().matches(/^\d{2}$/),
  startMin: yup.string().matches(/^\d{2}$/),
  endHour: yup.string().matches(/^\d{2}$/),
  endMin: yup.string().matches(/^\d{2}$/),
});

const AttendancesListContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [init, setInit] = useState(false);
  const [organizationArr, setOrganizationArr] = useState<InputData[]>([]);
  const [selectedId, setSelectedId] = useState('');

  const [checkedList, setCheckedList] = useState<IWorkCheckOutput[]>([]);

  const [startEndDate, setStartEndDate] = useState([
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  ]);

  const { handleSubmit, register, setValue, control, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };
  const [createAdminWorkCheck] = useMutation(CREATE_ADMIN_WORK_CHECK);

  const [deleteManyWorkCheck] = useMutation(DELETE_MANY_WORK_CHECK);

  const { data } = useQuery<
    Pick<IQuery, 'fetchDateMemberWorkChecks'>,
    IQueryFetchDateMemberWorkChecksArgs
  >(FETCH_DATE_MEMBER_WORK_CHECKS, {
    variables: {
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0] ? startEndDate[0] : null,
      endDate: startEndDate[1] ? startEndDate[1] : null,
      isActiveMember: init,
    },
  });

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
        const checkedListArray: IWorkCheckOutput[] = [];
        data?.fetchDateMemberWorkChecks.forEach((list) =>
          checkedListArray.push(list),
        );
        setCheckedList(checkedListArray);
      } else {
        setCheckedList([]);
      }
    },
    [data],
  );

  const onCheckedElement = useCallback(
    (checked, selectedTarget) => {
      if (checked) {
        setCheckedList([...checkedList, selectedTarget]);
      } else {
        setCheckedList(checkedList.filter((el) => el.id !== selectedTarget.id));
      }
    },
    [checkedList],
  );

  const onClickOpenEditModal = (e: MouseEvent<HTMLUListElement>) => {
    setAniMode(true);
    setIsEditOpen(true);
    setSelectedId(e.currentTarget.id);
  };

  console.log(selectedId);

  const onClickDeleteChecked = async () => {
    try {
      await deleteManyWorkCheck({
        variables: { workCheckId: checkedList.map((checked) => checked.id) },
        refetchQueries: [
          {
            query: FETCH_DATE_MEMBER_WORK_CHECKS,
            variables: {
              organizationId: organizationArr?.map(
                (organization) => organization.id,
              ),
              startDate: startEndDate[0] ? startEndDate[0] : null,
              endDate: startEndDate[1] ? startEndDate[1] : null,
              isActiveMember: init,
            },
          },
        ],
      });
      notification.open({
        message: '정상적으로 삭제되었습니다.',
        icon: (
          <CheckCircleOutlined style={{ color: styleSet.colors.primary }} />
        ),
        style: { paddingBottom: '0.5rem' },
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
        refetchQueries: [
          {
            query: FETCH_DATE_MEMBER_WORK_CHECKS,
            variables: {
              organizationId: organizationArr?.map(
                (organization) => organization.id,
              ),
              startDate: startEndDate[0] ? startEndDate[0] : null,
              endDate: startEndDate[1] ? startEndDate[1] : null,
              isActiveMember: init,
            },
          },
        ],
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
      onClickDeleteChecked={onClickDeleteChecked}
      organizationArr={organizationArr}
      init={init}
      setInit={setInit}
      watch={watch}
      isEditOpen={isEditOpen}
      setIsEditOpen={setIsEditOpen}
      onClickOpenEditModal={onClickOpenEditModal}
    />
  );
};

export default AttendancesListContainer;
