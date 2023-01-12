import { useRef } from 'react';
import Btn01 from '../button/btn01';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { gql, useQuery } from '@apollo/client';
import { styleSet } from '../../../commons/styles/styleSet';
import WriteContainer from '../notice/write/write.container';
import NoticeListContainer from '../notice/list/list.container';
import {
  changeNoticeBoardIdState,
  isNoticeEditState,
  isNoticeModalState,
  isNoticeWriteState,
} from '../../../commons/store';

const FETCH_ALL_NOTICE_BOARDS = gql`
  query fetchAllNoticeBoards {
    fetchAllNoticeBoards {
      id
    }
  }
`;

const NoticeModal = () => {
  const createUpdateRef = useRef<HTMLButtonElement>();
  const [, setIsEdit] = useRecoilState(isNoticeEditState);
  const [isOpen, setIsOpen] = useRecoilState(isNoticeModalState);
  const [, setBoardId] = useRecoilState(changeNoticeBoardIdState);
  const [isWrite, setIsWrite] = useRecoilState(isNoticeWriteState);
  const { data: fetchAllNoticeBoards } = useQuery(FETCH_ALL_NOTICE_BOARDS);

  const onClickOpen = () => {
    if (fetchAllNoticeBoards?.fetchAllNoticeBoards[0]?.id) {
      setIsOpen((open) => !open);
      setBoardId(fetchAllNoticeBoards.fetchAllNoticeBoards[0]?.id);
    } else {
      setIsOpen((open) => !open);
    }
  };
  const onClickWrite = () => {
    setIsWrite((write) => !write);
    setIsEdit({ edit: false, boardId: '' });
  };
  const onClickComplete = () => {
    createUpdateRef.current?.click();
    onClickWrite();
  };

  return (
    <>
      {isOpen && (
        <Background
          onClick={(e) => {
            e.stopPropagation();
            const target = e.target as HTMLDivElement;
            const className =
              target.className !== null ? String(target.className) : '';
            if (className.includes('backgroud')) onClickOpen();
          }}
          className="backgroud"
        >
          <Container>
            {!isWrite && <NoticeListContainer />}
            {isWrite && <WriteContainer createUpdateRef={createUpdateRef} />}
            <BtnWrapper>
              {isWrite && (
                <Btn01
                  text="작성완료"
                  onClick={onClickComplete}
                  bdC={styleSet.colors.gray}
                />
              )}
              <Btn01
                text={`${isWrite ? '취소' : '글쓰기'}`}
                onClick={onClickWrite}
                bdC={styleSet.colors.gray}
              />
              <Btn01
                text="닫기"
                onClick={onClickOpen}
                bdC={styleSet.colors.gray}
              />
            </BtnWrapper>
          </Container>
        </Background>
      )}
      <Btn01 text="전체보기" onClick={onClickOpen} />
    </>
  );
};

export default NoticeModal;

const Container = styled.section`
  padding: 1rem 0 1rem 0;
  width: 90%;
  min-width: 850px;
  height: 80%;
  text-align: left;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1040;
`;

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1039;
  backdrop-filter: blur(4px);
`;

const BtnWrapper = styled.div`
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
