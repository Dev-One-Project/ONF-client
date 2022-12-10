import RequestModal from './request.modal';
import * as S from './request.styles';
import { IUserRequestProps } from './request.types';

const RequestPresenter = (props: IUserRequestProps) => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Notice>
            <li>요청 종류</li>
            <li>요청 보낸 사람</li>
            <li className="text">요청사항</li>
            <li className="text2">요청 사유</li>
            <li>상태</li>
            <li>승인권자 노트</li>
            <li>승인일자</li>
            <li>관리</li>
          </S.Notice>

          <S.NoticeList onClick={props.onClickModal}>
            <li>휴가 생성</li>
            <li>신미연</li>
            <li className="text">12월 9일 (금) / 병가 (8h, 0일)</li>
            <li className="text2">
              아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다
            </li>
            <li>
              <span>승인됨</span>
              홍민우 (O) (1/1)
            </li>
            <li>승인권자 노트</li>
            <li>12/09 18:09</li>
            <li>관리</li>
            {props.modal && <RequestModal />}
          </S.NoticeList>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
export default RequestPresenter;
