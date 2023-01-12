import styled from '@emotion/styled';
import { IWorkInfo } from '../../../../../../../commons/types/generated/types';

const WageData = (props: { data?: IWorkInfo }) => {
  return (
    <>
      <Td>{props.data?.name}</Td>
      <Td>{'시급'}</Td>
      <Td>{props.data?.fixedLabor}</Td>
      <Td>{props.data?.weekOffDays}</Td>
      <Td>{`${props.data?.fixedUnitPeriod ?? ''} ${
        props.data?.fixedPeriodRange ?? ''
      } 평균 ${props.data?.fixedStandard ?? ''} ${
        props.data?.fixedHours ?? ''
      }`}</Td>
      <Td>{`${props.data?.maximumUnitPeriod ?? ''} ${
        props.data?.maximumPeriodRange ?? ''
      } 평균 ${props.data?.maximumStandard ?? ''} ${
        props.data?.maximumHours ?? ''
      }시간`}</Td>
      <Td>{props.data?.memo}</Td>
    </>
  );
};

export default WageData;

const Td = styled.td`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  min-width: 100px;
`;
