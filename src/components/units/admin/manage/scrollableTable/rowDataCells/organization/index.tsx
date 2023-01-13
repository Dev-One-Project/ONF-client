import * as S from '..';
import { IOrganization } from '../../../../../../../commons/types/generated/types';

const OrganizationData = (props: { data?: IOrganization }) => {
  return (
    <>
      <S.Td>{props.data?.name}</S.Td>
      <S.Td></S.Td>
      <S.Td>{props.data?.address}</S.Td>
      <S.Td>
        ({Number(props.data?.lat).toFixed(5)},{' '}
        {Number(props.data?.lng).toFixed(5)}) [반경m]
      </S.Td>
      <S.Td>{'와이파이 주소'}</S.Td>
      <S.Td>{props.data?.description}</S.Td>
    </>
  );
};

export default OrganizationData;
