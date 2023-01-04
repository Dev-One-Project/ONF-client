import * as S from './list.styles';
import NoticeDetail from './list.presenterDetail';
import { getStaticDateStr } from '../../../../commons/utils/getDate';
import { FetchAllNoticeBoards, INoticeListPresenterProps } from './list.types';

const NoticeListPresenter = (props: INoticeListPresenterProps) => {
  return (
    <>
      <S.H2>공지사항</S.H2>
      <S.Container>
        <S.ColWrapper right={true}>
          <S.ListUl>
            {(
              props.fetchAllNoticeBoards as unknown as FetchAllNoticeBoards[]
            )?.map((board, i) => (
              <li key={i} onClick={props.onClickBoard(board.id)}>
                <S.Preface>{board.preface}</S.Preface>
                <span>{board.title}</span>
                <S.DateStyle>{getStaticDateStr(board.createdAt)}</S.DateStyle>
              </li>
            ))}
          </S.ListUl>
        </S.ColWrapper>
        <S.ColWrapper right={false}>
          <NoticeDetail boardId={props.boardId} />
        </S.ColWrapper>
      </S.Container>
    </>
  );
};

export default NoticeListPresenter;
