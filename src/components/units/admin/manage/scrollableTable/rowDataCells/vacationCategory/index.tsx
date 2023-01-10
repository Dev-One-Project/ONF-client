import styled from '@emotion/styled';
import { IVacationCategory } from '../../../../../../../commons/types/generated/types';
const VacationCategoryData = (props: { data?: IVacationCategory }) => {
  return (
    <>
      <Td>{props.data?.name}</Td>
      <Td>{props.data?.organization.name}</Td>
      <Td>{props.data?.roleCategory.name}</Td>
      <Td>{props.data?.timeOption}</Td>
      <Td>{props.data?.paidTime}h</Td>
      <Td>{props.data?.deductionDays}</Td>
      <Td>{props.data?.memo}</Td>
    </>
  );
};

export default VacationCategoryData;

const Td = styled.td`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  min-width: 100px;
`;
