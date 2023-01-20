import { useMutation, useQuery } from '@apollo/client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IQuery,
  IQueryFetchVacationWithDateArgs,
  IQueryFetchVacationWithDeleteArgs,
  IVacation,
} from '../../../../commons/types/generated/types';
import { FETCH_ORGANIZATIONS } from '../leaveAccruals/leaveAccruals.queries';
import LeavesPresenter from './leaves.presenter';
import {
  CREATE_VACATION,
  DELETE_MANY_VACATION,
  FETCH_MEMBERS,
  FETCH_VACATION_CATEGORIES,
  FETCH_VACATION_WITH_DATE,
  FETCH_VACATION_WITH_DELETE,
} from './leaves.queries';
import { IInputData } from './leaves.types';

const LeavesContainer = () => {
  const date = new Date();
  const [filterInit, setFilterInit] = useState(false);
  const [isCheckedChange, setIsCheckedChange] = useState(false);
  const [organizationArr, setOrganizationArr] = useState<IInputData[]>([]);
  const [memberArr, setMemberArr] = useState<IInputData[]>([]);
  const [startEndDate, setStartEndDate] = useState([
    new Date(date.getFullYear(), date.getMonth(), 1),
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  ]);

  const [checkedList, setCheckedList] = useState<IVacation[]>([]);
  const [dataLength, setDataLength] = useState(0);

  const { register, handleSubmit, setValue } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string[]>([]);

  const [createVacation] = useMutation(CREATE_VACATION);

  const onChangeStartEndDate = (value: any) => {
    if (value === null) return;
    setStartEndDate([value[0].$d, value[1].$d]);
  };

  const onClickList = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickOpenModal = () => {
    setIsAddModalOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
  };

  const onClickCheckedChange = () => {
    setAniMode(true);
    setIsCheckedChange(true);
  };

  const onSubmit = async (data: any) => {
    try {
      data.vacations = selectedDate.map((data) => new Date(data));
      data.memberId = memberArr?.map((data) => data.id);
      console.log(data);
      await createVacation({
        variables: { createVacationInput: data },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });

      setAniMode(false);
    } catch (error) {
      alert(error);
    }
  };

  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);

  const organizationsData = organizations?.fetchOrganizations.map(
    (organization) => ({
      id: String(organization.id),
      name: String(organization.name),
    }),
  );

  const { data: members } =
    useQuery<Pick<IQuery, 'fetchMembers'>>(FETCH_MEMBERS);

  const memberData = members?.fetchMembers.map((member) => ({
    id: String(member.id),
    name: String(member.name),
  }));

  const { data: vacationCategories } = useQuery<
    Pick<IQuery, 'fetchVacationCategories'>
  >(FETCH_VACATION_CATEGORIES);

  const vacationCategoriesData =
    vacationCategories?.fetchVacationCategories.map((category) => ({
      id: String(category.id),
      name: `${String(category.name)} (${String(category.paidTime)}h, ${String(
        category.deductionDays,
      )})`,
    }));

  const { data: withDate } = useQuery<
    Pick<IQuery, 'fetchVacationWithDate'>,
    IQueryFetchVacationWithDateArgs
  >(FETCH_VACATION_WITH_DATE, {
    variables: {
      startDate: startEndDate[0],
      endDate: startEndDate[1],
      organizationId: organizationArr.map((organization) => organization.id),
    },
  });

  const { data: withDelete } = useQuery<
    Pick<IQuery, 'fetchVacationWithDelete'>,
    IQueryFetchVacationWithDeleteArgs
  >(FETCH_VACATION_WITH_DELETE, {
    variables: {
      startDate: startEndDate[0],
      endDate: startEndDate[1],
      organizationId: organizationArr.map((organization) => organization.id),
    },
  });

  const [deleteManyVacation] = useMutation(DELETE_MANY_VACATION);

  useMemo(() => {
    if (organizations !== undefined) {
      const organization = organizations.fetchOrganizations.map((data) => ({
        id: String(data.id),
        name: String(data.name),
      }));
      setOrganizationArr(organization ?? []);
    }
  }, [organizations]);

  useEffect(() => {
    setSelectedDate([]);
  }, [memberArr]);

  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray: IVacation[] = [];
        if (filterInit) {
          withDate?.fetchVacationWithDate.forEach((list) =>
            checkedListArray.push(...list),
          );
          setCheckedList(checkedListArray);
          setDataLength(checkedListArray.length);
        } else {
          withDelete?.fetchVacationWithDelete.forEach((list) =>
            checkedListArray.push(...list),
          );
          setCheckedList(checkedListArray);
          setDataLength(checkedListArray.length);
        }
      } else {
        setCheckedList([]);
      }
    },
    [withDate, withDelete, filterInit],
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

  const onClickDeleteChecked = async () => {
    if (filterInit) {
      await deleteManyVacation({
        variables: { vacationId: checkedList.map((checked) => checked.id) },
        refetchQueries: [
          {
            query: FETCH_VACATION_WITH_DATE,
            variables: {
              startDate: startEndDate[0],
              endDate: startEndDate[1],
              organizationId: organizationArr.map(
                (organization) => organization.id,
              ),
            },
          },
        ],
      });
    } else {
      await deleteManyVacation({
        variables: { vacationId: checkedList.map((checked) => checked.id) },
        refetchQueries: [
          {
            query: FETCH_VACATION_WITH_DELETE,
            variables: {
              startDate: startEndDate[0],
              endDate: startEndDate[1],
              organizationId: organizationArr.map(
                (organization) => organization.id,
              ),
            },
          },
        ],
      });
    }
  };

  return (
    <LeavesPresenter
      filterInit={filterInit}
      setFilterInit={setFilterInit}
      organizationsData={organizationsData}
      date={date}
      setOrganizationArr={setOrganizationArr}
      onChangeStartEndDate={onChangeStartEndDate}
      onClickList={onClickList}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      aniMode={aniMode}
      onClickCloseModal={onClickCloseModal}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      onSubmit={onSubmit}
      onClickCheckedChange={onClickCheckedChange}
      isCheckedChange={isCheckedChange}
      setIsCheckedChange={setIsCheckedChange}
      organizationArr={organizationArr}
      withDate={withDate}
      withDelete={withDelete}
      onCheckedAll={onCheckedAll}
      onCheckedElement={onCheckedElement}
      dataLength={dataLength}
      checkedList={checkedList}
      onClickDeleteChecked={onClickDeleteChecked}
      onClickOpenModal={onClickOpenModal}
      isAddModalOpen={isAddModalOpen}
      setIsAddModalOpen={setIsAddModalOpen}
      setSelectedDate={setSelectedDate}
      selectedDate={selectedDate}
      memberData={memberData}
      setMemberArr={setMemberArr}
      vacationCategoriesData={vacationCategoriesData}
    />
  );
};

export default LeavesContainer;
