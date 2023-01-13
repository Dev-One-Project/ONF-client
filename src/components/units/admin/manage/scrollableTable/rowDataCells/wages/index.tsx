import * as S from '..';
import { IWorkInfo } from '../../../../../../../commons/types/generated/types';

const WageData = (props: { data?: IWorkInfo }) => {
  return (
    <>
      <S.Td>{props.data?.name}</S.Td>
      <S.Td>{'시급'}</S.Td>
      <S.Td>{props.data?.fixedLabor}</S.Td>
      <S.Td>{props.data?.weekOffDays}</S.Td>
      <S.Td>{`${props.data?.fixedUnitPeriod ?? ''} ${
        props.data?.fixedPeriodRange ?? ''
      } 평균 ${props.data?.fixedStandard ?? ''} ${
        props.data?.fixedHours ?? ''
      }`}</S.Td>
      <S.Td>{`${props.data?.maximumUnitPeriod ?? ''} ${
        props.data?.maximumPeriodRange ?? ''
      } 평균 ${props.data?.maximumStandard ?? ''} ${
        props.data?.maximumHours ?? ''
      }시간`}</S.Td>
      <S.Td>{props.data?.memo}</S.Td>
    </>
  );
};

export default WageData;
