import * as S from '..';
import { IScheduleCategory } from '../../../../../../../commons/types/generated/types';

const ScheduleCategoryData = (props: { data?: IScheduleCategory }) => {
  return (
    <>
      <S.Td>{props.data?.name}</S.Td>
      <S.Td>
        <S.ColorBox color={props.data?.color}></S.ColorBox>
      </S.Td>
      <S.Td>{props.data?.isOvertime ? 'O' : 'X'}</S.Td>
      <S.Td>{props.data?.isNotHolidayWork ? 'O' : 'X'}</S.Td>
      <S.Td>{props.data?.memo}</S.Td>
    </>
  );
};

export default ScheduleCategoryData;
