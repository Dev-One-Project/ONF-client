import styled from '@emotion/styled';

interface ITableThProps {
  list: object[];
}

interface IElement {
  id?: number;
  name?: string;
}

const TableTh = ({ list }: ITableThProps) => {
  return (
    <Wrapper>
      {list.map((el: IElement, i) => (
        <Th key={i}>{el.name}</Th>
      ))}
    </Wrapper>
  );
};

export default TableTh;

const Wrapper = styled.thead`
  vertical-align: bottom;
  border-bottom: 2px solid #d8dfe8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Th = styled.th`
  padding: 0.6rem;
  font-weight: 600;
  color: #464a52;
`;
