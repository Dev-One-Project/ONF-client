import styled from '@emotion/styled';
import { IScheduleCategory } from '../../../../../../../commons/types/generated/types';

interface IStyle {
  color?: string;
}

const ScheduleCategoryData = (props: { data?: IScheduleCategory }) => {
  return (
    <>
      <Td>{props.data?.name}</Td>
      <Td>
        <ColorBox color={props.data?.color}></ColorBox>
      </Td>
      <Td>{props.data?.isOvertime ? 'O' : 'X'}</Td>
      <Td>{props.data?.isNotHolidayWork ? 'O' : 'X'}</Td>
      <Td>{props.data?.memo}</Td>
    </>
  );
};

export default ScheduleCategoryData;

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
