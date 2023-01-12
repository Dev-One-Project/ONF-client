import { useQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import {
  changeNoticeBoardIdState,
  isNoticeModalState,
} from '../../../../commons/store';
import HomePresenter from './home.presenter';
import {
  FETCH_ALL_NOTICE_BOARDS,
  FETCH_MAINPAGE_WORK_CHECK,
} from './home.queries';

const HomeContainer = () => {
  const { data: fetchAllNoticeBoards } = useQuery(FETCH_ALL_NOTICE_BOARDS);
  const { data: fetchMainPageWorkCheck } = useQuery(FETCH_MAINPAGE_WORK_CHECK);
  const [, setIsOpen] = useRecoilState(isNoticeModalState);
  const [, setBoardId] = useRecoilState(changeNoticeBoardIdState);

  const onClickNoticeBoard = (id: string) => () => {
    setIsOpen((open) => !open);
    setBoardId(id);
  };

  return (
    <HomePresenter
      onClickNoticeBoard={onClickNoticeBoard}
      fetchAllNoticeBoards={fetchAllNoticeBoards?.fetchAllNoticeBoards}
      fetchMainPageWorkCheck={fetchMainPageWorkCheck?.fetchMainPageWorkCheck}
    />
  );
};

export default HomeContainer;
