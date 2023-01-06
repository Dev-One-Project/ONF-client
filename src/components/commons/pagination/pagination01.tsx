import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { styleSet } from '../../../commons/styles/styleSet';

interface IPagination01Props {
  total: number | undefined;
  page: number;
  limit: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination01 = (props: IPagination01Props) => {
  if (!props.total) return <></>;
  const numPages = Math.ceil(props.total / props.limit);

  return (
    <>
      <Nav>
        <Btn
          onClick={() => props.setPage(props.page - 1)}
          disabled={props.page === 1}
        >
          &lt;
        </Btn>
        {Array(numPages)
          .fill(0)
          .map((_, i) => (
            <Btn
              key={i + 1}
              onClick={() => props.setPage(i + 1)}
              aria-current={props.page === i + 1 ? true : undefined}
            >
              {i + 1}
            </Btn>
          ))}
        <Btn
          onClick={() => props.setPage(props.page + 1)}
          disabled={props.page === numPages}
        >
          &gt;
        </Btn>
      </Nav>
    </>
  );
};

export default Pagination01;

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Btn = styled.button`
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
  margin: 0;
  font-size: 1rem;

  &:hover {
    /* background: ${styleSet.colors.subColor01}; */
    font-family: ${styleSet.fonts.EB};
    cursor: pointer;
  }

  &[disabled] {
    color: ${styleSet.colors.gray};
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: ${styleSet.colors.primary};
    color: ${styleSet.colors.white};
    font-family: ${styleSet.fonts.EB};
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
