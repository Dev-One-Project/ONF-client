import styled from '@emotion/styled';
import { IOrganization } from '../../../../../../../commons/types/generated/types';

const OrganizationData = (props: { data?: IOrganization }) => {
  return (
    <>
      <Td>{props.data?.name}</Td>
      <Td></Td>
      <Td>{props.data?.address}</Td>
      <Td>
        ({Number(props.data?.lat).toFixed(5)},{' '}
        {Number(props.data?.lng).toFixed(5)}) [반경m]
      </Td>
      <Td>{'와이파이 주소'}</Td>
      <Td>{props.data?.description}</Td>
    </>
  );
};

export default OrganizationData;

const Td = styled.td`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  min-width: 100px;
`;
