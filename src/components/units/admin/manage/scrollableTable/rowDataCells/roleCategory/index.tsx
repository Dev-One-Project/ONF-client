import styled from '@emotion/styled';
import { IRoleCategory } from '../../../../../../../commons/types/generated/types';

interface IStyle {
  color?: string;
}

const RoleCategoryData = (props: { data?: IRoleCategory }) => {
  return (
    <>
      <Td>{props.data?.name}</Td>
      <Td>
        <ColorBox color={props.data?.colorCode}></ColorBox>
      </Td>
      <Td>{props.data?.memo}</Td>
    </>
  );
};

export default RoleCategoryData;

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
