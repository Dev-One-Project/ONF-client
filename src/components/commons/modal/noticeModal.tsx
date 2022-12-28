import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { styleSet } from '../../../commons/styles/styleSet';
import Btn01 from '../button/btn01';
import NoticeListContainer from '../notice/list/list.container';
import WriteContainer from '../notice/write/write.container';

const NoticeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWrite, setIsWrite] = useState(false);
  const createUpdateRef = useRef<HTMLButtonElement>();

  const onClickOpen = () => {
    setIsOpen((open) => !open);
  };
  const onClickWrite = () => {
    setIsWrite((write) => !write);
    createUpdateRef.current?.click();
  };

  return (
    <>
      {isOpen && (
        <Background>
          <Container>
            {!isWrite && <NoticeListContainer />}
            {isWrite && <WriteContainer createUpdateRef={createUpdateRef} />}
            <BtnWrapper>
              {isWrite && (
                <Btn01
                  text="작성완료"
                  onClick={onClickWrite}
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
  z-index: 10000;
`;

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

const BtnWrapper = styled.div`
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
