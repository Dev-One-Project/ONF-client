import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
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
  // FETCH_ACCOUNT,
} from './leaveAccruals.queries';
import { IInputData } from './leaveAccruals.types';

const LeaveAccrualsContainer = () => {
  const date = new Date();
  const { register, handleSubmit, setValue } = useForm();

  const [isSelect, setIsSelect] = useState(true);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [isCheckedChange, setIsCheckedChange] = useState(false);
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

  const onChangeDate = async (value: any) => {
    if (value === null) return;
    await refetch({
      baseDate: value.$d,
      // companyId: String(accountDetail?.fetchAccount.company?.id),
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
    });
  };

  // const { data: accountDetail } =
  //   useQuery<Pick<IQuery, 'fetchAccount'>>(FETCH_ACCOUNT);

  const onChangeStartEndDate = (value: any) => {
    if (value === null) return;
    setStartEndDate([value[0].$d, value[1].$d]);
  };

  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);

  const organizationsData: IInputData[] = organizations
    ? organizations.fetchOrganizations.map((el) => ({
        id: String(el.id),
        name: String(el.name),
      }))
    : [{ id: '', name: '' }];

  const { data: vDetail } = useQuery<
    Pick<IQuery, 'fetchVacationIssueDetailDate'>,
    IQueryFetchVacationIssueDetailDateArgs
  >(FETCH_VACATION_ISSUE_DETAIL, {
    variables: {
      baseDate,
      // companyId: String(accountDetail?.fetchAccount.company?.id),
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
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
      // companyId: String(accountDetail?.fetchAccount.company?.id),
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
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
      // companyId: String(accountDetail?.fetchAccount.company?.id),
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
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
      // companyId: String(accountDetail?.fetchAccount.company?.id),
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0] ? startEndDate[0] : null,
      endDate: startEndDate[1] ? startEndDate[1] : null,
    },
  });

  return (
    <LeaveAccrualsPresenter
      setOrganizationArr={setOrganizationArr}
      isSelect={isSelect}
      onClickEmployee={onClickEmployee}
      onClickList={onClickList}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      aniMode={aniMode}
      onClickOpenModal={onClickOpenModal}
      onClickCloseModal={onClickCloseModal}
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      organizationsData={organizationsData}
      init={init}
      setInit={setInit}
      filterInit={filterInit}
      setFilterInit={setFilterInit}
      onChangeDate={onChangeDate}
      onChangeStartEndDate={onChangeStartEndDate}
      date={date}
      isSelectOpen={isSelectOpen}
      setIsSelectOpen={setIsSelectOpen}
      onClickOpenSelectModal={onClickOpenSelectModal}
      isMemberOpen={isMemberOpen}
      setValue={setValue}
      vDetailDelete={vDetailDelete}
      vDetail={vDetail}
      vBase={vBase}
      vBaseDelete={vBaseDelete}
      setIsMemberOpen={setIsMemberOpen}
      onClickCheckedChange={onClickCheckedChange}
      isCheckedChange={isCheckedChange}
      setIsCheckedChange={setIsCheckedChange}
      setDayChecked={setDayChecked}
      setStartDateChecked={setStartDateChecked}
      setEndDateChecked={setEndDateChecked}
      setMemoChecked={setMemoChecked}
      dayChecked={dayChecked}
      startDateChecked={startDateChecked}
      endDateChecked={endDateChecked}
      memoChecked={memoChecked}
    />
  );
};

export default LeaveAccrualsContainer;
