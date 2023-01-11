import { useMutation, useQuery } from '@apollo/client';
import { useCallback, useMemo, useState } from 'react';
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
  DELETE_MANY_VACATION,
  FETCH_VACATION_WITH_DATE,
  FETCH_VACATION_WITH_DELETE,
} from './leaves.queries';
import { IInputData } from './leaves.types';

const LeavesContainer = () => {
  const date = new Date();
  const [filterInit, setFilterInit] = useState(false);
  const [isCheckedChange, setIsCheckedChange] = useState(false);
  const [organizationArr, setOrganizationArr] = useState<IInputData[]>([]);
  const [startEndDate, setStartEndDate] = useState([
    new Date(date.getFullYear(), date.getMonth(), 1),
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  ]);

  const [checkedList, setCheckedList] = useState<IVacation[]>([]);
  const [dataLength, setDataLength] = useState(0);

  const { register, handleSubmit, setValue } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const onChangeStartEndDate = (value: any) => {
    if (value === null) return;
    setStartEndDate([value[0].$d, value[1].$d]);
  };

  const onClickList = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
  };

  const onClickCheckedChange = () => {
    setAniMode(true);
    setIsCheckedChange(true);
  };

  const onSubmit = (data: any) => () => {
    if (data) {
      console.log(data);
      setAniMode(false);
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

  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray: IVacation[] = [];
        if (filterInit) {
          withDate?.fetchVacationWithDate.forEach((list) =>
            checkedListArray.push(...list),
          );
          setCheckedList(checkedListArray);
          setIsOptionOpen(true);
          setDataLength(checkedListArray.length);
        } else {
          withDelete?.fetchVacationWithDelete.forEach((list) =>
            checkedListArray.push(...list),
          );
          setCheckedList(checkedListArray);
          setIsOptionOpen(true);
          setDataLength(checkedListArray.length);
        }
      } else {
        setCheckedList([]);
        setIsOptionOpen(false);
      }
    },
    [withDate, withDelete, filterInit],
  );

  const onCheckedElement = useCallback(
    (checked, selectedTarget) => {
      if (checked) {
        setCheckedList([...checkedList, selectedTarget]);
        setIsOptionOpen(true);
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
      isOptionOpen={isOptionOpen}
      onClickDeleteChecked={onClickDeleteChecked}
    />
  );
};

export default LeavesContainer;
