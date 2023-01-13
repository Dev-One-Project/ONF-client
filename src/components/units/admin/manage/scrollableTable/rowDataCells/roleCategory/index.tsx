import * as S from '..';
import { IRoleCategory } from '../../../../../../../commons/types/generated/types';

const RoleCategoryData = (props: { data?: IRoleCategory }) => {
  return (
    <>
      <S.Td>{props.data?.name}</S.Td>
      <S.Td>
        <S.ColorBox color={props.data?.colorCode}></S.ColorBox>
      </S.Td>
      <S.Td>{props.data?.memo}</S.Td>
    </>
  );
};

export default RoleCategoryData;
