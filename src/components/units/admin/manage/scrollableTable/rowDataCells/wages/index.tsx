import styled from '@emotion/styled';

const WageData = (props: { data?: any }) => {
  return (
    <>
      <Td>{'개발중'}</Td>
      <Td>{'개발중'}</Td>
      <Td>{'개발중'}</Td>
      <Td>{'개발중'}</Td>
      <Td>{'개발중'}</Td>
      <Td>{'개발중'}</Td>
      <Td>{'개발중'}</Td>
    </>
  );
};

export default WageData;

const Td = styled.td`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  min-width: 100px;
`;
