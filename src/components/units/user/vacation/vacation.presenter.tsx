import { CloseOutlined } from "@ant-design/icons";
import { IVacationWrtieUI } from "./vacation.types";
import * as S from "./vacation.styles";
import Btn01 from "../../../commons/button/btn01";
import { styleSet } from "../../../../commons/styles/styleSet";

const VacationWrtieUI = (props: IVacationWrtieUI) => {
  return (
    <S.MainWrapper>
      <S.HeaderWrapper>
        <S.HeaderTitleWrapper>
          <h3>
            <S.HeaderIconWrapper>
              <CloseOutlined onClick={props.onClickCancel} />
            </S.HeaderIconWrapper>
            휴가 생성 요청
          </h3>
        </S.HeaderTitleWrapper>
        <S.HeaderBtnWrapper>
          <Btn01
            text={"다음: 승인권자 선택"}
            bgC={`${styleSet.colors.primary}`}
            color={`${styleSet.colors.white}`}
          ></Btn01>
        </S.HeaderBtnWrapper>
      </S.HeaderWrapper>
      <S.LabelSection>
        <S.LabelStyle htmlFor="VacationSelect">휴가유형</S.LabelStyle>
        <S.SelectBoxStyle id="VacationSelect">
          <option value="" defaultChecked>
            선택안됨
          </option>
          <optgroup label="연차휴가">
            <option>반차(4h,0.5일)</option>
            <option>연차(8h,1일)</option>
          </optgroup>
          <optgroup label="휴가 그룹 없음">
            <option>병가(8h,0일)</option>
          </optgroup>
        </S.SelectBoxStyle>
      </S.LabelSection>
      <S.VacationMainWrapper>
        <S.CalendarWrapper>
          <S.RequireDateStyle>요청날짜</S.RequireDateStyle>
          <section>캘린더</section>
        </S.CalendarWrapper>
        <S.VacationListWrapper>
          <S.VacationTotalWrapper>
            <S.ArticleTitleWrapper>
              <S.ArticleTitleStyle>12월 휴가 통계</S.ArticleTitleStyle>
            </S.ArticleTitleWrapper>
            <S.VacationContentsWrapper>
              <S.ListContentsWrapper>
                <S.ChangeVacationTitleStyle>
                  휴가시간 변화
                </S.ChangeVacationTitleStyle>
                <span>0 8시간</span>
              </S.ListContentsWrapper>
              <S.ListContentsWrapper>
                <S.GroupOfVacationStyle>
                  휴가 그룹 없음(2022.01.01 - 12.31)
                </S.GroupOfVacationStyle>
                <span>
                  잔여일수는 <S.GroupOfVacationStyle>0</S.GroupOfVacationStyle>
                  일 입니다.
                </span>
              </S.ListContentsWrapper>
            </S.VacationContentsWrapper>
          </S.VacationTotalWrapper>
          <S.WorkingListWrapper>
            <S.ArticleTitleWrapper>
              <S.ArticleTitleStyle>근무 일정 목록</S.ArticleTitleStyle>
            </S.ArticleTitleWrapper>
            <div>
              <S.DateOfWorkingStyle>12/16(금)</S.DateOfWorkingStyle>
              <S.TimeofWorkingStyle>10:00~19:00</S.TimeofWorkingStyle>
            </div>
          </S.WorkingListWrapper>
        </S.VacationListWrapper>
      </S.VacationMainWrapper>
    </S.MainWrapper>
  );
};

export default VacationWrtieUI;
