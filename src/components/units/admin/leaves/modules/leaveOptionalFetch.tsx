import {
  IQuery,
  IVacation,
} from '../../../../../commons/types/generated/types';
import { getDateLeave } from '../../../../../commons/utils/getDate';
import Check01 from '../../../../commons/input/check01';
import * as S from '../leaves.styles';

interface ILeaveOptionalFetchProps {
  filterInit: boolean;
  onClickList: () => void;
  onCheckedElement: (checked: boolean, selectedTarget: IVacation) => void;
  checkedList: IVacation[];
  withDate?: Pick<IQuery, 'fetchVacationWithDate'>;
  withDelete?: Pick<IQuery, 'fetchVacationWithDelete'>;
}

const LeaveOptionalFetch = (props: ILeaveOptionalFetchProps) => {
  const leaveOptionalFetch = () => {
    if (props.filterInit) {
      return props.withDate?.fetchVacationWithDate.flat().map((fetchData) => (
        <S.Ul onClick={props.onClickList} key={fetchData.id}>
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
          <li>{fetchData.member?.name}</li>
          <li>
            {getDateLeave(
              fetchData.vacationStartDate,
              fetchData.vacationEndDate,
            )}
          </li>
          <li>{fetchData.vacationCategory?.name}</li>
          <li>{`${String(fetchData.vacationCategory?.paidTime)}h`}</li>
          <li>{`${String(fetchData.vacationCategory?.deductionDays)}일`}</li>
          <li>{fetchData.description}</li>
        </S.Ul>
      ));
    } else {
      return props.withDelete?.fetchVacationWithDelete
        .flat()
        .map((fetchData) => (
          <S.Ul onClick={props.onClickList} key={fetchData.id}>
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
            <li>{fetchData.member?.name}</li>
            <li>
              {getDateLeave(
                fetchData.vacationStartDate,
                fetchData.vacationEndDate,
              )}
            </li>
            <li>{fetchData.vacationCategory?.name}</li>
            <li>{`${String(fetchData.vacationCategory?.paidTime)}h`}</li>
            <li>{`${String(fetchData.vacationCategory?.deductionDays)}일`}</li>
            <li>{fetchData.description}</li>
          </S.Ul>
        ));
    }
  };
  return <>{leaveOptionalFetch()}</>;
};

export default LeaveOptionalFetch;
