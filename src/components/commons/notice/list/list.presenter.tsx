import * as S from './list.styles';
import NoticeDetail from './list.presenterDetail';
import { getStaticDateStr } from '../../../../commons/utils/getDate';
import { FetchAllNoticeBoards, INoticeListPresenterProps } from './list.types';
import Pagination01 from '../../pagination/pagination01';

const NoticeListPresenter = (props: INoticeListPresenterProps) => {
  return (
    <>
      <S.H2>공지사항</S.H2>
      <S.Container>
        <S.ColWrapper right={true}>
          <S.ListUl>
            {(props.boards as unknown as FetchAllNoticeBoards[])
              ?.slice(props.offset, props.offset + props.limit)
              .map((board, i) => (
                <li key={i} onClick={props.onClickBoard(board.id)}>
                  <S.Preface>{board.preface}</S.Preface>
                  <S.ListTitle>{board.title}</S.ListTitle>
                  <S.DateStyle>{getStaticDateStr(board.createdAt)}</S.DateStyle>
                </li>
              ))}
          </S.ListUl>
          <Pagination01
            total={props.boards?.length}
            limit={props.limit}
            page={props.page}
            setPage={props.setPage}
          />
        </S.ColWrapper>
        <S.ColWrapper right={false}>
          <NoticeDetail boardId={props.boardId} />
        </S.ColWrapper>
      </S.Container>
    </>
  );
};

export default NoticeListPresenter;
