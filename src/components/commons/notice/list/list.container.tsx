import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { changeNoticeBoardIdState } from '../../../../commons/store';
import NoticeListPresenter from './list.presenter';
import { FETCH_ALL_NOTICE_BOARDS } from './list.queries';

const NoticeListContainer = () => {
  const { data: fetchAllNoticeBoards } = useQuery(FETCH_ALL_NOTICE_BOARDS);
  const [boardId, setBoardId] = useRecoilState(changeNoticeBoardIdState);
  const [page, setPage] = useState(1);
  const limit = 13;
  const offset = (page - 1) * limit;

  const onClickBoard = (id: string) => () => {
    setBoardId(id);
  };

  return (
    <NoticeListPresenter
      boards={fetchAllNoticeBoards?.fetchAllNoticeBoards}
      boardId={boardId}
      onClickBoard={onClickBoard}
      page={page}
      limit={limit}
      offset={offset}
      setPage={setPage}
    />
  );
};

export default NoticeListContainer;
