import { useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { changeNoticeBoardIdState } from '../../../../commons/store';
import NoticeListPresenter from './list.presenter';
import { FETCH_ALL_NOTICE_BOARDS } from './list.queries';

const NoticeListContainer = () => {
  const { data: fetchAllNoticeBoards } = useQuery(FETCH_ALL_NOTICE_BOARDS);
  const [boardId, setBoardId] = useRecoilState(changeNoticeBoardIdState);

  const onClickBoard = (id: string) => () => {
    setBoardId(id);
  };

  return (
    <NoticeListPresenter
      fetchAllNoticeBoards={fetchAllNoticeBoards?.fetchAllNoticeBoards}
      onClickBoard={onClickBoard}
      boardId={boardId}
    />
  );
};

export default NoticeListContainer;
