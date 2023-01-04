import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IVacationIssue,
  IQuery,
  IQueryFetchVacationIssueBaseDateArgs,
  IQueryFetchVacationIssueDetailDateArgs,
  IQueryFetchVacationIssueDetailDateDeleteArgs,
  IQueryFetchVacationIssueWithBaseDateDeleteArgs,
} from '../../../../commons/types/generated/types';
import LeaveAccrualsPresenter from './leaveAccruals.presenter';
import {
  FETCH_ORGANIZATIONS,
  FETCH_VACATION_ISSUE_DETAIL_DELETE,
  FETCH_VACATION_ISSUE_BASE,
  FETCH_VACATION_ISSUE_BASE_DELETE,
  FETCH_VACATION_ISSUE_DETAIL,
} from './leaveAccruals.queries';
import { IInputData } from './leaveAccruals.types';
import { Dayjs } from 'dayjs';

const LeaveAccrualsContainer = () => {
  const date = new Date();
  const { register, handleSubmit, setValue } = useForm();

  const [isSelect, setIsSelect] = useState(true);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [isCheckedChange, setIsCheckedChange] = useState(false);
  const [checkedList, setCheckedList] = useState<IVacationIssue[]>([]);
  const [dataLength, setDataLength] = useState(0);
  const [baseDate] = useState(date);
  const [startEndDate, setStartEndDate] = useState([
    new Date(date.getFullYear(), date.getMonth(), 1),
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  ]);

  const [dayChecked, setDayChecked] = useState(false);
  const [startDateChecked, setStartDateChecked] = useState(false);
  const [endDateChecked, setEndDateChecked] = useState(false);
  const [memoChecked, setMemoChecked] = useState(false);
  const [init, setInit] = useState(true);
  const [filterInit, setFilterInit] = useState(true);
  const [organizationArr, setOrganizationArr] = useState<IInputData[]>([
    { id: '', name: '' },
  ]);

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickOpenSelectModal = () => {
    setAniMode(true);
    setIsSelectOpen(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
    setIsMemberOpen(false);
  };

  const onClickCheckedChange = () => {
    setIsCheckedChange(true);
    setAniMode(true);
  };

  const onClickEmployee = () => {
    setIsSelect(true);
    setFilterInit(true);
  };

  const onClickList = () => {
    setIsSelect(false);
    setFilterInit(true);
  };

  const onSubmit = (data: any) => () => {
    if (data) {
      console.log(data);
      setAniMode(false);
    }
  };

  const onChangeDate = async (value: Dayjs | null) => {
    if (value === null) return;
    await refetch({
      baseDate: new Date(value.format('YYYY-MM-DD')),
    });
  };

  const onChangeStartEndDate = (
    dates: null | Array<Dayjs | null>,
    dateString: string[],
  ) => {
    if (dates === null) return;
    setStartEndDate([new Date(dateString[0]), new Date(dateString[1])]);
  };

  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);

  const organizationsData: IInputData[] = organizations
    ? organizations.fetchOrganizations.map((organization) => ({
        id: String(organization.id),
        name: String(organization.name),
      }))
    : [{ id: '', name: '' }];

  const { data: vDetail } = useQuery<
    Pick<IQuery, 'fetchVacationIssueDetailDate'>,
    IQueryFetchVacationIssueDetailDateArgs
  >(FETCH_VACATION_ISSUE_DETAIL, {
    variables: {
      baseDate,
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0] ? startEndDate[0] : null,
      endDate: startEndDate[1] ? startEndDate[1] : null,
    },
  });

  const { data: vDetailDelete } = useQuery<
    Pick<IQuery, 'fetchVacationIssueDetailDateDelete'>,
    IQueryFetchVacationIssueDetailDateDeleteArgs
  >(FETCH_VACATION_ISSUE_DETAIL_DELETE, {
    variables: {
      baseDate,
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0] ? startEndDate[0] : null,
      endDate: startEndDate[1] ? startEndDate[1] : null,
    },
  });

  const { data: vBase, refetch } = useQuery<
    Pick<IQuery, 'fetchVacationIssueBaseDate'>,
    IQueryFetchVacationIssueBaseDateArgs
  >(FETCH_VACATION_ISSUE_BASE, {
    variables: {
      baseDate,
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0] ? startEndDate[0] : null,
      endDate: startEndDate[1] ? startEndDate[1] : null,
    },
  });

  const { data: vBaseDelete } = useQuery<
    Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>,
    IQueryFetchVacationIssueWithBaseDateDeleteArgs
  >(FETCH_VACATION_ISSUE_BASE_DELETE, {
    variables: {
      baseDate,
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0] ? startEndDate[0] : null,
      endDate: startEndDate[1] ? startEndDate[1] : null,
    },
  });

  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray: IVacationIssue[] = [];
        if (!init && !filterInit) {
          vDetailDelete?.fetchVacationIssueDetailDateDelete.forEach((list) =>
            checkedListArray.push(...list),
          );
          setCheckedList(checkedListArray);
          setDataLength(checkedListArray.length);
        } else if (!init && filterInit) {
          vDetail?.fetchVacationIssueDetailDate.forEach((list) =>
            checkedListArray.push(...list),
          );
          setCheckedList(checkedListArray);
          setDataLength(checkedListArray.length);
        } else if (init && filterInit) {
          vBase?.fetchVacationIssueBaseDate.forEach((list) =>
            checkedListArray.push(...list),
          );
          setCheckedList(checkedListArray);
          setDataLength(checkedListArray.length);
        } else {
          vBaseDelete?.fetchVacationIssueWithBaseDateDelete.forEach((list) =>
            checkedListArray.push(...list),
          );
          setCheckedList(checkedListArray);
          setDataLength(checkedListArray.length);
        }
      } else setCheckedList([]);
    },
    [init, filterInit, vDetail, vDetailDelete, vBase, vBaseDelete],
  );

  console.log(checkedList);

  const onCheckedElement = useCallback(
    (checked, selectedTarget) => {
      if (checked) setCheckedList([...checkedList, selectedTarget]);
      else
        setCheckedList(checkedList.filter((el) => el.id !== selectedTarget.id));
    },
    [checkedList],
  );

  return (
    <LeaveAccrualsPresenter
      date={date}
      organizationsData={organizationsData}
      vDetailDelete={vDetailDelete}
      vDetail={vDetail}
      vBase={vBase}
      vBaseDelete={vBaseDelete}
      dayChecked={dayChecked}
      aniMode={aniMode}
      init={init}
      filterInit={filterInit}
      dataLength={dataLength}
      checkedList={checkedList}
      isOpen={isOpen}
      isSelect={isSelect}
      isSelectOpen={isSelectOpen}
      isMemberOpen={isMemberOpen}
      isCheckedChange={isCheckedChange}
      memoChecked={memoChecked}
      startDateChecked={startDateChecked}
      endDateChecked={endDateChecked}
      setIsCheckedChange={setIsCheckedChange}
      setDayChecked={setDayChecked}
      setStartDateChecked={setStartDateChecked}
      setEndDateChecked={setEndDateChecked}
      setMemoChecked={setMemoChecked}
      setOrganizationArr={setOrganizationArr}
      setIsOpen={setIsOpen}
      setInit={setInit}
      setFilterInit={setFilterInit}
      setIsSelectOpen={setIsSelectOpen}
      setIsMemberOpen={setIsMemberOpen}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
      onSubmit={onSubmit}
      onClickEmployee={onClickEmployee}
      onClickList={onClickList}
      onClickOpenModal={onClickOpenModal}
      onClickCloseModal={onClickCloseModal}
      onChangeDate={onChangeDate}
      onChangeStartEndDate={onChangeStartEndDate}
      onClickOpenSelectModal={onClickOpenSelectModal}
      onClickCheckedChange={onClickCheckedChange}
      onCheckedAll={onCheckedAll}
      onCheckedElement={onCheckedElement}
    />
  );
};

export default LeaveAccrualsContainer;
