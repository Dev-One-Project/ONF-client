import { MouseEvent } from 'react';
import { IQuery } from '../../../../../commons/types/generated/types';
import { getDate } from '../../../../../commons/utils/getDate';
import * as S from '../leaveAccruals.styles';

interface IEmployeeOptionalFetchProps {
  init: boolean;
  filterInit: boolean;
  vDetailDelete?: Pick<IQuery, 'fetchVacationIssueDetailDateDelete'>;
  vDetail?: Pick<IQuery, 'fetchVacationIssueDetailDate'>;
  vBase?: Pick<IQuery, 'fetchVacationIssueBaseDate'>;
  vBaseDelete?: Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>;
  onClickOpenSelectModal: (e: MouseEvent<HTMLUListElement>) => void;
}

const EmployeeOptionalFetch = (props: IEmployeeOptionalFetchProps) => {
  const optionalFetch = () => {
    if (!props.init && !props.filterInit) {
      return props.vDetailDelete?.fetchVacationIssueDetailDateDelete
        .flat()
        .map((fetchData) => (
          <S.EmployeeUl
            key={fetchData.id}
            onClick={props.onClickOpenSelectModal}
            id={fetchData.member.id}
          >
            <li>{fetchData.member.name}</li>
            <li>
              {getDate(fetchData.startingPoint)} -{' '}
              {getDate(fetchData.expirationDate)}
            </li>
            <li>{fetchData.vacationAll}</li>
            <li>{fetchData.useVacation}</li>
            <li>{fetchData.remaining}</li>
          </S.EmployeeUl>
        ));
    } else if (!props.init && props.filterInit) {
      return props.vDetail?.fetchVacationIssueDetailDate
        .flat()
        .map((fetchData) => (
          <S.EmployeeUl
            key={fetchData.id}
            onClick={props.onClickOpenSelectModal}
            id={fetchData.member.id}
          >
            <li>{fetchData.member.name}</li>
            <li>
              {getDate(fetchData.startingPoint)} -{' '}
              {getDate(fetchData.expirationDate)}
            </li>
            <li>{fetchData.vacationAll}</li>
            <li>{fetchData.useVacation}</li>
            <li>{fetchData.remaining}</li>
          </S.EmployeeUl>
        ));
    } else if (props.init && props.filterInit) {
      return props.vBase?.fetchVacationIssueBaseDate.flat().map((fetchData) => (
        <S.EmployeeUl
          key={fetchData.id}
          onClick={props.onClickOpenSelectModal}
          id={fetchData.member.id}
        >
          <li>{fetchData.member.name}</li>
          <li>
            {getDate(fetchData.startingPoint)} -{' '}
            {getDate(fetchData.expirationDate)}
          </li>
          <li>{fetchData.vacationAll}</li>
          <li>{fetchData.useVacation}</li>
          <li>{fetchData.remaining}</li>
        </S.EmployeeUl>
      ));
    } else {
      return props.vBaseDelete?.fetchVacationIssueWithBaseDateDelete
        .flat()
        .map((fetchData) => (
          <S.EmployeeUl
            key={fetchData.id}
            onClick={props.onClickOpenSelectModal}
            id={fetchData.member.id}
          >
            <li>{fetchData.member.name}</li>
            <li>
              {getDate(fetchData.startingPoint)} -{' '}
              {getDate(fetchData.expirationDate)}
            </li>
            <li>{fetchData.vacationAll}</li>
            <li>{fetchData.useVacation}</li>
            <li>{fetchData.remaining}</li>
          </S.EmployeeUl>
        ));
    }
  };
  return <>{optionalFetch()}</>;
};

export default EmployeeOptionalFetch;
