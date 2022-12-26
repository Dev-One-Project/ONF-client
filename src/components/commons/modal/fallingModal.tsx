import { CloseOutlined } from '@ant-design/icons';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Divider } from 'antd';
import { MouseEvent, SetStateAction } from 'react';
import { styleSet } from '../../../commons/styles/styleSet';

interface IFallingModalProps {
  children?: JSX.Element;
  title?: string;
  width?: string;
  onCancel?: () => void;
  aniMode: boolean;
  isOpen: boolean;
  setIsOpen: SetStateAction<any>;
}

interface IStyle {
  width?: string;
  aniMode?: boolean;
}

const FallingModal = (props: IFallingModalProps) => {
  const onAnimationEnd = () => {
    if (!props.aniMode) props.setIsOpen(false);
  };

  return (
    <>
      {props.isOpen ? (
        <Wrapper
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            const target = e.target as HTMLDivElement;
            const className =
              target.className !== null ? String(target.className) : '';
            if (className.includes('wrapper')) props.onCancel?.();
          }}
          className="wrapper"
          onAnimationEnd={onAnimationEnd}
          aniMode={props.aniMode}
        >
          <CustomModal
            onAnimationEnd={onAnimationEnd}
            aniMode={props.aniMode}
            width={props.width}
            className="modal"
          >
            <Header>
              <H3>
                {props.title || 'title 속성 문자열로 넣어주세요 아 빨리요;'}
              </H3>
              <CloseBtnBox>
                <button type="button" onClick={props.onCancel}>
                  <CloseOutlined />
                </button>
              </CloseBtnBox>
            </Header>
            <Divider style={{ margin: '0' }} />
            <Body>
              {props.children || (
                <div>
                  <p>커스텀 모달입니다.</p>
                  <p>
                    <code>{'<FallingModal></FallingModal>'}</code>안에 태그
                    넣어서 사용해주세요.
                  </p>
                </div>
              )}
            </Body>
          </CustomModal>
        </Wrapper>
      ) : null}
    </>
  );
};

export default FallingModal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: auto;
  display: flex;
  justify-content: center;
  padding-bottom: 5.5rem;
  z-index: 1040;
  animation: ${(props: IStyle) =>
    props.aniMode
      ? css`
          ${getDark} 0.2s ease-in-out forwards
        `
      : css`
          ${getBright} 0.4s ease-in-out forwards
        `};
`;

const CustomModal = styled.div`
  position: relative;
  top: 2rem;
  height: fit-content;
  background-color: white;

  min-width: ${(props: IStyle) => props.width}px;
  opacity: 0;
  animation: ${(props: IStyle) =>
    props.aniMode
      ? css`
          ${fadeDown} 0.2s ease-in-out 0.2s forwards
        `
      : css`
          ${fadeUp} 0.5s ease-in-out forwards
        `};
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const H3 = styled.h3`
  font-family: ${styleSet.fonts.EB};
`;

const CloseBtnBox = styled.div``;

const Body = styled.div`
  padding: 1rem;
`;

const getDark = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const getBright = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.5);
  }
  50%{
    background-color: rgba(0,0,0,0.5);
  }
  to{
    background-color: transparent;
  }
`;

const fadeDown = keyframes`
  from{
    top: 0;
    opacity: 0;
  }
  to{
    opacity: 1;
    top: 2rem;
  }
`;
const fadeUp = keyframes`
  0%{
    opacity: 1;
    top: 2rem;
  }
  50%{
    opacity: 0;
    top: 0;
  }
  to{
    opacity: 0;
    top: 0;
  }
`;
