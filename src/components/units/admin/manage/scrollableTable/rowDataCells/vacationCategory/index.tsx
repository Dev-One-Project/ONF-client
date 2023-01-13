import * as S from '..';
import { IVacationCategory } from '../../../../../../../commons/types/generated/types';
const VacationCategoryData = (props: { data?: IVacationCategory }) => {
  console.log('?', props.data);
  return (
    <>
      <S.Td>{props.data?.name}</S.Td>
      <S.Td>{props.data?.organization?.name ?? '모든 지점'}</S.Td>
      <S.Td>{props.data?.roleCategory?.name ?? '모든 직무'}</S.Td>
      <S.Td>{props.data?.timeOption}</S.Td>
      <S.Td>{props.data?.paidTime}h</S.Td>
      <S.Td>{props.data?.deductionDays}</S.Td>
      <S.Td>{props.data?.memo}</S.Td>
    </>
  );
};

export default VacationCategoryData;
