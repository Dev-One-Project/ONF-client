import styled from '@emotion/styled';
import { IScheduleTemplate } from '../../../../../../../commons/types/generated/types';

interface IStyle {
  color?: string;
}

const ScheduleTemplateData = (props: { data?: IScheduleTemplate }) => {
  return (
    <>
      <Td>{props.data?.name}</Td>
      <Td>
        {props.data?.startTime} - {props.data?.endTime}
      </Td>
      <Td>{props.data?.scheduleCategory?.name}</Td>
      <Td>{props.data?.organization.map((el) => el.name).join(',')}</Td>
      <Td>{props.data?.roleCategory.map((el) => el.name).join(',')}</Td>
      <Td>{props.data?.breakTime}</Td>
      <Td>
        <ColorBox color={props.data?.colorCode}></ColorBox>
      </Td>
      <Td>{props.data?.memo}</Td>
    </>
  );
};

export default ScheduleTemplateData;

const Td = styled.td`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  min-width: 100px;
`;

const ColorBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ color }: IStyle) => color};
  border-radius: 0.2rem;
`;
