import { CloseOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

const Modal = styled.section`
  width: 440px;
  height: 350px;
  box-shadow: 0 0px 24px rgb(130 135 147 / 50%);
  background: ${styleSet.colors.white};
  border-radius: 5px;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${styleSet.colors.gray};
    margin-bottom: 1.5rem;
  }
`;

const ModalTitle = styled.section`
  font-family: ${styleSet.fonts.EB};
  padding: 1rem 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: ${styleSet.fontSizes.strong};

  span {
    background: ${styleSet.colors.fail};
    color: ${styleSet.colors.white};
    font-family: ${styleSet.fonts.B};
    padding: 0.3rem;
    border-radius: 3px;
    font-size: ${styleSet.fontSizes.small};
  }
`;

const Close = styled(CloseOutlined)`
  cursor: pointer;
  color: ${styleSet.colors.gray};
  &:hover {
    color: ${styleSet.colors.primary};
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    font-size: ${styleSet.fontSizes.small};
    strong {
      width: 120px;
      display: inline-block;
      font-family: ${styleSet.fonts.EB};
    }

    span {
      font-family: ${styleSet.fonts.B};
      font-size: ${styleSet.fontSizes.small};
    }
  }
`;

const RequestModal = () => {
  return (
    <>
      <Modal>
        <article>
          <ModalTitle>
            휴가 생성 <span>승인됨</span>
          </ModalTitle>
          <Close />
        </article>
        <List>
          <li>
            <strong>요청 보낸 사람</strong> <span>신미연</span>
          </li>
          <li>
            <strong>신청일자</strong> <span>2022/12/09 (금) 18:09</span>
          </li>
          <li>
            <strong>승인권자</strong> <span>홍민우 (O) (1/1)</span>
          </li>
          <li>
            <strong>참조자</strong> <span>이다은</span>
          </li>
          <li>
            <strong>요청 사유</strong> <span>나 아포</span>
          </li>
          <li>
            <strong>날짜</strong> <span>12월 9일 (금)</span>
          </li>
          <li>
            <strong>휴가 유형</strong> <span>병가 (8h, 0일간)</span>
          </li>
        </List>
      </Modal>
    </>
  );
};
export default RequestModal;
