import styled from '@emotion/styled';
import { IMember } from '../../../../../../../commons/types/generated/types';
import { getDate } from '../../../../../../../commons/utils/getDate';

const MemberData = (props: { data?: IMember }) => {
  return (
    <>
      <Td>{props.data?.name}</Td>
      {/* <Td>{props.data?.accessAuth ?? ''}</Td> */}
      <Td>{'개발 예정'}</Td>
      <Td>{props.data?.joinDate ? getDate(props.data?.joinDate) : ''}</Td>
      <Td>{props.data?.organization?.name}</Td>
      <Td>{props.data?.roleCategory?.duty}</Td>
      {/* <Td>{props.data?.workInfo?.name ?? '개발 예정'}</Td> */}
      <Td>{'개발 예정'}</Td>
      <Td>{'₩ 9,620'}</Td>
      {/* <Td>{props.data?.fixedLaborRules ?? '개발 예정'}</Td> */}
      <Td>{'개발 예정'}</Td>
      {/* <Td>{props.data?.maximumLaborRules ?? '개발 예정'}</Td> */}
      <Td>{'개발 예정'}</Td>
      {/* <Td>{props.data?.appliedDate ?? '개발 예정'}</Td> */}
      <Td>{'개발 예정'}</Td>
      <Td style={{ paddingLeft: '2.2rem' }}>
        {props.data?.isJoin ? 'O' : 'X'}
      </Td>
    </>
  );
};

export default MemberData;

const Td = styled.td`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  min-width: 100px;
`;
