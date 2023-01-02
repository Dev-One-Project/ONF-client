import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEvent, SetStateAction } from 'react';

interface IPoppingModalProps {
  children?: JSX.Element;
  isOpen: boolean;
  onCancel?: () => void;
  aniMode: boolean;
  setIsOpen: SetStateAction<any>;
}

interface IStyle {
  width?: string;
  aniMode?: boolean;
}

const PoppingModal = (props: IPoppingModalProps) => {
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
            className="modal"
          >
            <Body>
              {props.children || (
                <div>
                  <p>커스텀 모달입니다.</p>
                  <p>
                    <code>{'<PoppingModal></PoppingModal>'}</code>안에 태그
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

export default PoppingModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5.5rem;
  z-index: 1040;
  animation: ${(props: IStyle) =>
    props.aniMode
      ? css`
          ${getDark} 0.2s ease-in-out forwards
        `
      : css`
          ${getBright} 0.1s ease-in-out forwards
        `};
`;

const Body = styled.div`
  padding: 1rem;
`;

const CustomModal = styled.div`
  position: relative;
  top: 50%;
  max-width: 90%;
  height: fit-content;
  background-color: white;
  opacity: 0;

  animation: ${(props: IStyle) =>
    props.aniMode
      ? css`
          ${fadeDown} 0.2s ease-in-out 0.2s forwards
        `
      : css`
          ${fadeUp} 0.2s ease-in-out forwards
        `};
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
            background-color: rgba(0, 0, 0, 0.5);
        }
        to{
            background-color: transparent;
        }
        `;

const fadeDown = keyframes`
          0%{
              top: 0;
              transform: scale(1.1);
              opacity: 1
            }
            50%{
              top: 0;
                transform: scale(0.9);
                opacity: 1;
            }
            to{
              top: 0;
              transform:scale(1);
              opacity:1;
            }
            `;
const fadeUp = keyframes`
            from{
              opacity: 1;
              top:0;
            }
            to{
                opacity: 0;
                top: 0;
            }
            `;
