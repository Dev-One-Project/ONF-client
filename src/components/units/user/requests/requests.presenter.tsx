import RequestModal from './requests.modal';
import * as S from './requests.styles';
import { IUserRequestProps } from './requests.types';

const RequestPresenter = (props: IUserRequestProps) => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.RequestTable>
            <colgroup>
              <col width="" />
              <col width="" />
              <col width="" />
              <col width="170px" />
              <col width="" />
              <col width="" />
              <col width="" />
              <col width="" />
            </colgroup>
            <S.Title>
              <tr>
                <th>요청종류</th>
                <th>요청 보낸 사람</th>
                <th>요청 사항</th>
                <th>요청 사유</th>
                <th>상태</th>
                <th>승인권자 노트</th>
                <th>승인일자</th>
                <th>관리</th>
              </tr>
            </S.Title>
            <S.Contents onClick={props.onClickModal}>
              <tr>
                <td>휴가 생성</td>
                <td>신미연</td>
                <td>12월 9일 (금) / 병가 (8h, 0일)</td>
                <td>
                  <p>
                    아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다아프다
                  </p>
                </td>
                <td>
                  <span>승인됨</span>
                  홍민우 (O) (1/1)
                </td>
                <td>승인권자 노트</td>
                <td>12/09 18:09</td>
                <td>관리</td>
                {props.modal && <RequestModal />}
              </tr>
            </S.Contents>
          </S.RequestTable>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
export default RequestPresenter;
