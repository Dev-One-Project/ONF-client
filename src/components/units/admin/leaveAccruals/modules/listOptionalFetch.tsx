import { MouseEvent } from 'react';
import {
  IQuery,
  IVacationIssue,
} from '../../../../../commons/types/generated/types';
import { getDate } from '../../../../../commons/utils/getDate';
import Check01 from '../../../../commons/input/check01';
import * as S from '../leaveAccruals.styles';

interface IEmployeeOptionalFetchProps {
  init: boolean;
  filterInit: boolean;
  vDetailDelete?: Pick<IQuery, 'fetchVacationIssueDetailDateDelete'>;
  vDetail?: Pick<IQuery, 'fetchVacationIssueDetailDate'>;
  vBase?: Pick<IQuery, 'fetchVacationIssueBaseDate'>;
  vBaseDelete?: Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>;
  onClickOpenModal: (e: MouseEvent<HTMLUListElement>) => void;
  onCheckedElement: (checked: boolean, selectedTarget: IVacationIssue) => void;
  checkedList: IVacationIssue[];
}

const ListOptionalFetch = (props: IEmployeeOptionalFetchProps) => {
  const optionalFetch = () => {
    if (!props.init && !props.filterInit) {
      return props.vDetailDelete?.fetchVacationIssueDetailDateDelete
        .flat()
        .map((fetchData) => (
          <S.ListUl
            key={fetchData.id}
            onClick={props.onClickOpenModal}
            id={fetchData.id}
            role={fetchData.member.name}
          >
            <li>
              <Check01
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onChange={(e) =>
                  props.onCheckedElement(e.target.checked, fetchData)
                }
                checked={props.checkedList.includes(fetchData)}
              />
            </li>
            <li>{fetchData.member.name}</li>
            <li>{getDate(fetchData.startingPoint)}</li>
            <li>{getDate(fetchData.expirationDate)}</li>
            <li>{fetchData.vacationAll}</li>
            <li>{fetchData.useVacation}</li>
            <li>{fetchData.remaining}</li>
            <li>{fetchData.description}</li>
          </S.ListUl>
        ));
    } else if (!props.init && props.filterInit) {
      console.log('off on');
      return props.vDetail?.fetchVacationIssueDetailDate
        .flat()
        .map((fetchData) => (
          <S.ListUl
            key={fetchData.id}
            onClick={props.onClickOpenModal}
            id={fetchData.id}
            role={fetchData.member.name}
          >
            <li>
              <Check01
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onChange={(e) =>
                  props.onCheckedElement(e.target.checked, fetchData)
                }
                checked={props.checkedList.includes(fetchData)}
              />
            </li>
            <li>{fetchData.member.name}</li>
            <li>{getDate(fetchData.startingPoint)}</li>
            <li>{getDate(fetchData.expirationDate)}</li>
            <li>{fetchData.vacationAll}</li>
            <li>{fetchData.useVacation}</li>
            <li>{fetchData.remaining}</li>
            <li>{fetchData.description}</li>
          </S.ListUl>
        ));
    } else if (props.init && props.filterInit) {
      return props.vBase?.fetchVacationIssueBaseDate.flat().map((fetchData) => (
        <S.ListUl
          key={fetchData.id}
          onClick={props.onClickOpenModal}
          id={fetchData.id}
          role={fetchData.member.name}
        >
          <li>
            <Check01
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) =>
                props.onCheckedElement(e.target.checked, fetchData)
              }
              checked={props.checkedList.includes(fetchData)}
            />
          </li>
          <li>{fetchData.member.name}</li>
          <li>{getDate(fetchData.startingPoint)}</li>
          <li>{getDate(fetchData.expirationDate)}</li>
          <li>{fetchData.vacationAll}</li>
          <li>{fetchData.useVacation}</li>
          <li>{fetchData.remaining}</li>
          <li>{fetchData.description}</li>
        </S.ListUl>
      ));
    } else {
      return props.vBaseDelete?.fetchVacationIssueWithBaseDateDelete
        .flat()
        .map((fetchData) => (
          <S.ListUl
            key={fetchData.id}
            onClick={props.onClickOpenModal}
            id={fetchData.id}
            role={fetchData.member.name}
          >
            <li>
              <Check01
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onChange={(e) =>
                  props.onCheckedElement(e.target.checked, fetchData)
                }
                checked={props.checkedList.includes(fetchData)}
              />
            </li>
            <li>{fetchData.member.name}</li>
            <li>{getDate(fetchData.startingPoint)}</li>
            <li>{getDate(fetchData.expirationDate)}</li>
            <li>{fetchData.vacationAll}</li>
            <li>{fetchData.useVacation}</li>
            <li>{fetchData.remaining}</li>
            <li>{fetchData.description}</li>
          </S.ListUl>
        ));
    }
  };
  return <>{optionalFetch()}</>;
};

export default ListOptionalFetch;
