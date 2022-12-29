import { useRef, useState } from 'react';
import Btn01 from '../button/btn01';
import styled from '@emotion/styled';
import { CloseOutlined } from '@ant-design/icons';
import { styleSet } from '../../../commons/styles/styleSet';
import RequestReviewContainer from '../../units/user/requestReview/requestReview.container';

const RequestModal = (props: IRequestModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const requestBtnRef = useRef<HTMLButtonElement>();
  const onClickOpen = () => {
    setIsOpen((open) => !open);
  };
  const onClickRequest = () => {
    setIsOpen((open) => !open);
    requestBtnRef.current?.click();
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
            <Top>
              <H3>요청사항 검토</H3>
              <button onClick={onClickOpen}>
                <CloseOutlined />
              </button>
            </Top>
            <RequestReviewContainer
              isWorking={props.isWorking}
              requestBtnRef={requestBtnRef}
            />
            <BtnWrapper>
              <Btn01
                text="닫기"
                onClick={onClickOpen}
                bdC={styleSet.colors.gray}
              />
              <Btn01
                text="보내기"
                onClick={onClickRequest}
                color={styleSet.colors.white}
                bgC={styleSet.colors.primary}
              />
            </BtnWrapper>
          </Container>
        </Background>
      )}
      <Btn01
        text="다음: 요청내역 검토"
        onClick={onClickOpen}
        bgC={`${styleSet.colors.primary}`}
        color={`${styleSet.colors.white}`}
      />
    </>
  );
};

export default RequestModal;

interface IRequestModalProps {
  isWorking?: boolean;
}

const Container = styled.section`
  padding: 1rem 0 1rem 0;
  width: 80%;
  max-width: 800px;
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

const Top = styled.div`
  padding: 0 1.5rem 1rem 1.5rem;
  width: 100%;
  border-bottom: 1px solid ${styleSet.colors.gray};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: ${styleSet.fontSizes.strong};
  font-family: ${styleSet.fonts.EB};
`;

const BtnWrapper = styled.div`
  padding: 1rem 1em 0 0;
  width: 100%;
  border-top: 1px solid ${styleSet.colors.gray};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
`;
