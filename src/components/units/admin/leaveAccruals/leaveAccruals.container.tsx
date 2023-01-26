import { useMutation, useQuery } from '@apollo/client';
import { MouseEvent, useCallback, useMemo, useState } from 'react';
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
  DELETE_MANY_VACATION_ISSUE,
} from './leaveAccruals.queries';
import { IInputData } from './leaveAccruals.types';
import { Dayjs } from 'dayjs';

const LeaveAccrualsContainer = () => {
  const date = new Date();

  const [isSelect, setIsSelect] = useState(false);
  const [isSelectList, setIsSelectList] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [isCheckedChange, setIsCheckedChange] = useState(false);
  const [checkedList, setCheckedList] = useState<IVacationIssue[]>([]);
  const [dataLength, setDataLength] = useState(0);
  const [baseDate, setBaseDate] = useState(date);
  const [startEndDate, setStartEndDate] = useState([
    new Date(date.getFullYear(), date.getMonth(), 1),
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  ]);

  const [listMemberId, setListMemberId] = useState('');
  const [listMemberName, setListMemberName] = useState('');

  const [init, setInit] = useState(true);
  const [filterInit, setFilterInit] = useState(true);
  const [organizationArr, setOrganizationArr] = useState<IInputData[]>([]);

  const [deleteManyVacationIssue] = useMutation(DELETE_MANY_VACATION_ISSUE);

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickOpenSelectModal = () => {
    setAniMode(true);
    setIsSelectOpen(true);
  };

  const onClickOpenSelectListModal = (e: MouseEvent<HTMLUListElement>) => {
    setAniMode(true);
    setIsSelectList(true);
    setListMemberId(e.currentTarget.id);
    if (e.currentTarget.role) setListMemberName(e.currentTarget.role);
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
  };

  const onClickList = () => {
    setIsSelect(false);
  };

  const onChangeDate = async (value: Dayjs | null) => {
    if (value === null) return;
    setBaseDate(new Date(value.format('YYYY-MM-DD')));
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

  const organizationsData = organizations?.fetchOrganizations.map(
    (organization) => ({
      id: String(organization.id),
      name: String(organization.name),
    }),
  );

  console.log(listMemberId);

  useMemo(() => {
    if (organizations !== undefined) {
      const organization = organizations.fetchOrganizations.map((data) => ({
        id: String(data.id),
        name: String(data.name),
      }));
      setOrganizationArr(organization ?? []);
    }
  }, [organizations]);

  const { data: vDetail } = useQuery<
    Pick<IQuery, 'fetchVacationIssueDetailDate'>,
    IQueryFetchVacationIssueDetailDateArgs
  >(FETCH_VACATION_ISSUE_DETAIL, {
    fetchPolicy: 'network-only',
    variables: {
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0],
      endDate: startEndDate[1],
    },
  });

  const { data: vDetailDelete } = useQuery<
    Pick<IQuery, 'fetchVacationIssueDetailDateDelete'>,
    IQueryFetchVacationIssueDetailDateDeleteArgs
  >(FETCH_VACATION_ISSUE_DETAIL_DELETE, {
    fetchPolicy: 'network-only',
    variables: {
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0],
      endDate: startEndDate[1],
    },
  });

  const { data: vBase, refetch } = useQuery<
    Pick<IQuery, 'fetchVacationIssueBaseDate'>,
    IQueryFetchVacationIssueBaseDateArgs
  >(FETCH_VACATION_ISSUE_BASE, {
    fetchPolicy: 'network-only',
    variables: {
      baseDate,
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0],
      endDate: startEndDate[1],
    },
  });

  const { data: vBaseDelete } = useQuery<
    Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>,
    IQueryFetchVacationIssueWithBaseDateDeleteArgs
  >(FETCH_VACATION_ISSUE_BASE_DELETE, {
    fetchPolicy: 'network-only',
    variables: {
      baseDate,
      organizationId: organizationArr?.map((organization) => organization.id),
      startDate: startEndDate[0],
      endDate: startEndDate[1],
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
      } else {
        setCheckedList([]);
      }
    },
    [init, filterInit, vDetail, vDetailDelete, vBase, vBaseDelete],
  );

  const onCheckedElement = useCallback(
    (checked, selectedTarget) => {
      if (checked) {
        setCheckedList([...checkedList, selectedTarget]);
      } else
        setCheckedList(checkedList.filter((el) => el.id !== selectedTarget.id));
    },
    [checkedList],
  );

  const onClickDeleteChecked = async () => {
    try {
      await deleteManyVacationIssue({
        variables: {
          vacationIssueId: checkedList.map((checked) => checked.id),
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      setCheckedList([]);
    } catch (error) {
      alert('다시 ㄱㄱ');
    }
  };

  return (
    <LeaveAccrualsPresenter
      date={date}
      organizationsData={organizationsData}
      vDetailDelete={vDetailDelete}
      vDetail={vDetail}
      vBase={vBase}
      vBaseDelete={vBaseDelete}
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
      setIsCheckedChange={setIsCheckedChange}
      setOrganizationArr={setOrganizationArr}
      setIsOpen={setIsOpen}
      setInit={setInit}
      setFilterInit={setFilterInit}
      setIsSelectOpen={setIsSelectOpen}
      setIsMemberOpen={setIsMemberOpen}
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
      organizationArr={organizationArr}
      onClickDeleteChecked={onClickDeleteChecked}
      setAniMode={setAniMode}
      onClickOpenSelectListModal={onClickOpenSelectListModal}
      isSelectList={isSelectList}
      setIsSelectList={setIsSelectList}
      listMemberName={listMemberName}
      listMemberId={listMemberId}
    />
  );
};

export default LeaveAccrualsContainer;
