import * as S from '..';
import { IMember } from '../../../../../../../commons/types/generated/types';
import { getDate } from '../../../../../../../commons/utils/getDate';

const MemberData = (props: { data?: IMember }) => {
  return (
    <>
      <S.Td>{props.data?.name}</S.Td>
      {/* <S.Td>{props.data?.accessAuth ?? ''}</S.Td> */}
      <S.Td>{'개발 예정'}</S.Td>
      <S.Td>{props.data?.joinDate ? getDate(props.data?.joinDate) : ''}</S.Td>
      <S.Td>{props.data?.organization?.name}</S.Td>
      <S.Td>{props.data?.roleCategory?.name}</S.Td>
      <S.Td>{props.data?.workInfo?.name ?? '개발 예정'}</S.Td>
      <S.Td>{'₩ 9,620'}</S.Td>
      <S.Td>
        {props.data?.workInfo
          ? `${String(props.data?.workInfo?.fixedUnitPeriod)} ${String(
              props.data?.workInfo?.fixedPeriodRange,
            )} 평균 ${String(props.data?.workInfo?.fixedStandard)} ${String(
              props.data?.workInfo?.fixedHours,
            )}`
          : '개발 예정'}
      </S.Td>
      <S.Td>
        {props.data?.workInfo
          ? `${String(props.data?.workInfo?.maximumUnitPeriod)} ${String(
              props.data?.workInfo?.maximumPeriodRange,
            )} 평균 ${String(props.data?.workInfo?.maximumStandard)} ${String(
              props.data?.workInfo?.maximumHours,
            )}`
          : '개발 예정'}
      </S.Td>
      {/* <S.Td>{props.data?.appliedFrom ?? '개발 예정'}</S.Td> */}
      <S.Td>{'개발 예정'}</S.Td>
      <S.Td style={{ paddingLeft: '2.2rem' }}>
        {props.data?.isJoin ? 'O' : 'X'}
      </S.Td>
      <S.Td>{props.data?.memo}</S.Td>
    </>
  );
};

export default MemberData;
