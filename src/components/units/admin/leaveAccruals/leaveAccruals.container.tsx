import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  IQuery,
  IQueryFetchOrganizationsArgs,
  IQueryFetchVacationIssueBaseDateArgs,
  IQueryFetchVacationIssuesArgs,
  IQueryFetchVacationIssueWithBaseDateDeleteArgs,
} from '../../../../commons/types/generated/types';
import { getDate } from '../../../../commons/utils/getDate';
import LeaveAccrualsPresenter from './leaveAccruals.presenter';
import {
  FETCH_ORGANIZATIONS,
  FETCH_V_ISSUES,
  FETCH_V_I_BASE_DATE,
  FETCH_V_I_BASE_DATE_DELETE,
  FETCH_V_I_DELETE,
} from './leaveAccruals.queries';
import * as S from './leaveAccruals.styles';

const LeaveAccrualsContainer = () => {
  const { register, handleSubmit } = useForm();

  const [isSelect, setIsSelect] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [baseDate, setBaseDate] = useState(new Date());
  const [startEndDate, setStartEndDate] = useState([
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  ]);

  const [init, setInit] = useState(true);
  const [filterInit, setFilterInit] = useState(true);

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
  };

  const onClickEmployee = () => {
    setIsSelect(true);
  };

  const onClickList = () => {
    setIsSelect(false);
  };

  const onSubmit = (data: any) => {
    if (data) {
      console.log(data);
      setAniMode(false);
    }
  };

  const onChangeDate = (value: any) => {
    if (value === null) return;
    setBaseDate(new Date(value.$d));
  };

  const onChangeStartEndDate = (value: any) => {
    setStartEndDate([value[0].$d, value[1].$d]);
  };

  const { data } = useQuery<
    Pick<IQuery, 'fetchVacationIssues'>,
    IQueryFetchVacationIssuesArgs
  >(FETCH_V_ISSUES, {
    variables: { companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998' },
  });

  const { data: organizations } = useQuery<
    Pick<IQuery, 'fetchOrganizations'>,
    IQueryFetchOrganizationsArgs
  >(FETCH_ORGANIZATIONS, {
    variables: { companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998' },
  });

  const { data: vDelete } =
    useQuery<Pick<IQuery, 'fetchVacationIssueWithDelete'>>(FETCH_V_I_DELETE);

  const { data: vBaseDate } = useQuery<
    Pick<IQuery, 'fetchVacationIssueBaseDate'>,
    IQueryFetchVacationIssueBaseDateArgs
  >(FETCH_V_I_BASE_DATE, {
    variables: { baseDate, companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998' },
  });

  const { data: vBaseDateDelete } = useQuery<
    Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>,
    IQueryFetchVacationIssueWithBaseDateDeleteArgs
  >(FETCH_V_I_BASE_DATE_DELETE, {
    variables: { baseDate, companyId: '00b9f2a4-86e7-4071-9b69-35163bdd8998' },
  });

  const organizationsData = organizations?.fetchOrganizations.map(
    (el) => el.name,
  );

  const optionalFetch = () => {
    if (!init && !filterInit) {
      console.log('off and off');
      return data?.fetchVacationIssues.map((el) => (
        <S.EmployeeUl key={el.id}>
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
      return vDelete?.fetchVacationIssueWithDelete.map((el) => (
        <S.EmployeeUl key={el.id}>
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
      return vBaseDateDelete?.fetchVacationIssueWithBaseDateDelete
        .flat()
        .map((el) => (
          <S.EmployeeUl key={el.id}>
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
      return vBaseDate?.fetchVacationIssueBaseDate.flat().map((el) => (
        <S.EmployeeUl key={el.id}>
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
      data={data}
      organizationsData={organizationsData}
      init={init}
      setInit={setInit}
      filterInit={filterInit}
      setFilterInit={setFilterInit}
      onChangeDate={onChangeDate}
      onChangeStartEndDate={onChangeStartEndDate}
    />
  );
};

export default LeaveAccrualsContainer;
