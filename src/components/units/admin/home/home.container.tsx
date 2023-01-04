import { useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import {
  changeNoticeBoardIdState,
  isNoticeModalState,
} from '../../../../commons/store';
import HomePresenter from './home.presenter';
import { FETCH_ALL_NOTICE_BOARDS } from './home.queries';

const HomeContainer = () => {
  const { data: fetchAllNoticeBoards } = useQuery(FETCH_ALL_NOTICE_BOARDS);
  const [, setIsOpen] = useRecoilState(isNoticeModalState);
  const [, setBoardId] = useRecoilState(changeNoticeBoardIdState);

  const onClickNoticeBoard = (id: string) => () => {
    setIsOpen((open) => !open);
    setBoardId(id);
  };

  return (
    <HomePresenter
      fetchAllNoticeBoards={fetchAllNoticeBoards?.fetchAllNoticeBoards}
      onClickNoticeBoard={onClickNoticeBoard}
    />
  );
};

export default HomeContainer;
