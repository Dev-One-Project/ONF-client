import * as S from '..';
import { IOrganization } from '../../../../../../../commons/types/generated/types';

const OrganizationData = (props: { data?: IOrganization }) => {
  return (
    <>
      <S.Td>{props.data?.name}</S.Td>
      <S.Td>{props.data?.checkPoint}</S.Td>
      <S.Td>{props.data?.address}</S.Td>
      <S.Td>
        ({Number(props.data?.lat).toFixed(5)},{' '}
        {Number(props.data?.lng).toFixed(5)}) [{props.data?.range}m]
      </S.Td>
      <S.Td>{''}</S.Td>
      <S.Td>{props.data?.description}</S.Td>
    </>
  );
};

export default OrganizationData;
