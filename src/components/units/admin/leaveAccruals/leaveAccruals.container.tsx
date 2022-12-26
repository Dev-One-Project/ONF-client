import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IQuery,
  IQueryFetchOrganizationsArgs,
  IQueryFetchVacationIssueBaseDateArgs,
  IQueryFetchVacationIssueDetailDateArgs,
  IQueryFetchVacationIssueDetailDateDeleteArgs,
  IQueryFetchVacationIssueWithBaseDateDeleteArgs,
} from '../../../../commons/types/generated/types';
import { getDate } from '../../../../commons/utils/getDate';
import LeaveAccrualsPresenter from './leaveAccruals.presenter';
import {
  FETCH_ORGANIZATIONS,
  FETCH_VACATION_ISSUE_DETAIL_DELETE,
  FETCH_VACATION_ISSUE_BASE,
  FETCH_VACATION_ISSUE_BASE_DELETE,
  FETCH_VACATION_ISSUE_DETAIL,
} from './leaveAccruals.queries';
import * as S from './leaveAccruals.styles';

const LeaveAccrualsContainer = () => {
  const date = new Date();
  const { register, handleSubmit, setValue } = useForm();

  const [isSelect, setIsSelect] = useState(true);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isMemberOpen, setIsMemberOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [baseDate, setBaseDate] = useState(date);
  const [startEndDate, setStartEndDate] = useState([
    new Date(date.getFullYear(), date.getMonth(), 1),
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
  ]);

  const [init, setInit] = useState(true);
  const [filterInit, setFilterInit] = useState(true);

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

  const onClickEmployee = () => {
    setIsSelect(true);
  };

  const onClickList = () => {
    setIsSelect(false);
  };

  const onClickOpenList = () => {
    setIsMemberOpen(true);
  };

  const onClickCloseList = () => {
    setIsMemberOpen(false);
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
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
    });
  };

  const onChangeStartEndDate = (value: any) => {
    if (value === null) return;
    setStartEndDate([value[0].$d, value[1].$d]);
  };

  const { data: organizations } = useQuery<
    Pick<IQuery, 'fetchOrganizations'>,
    IQueryFetchOrganizationsArgs
  >(FETCH_ORGANIZATIONS, {
    variables: { companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998' },
  });

  // any !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const organizationsData: any = organizations?.fetchOrganizations.map(
    (el) => el.name,
  );
  // any !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const { data: vDetail } = useQuery<
    Pick<IQuery, 'fetchVacationIssueDetailDate'>,
    IQueryFetchVacationIssueDetailDateArgs
  >(FETCH_VACATION_ISSUE_DETAIL, {
    variables: {
      baseDate,
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
      organizationId: organizationsData,
    },
  });

  const { data: vDetailDelete } = useQuery<
    Pick<IQuery, 'fetchVacationIssueDetailDateDelete'>,
    IQueryFetchVacationIssueDetailDateDeleteArgs
  >(FETCH_VACATION_ISSUE_DETAIL_DELETE, {
    variables: {
      baseDate,
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
      organizationId: organizationsData,
    },
  });

  const { data: vBase, refetch } = useQuery<
    Pick<IQuery, 'fetchVacationIssueBaseDate'>,
    IQueryFetchVacationIssueBaseDateArgs
  >(FETCH_VACATION_ISSUE_BASE, {
    variables: {
      baseDate,
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
      organizationId: organizationsData,
    },
  });

  const { data: vBaseDelete } = useQuery<
    Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>,
    IQueryFetchVacationIssueWithBaseDateDeleteArgs
  >(FETCH_VACATION_ISSUE_BASE_DELETE, {
    variables: {
      baseDate,
      companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998',
      organizationId: organizationsData,
    },
  });

  const optionalFetch = () => {
    if (!init && !filterInit) {
      console.log('off and off');
      return vDetailDelete?.fetchVacationIssueDetailDateDelete
        .flat()
        .map((el) => (
          <S.EmployeeUl key={el.id} onClick={onClickOpenSelectModal}>
            <li>{el.member.name}</li>
            <li>
              {getDate(el.startingPoint)} - {getDate(el.expirationDate)}
            </li>
            <li>{el.vacationAll}</li>
            <li>{el.useVacation}</li>
            <li>{el.vacationAll - el.useVacation || 0}</li>
          </S.EmployeeUl>
        ));
    } else if (!init && filterInit) {
      console.log('off and on');
      return vDetail?.fetchVacationIssueDetailDate.flat().map((el) => (
        <S.EmployeeUl key={el.id} onClick={onClickOpenSelectModal}>
          <li>{el.member.name}</li>
          <li>
            {getDate(el.startingPoint)} - {getDate(el.expirationDate)}
          </li>
          <li>{el.vacationAll}</li>
          <li>{el.useVacation}</li>
          <li>{el.vacationAll - el.useVacation || 0}</li>
        </S.EmployeeUl>
      ));
    } else if (init && filterInit) {
      console.log('on and on');
      console.log(baseDate);

      return vBase?.fetchVacationIssueBaseDate.flat().map((el) => (
        <S.EmployeeUl key={el.id} onClick={onClickOpenSelectModal}>
          <li>{el.member.name}</li>
          <li>
            {getDate(el.startingPoint)} - {getDate(el.expirationDate)}
          </li>
          <li>{el.vacationAll}</li>
          <li>{el.useVacation}</li>
          <li>{el.vacationAll - el.useVacation || 0}</li>
        </S.EmployeeUl>
      ));
    } else {
      console.log('on and off');
      return vBaseDelete?.fetchVacationIssueWithBaseDateDelete
        .flat()
        .map((el) => (
          <S.EmployeeUl key={el.id} onClick={onClickOpenSelectModal}>
            <li>{el.member.name}</li>
            <li>
              {getDate(el.startingPoint)} - {getDate(el.expirationDate)}
            </li>
            <li>{el.vacationAll}</li>
            <li>{el.useVacation}</li>
            <li>{el.vacationAll - el.useVacation || 0}</li>
          </S.EmployeeUl>
        ));
    }
  };

  return (
    <LeaveAccrualsPresenter
      optionalFetch={optionalFetch}
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
      onClickOpenList={onClickOpenList}
      isMemberOpen={isMemberOpen}
      onClickCloseList={onClickCloseList}
      setValue={setValue}
    />
  );
};

export default LeaveAccrualsContainer;
