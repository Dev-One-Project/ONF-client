import Input01 from '../../../commons/input/input01';
import * as S from './requestReview.styles';
import { IRequestReviewPresenterProps } from './requestReview.types';

const RequestReviewPresenter = (props: IRequestReviewPresenterProps) => {
  return (
    <S.Container>
      <S.Form
        onSubmit={
          props.isWorking ? props.onClickWorking : props.onClickVacation
        }
      >
        <S.LeftDiv>
          <S.ColumnDiv>
            <S.H4>요청 사유</S.H4>
            <S.Textarea />
          </S.ColumnDiv>
          <S.ColumnDiv>
            <S.H4>사진 첨부</S.H4>
            <Input01 type="file" />
          </S.ColumnDiv>
        </S.LeftDiv>
        {props.isWorking ? (
          <S.RightDiv>
            <S.ColumnDiv>
              <S.H4>요청사항</S.H4>
              <S.RowDiv>
                <S.Tag>
                  <span>#</span> 소정근로미만
                </S.Tag>
              </S.RowDiv>
            </S.ColumnDiv>
            <S.RowDiv>
              <S.H4>날짜</S.H4>
              <span>12월 7일 (수) 09:00 - 13:00</span>
            </S.RowDiv>
            <S.RowDiv>
              <S.H4>팀</S.H4>
              <span>팀없음</span>
            </S.RowDiv>
            <S.RowDiv>
              <S.H4>직무</S.H4>
              <span>직무없음</span>
            </S.RowDiv>
            <S.DetailWrapper>
              <S.Date>12/11-17</S.Date>
              <S.DateDetail>
                <div>
                  <span>계획 : 4시간</span>(휴가): 0분
                </div>
                (소정): 40시간
              </S.DateDetail>
            </S.DetailWrapper>
          </S.RightDiv>
        ) : (
          <S.RightDiv>
            <S.ColumnDiv>
              <S.H4>요청사항</S.H4>
              <S.RowDiv>
                <S.Tag>
                  <span>#</span> 과거휴가
                </S.Tag>
              </S.RowDiv>
            </S.ColumnDiv>
            <S.RowDiv>
              <S.H4>날짜</S.H4>
              <span>12월 7일 (수)</span>
            </S.RowDiv>
            <S.RowDiv>
              <S.H4>휴가 유형</S.H4>
              <span>병가 (8h, 0일간)</span>
            </S.RowDiv>
            <S.RowDiv>
              <span>
                <span>휴가 그룹 없음 (2022.01.01 - 12.31)</span>잔여 일수는 0일
                입니다.
              </span>
            </S.RowDiv>
            <S.DetailWrapper>
              <S.Date>12/11-17</S.Date>
              <S.DateDetail>
                <div>
                  <span>계획 : 16시간</span>(휴가: 0분 -&gt; 8시간)(+8h)
                </div>
                (소정): 40시간
              </S.DateDetail>
            </S.DetailWrapper>
          </S.RightDiv>
        )}
        <S.invisibleBtn ref={props.requestBtnRef} />
      </S.Form>
    </S.Container>
  );
};

export default RequestReviewPresenter;
