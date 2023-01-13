import * as S from '..';
import { IScheduleTemplate } from '../../../../../../../commons/types/generated/types';

const ScheduleTemplateData = (props: { data?: IScheduleTemplate }) => {
  return (
    <>
      <S.Td>{props.data?.name}</S.Td>
      <S.Td>
        {props.data?.startTime} - {props.data?.endTime}
      </S.Td>
      <S.Td>{props.data?.scheduleCategory?.name}</S.Td>
      <S.Td>{props.data?.organization.map((el) => el.name).join(',')}</S.Td>
      <S.Td>{props.data?.roleCategory.map((el) => el.name).join(',')}</S.Td>
      <S.Td>{props.data?.breakTime}</S.Td>
      <S.Td>
        <S.ColorBox color={props.data?.colorCode}></S.ColorBox>
      </S.Td>
      <S.Td>{props.data?.memo}</S.Td>
    </>
  );
};

export default ScheduleTemplateData;
