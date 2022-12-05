import { styleSet } from "../../../../commons/styles/styleSet";
import Btn01 from "../../../commons/button/btn01";
import * as S from "./home.styles";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const HomePresenter = () => {
  return (
    <S.Container>
      <S.Row>
        <S.CommonBox>
          <S.BoxTitle>ON&OFF 빠른 메뉴</S.BoxTitle>
          <S.QuickBtnWrapper>
            <Btn01
              text="근무일정"
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
            />
            <Btn01
              text="출퇴근기록"
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
            />
            <Btn01
              text="휴가"
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
            />
            <Btn01
              text="회사설정"
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
            />
          </S.QuickBtnWrapper>
        </S.CommonBox>
      </S.Row>
      <S.Row>
        <S.StatusWrapper>
          <S.StatusBox color={styleSet.colors.officeGo}>
            <S.StatusTitle>출근</S.StatusTitle>
            <S.StatusNumber>0</S.StatusNumber>
          </S.StatusBox>
          <S.StatusBox color={styleSet.colors.officeLateness}>
            <S.StatusTitle>지각</S.StatusTitle>
            <S.StatusNumber>0</S.StatusNumber>
          </S.StatusBox>
          <S.StatusBox color={styleSet.colors.officeNone}>
            <S.StatusTitle>미출근</S.StatusTitle>
            <S.StatusNumber>0</S.StatusNumber>
          </S.StatusBox>
          <S.StatusBox color={styleSet.colors.officeVacation}>
            <S.StatusTitle>휴가</S.StatusTitle>
            <S.StatusNumber>0</S.StatusNumber>
          </S.StatusBox>
        </S.StatusWrapper>
        <S.CommonBox>
          <S.BoxTitle>출퇴근누락</S.BoxTitle>
          <S.AlignRight>
            <RangePicker />
          </S.AlignRight>
          <S.Ul>
            {/* <li>누락 기록이 없습니다.</li> */}
            <li>
              <span>이상현</span>
              <span>12월 4일 (일)</span>
              <span>09:00</span>
              <span>-</span>
              <span></span>
            </li>
            <li>
              <span>이상현</span>
              <span>12월 4일 (일)</span>
              <span></span>
              <span>-</span>
              <span></span>
            </li>
          </S.Ul>
          <S.AlignRight>
            <Btn01 text="전체보기" />
          </S.AlignRight>
        </S.CommonBox>
        <S.CommonBox>
          <S.BoxTitle>공지사항</S.BoxTitle>
          <S.Ul>
            <li>
              <S.Preface>머릿말</S.Preface>
              <span>제목이다이야</span>
              <S.DateStyle>2022-12-09</S.DateStyle>
            </li>
            <li>
              <S.Preface>머릿말</S.Preface>
              <span>제목이다이야</span>
              <S.DateStyle>2022-12-09</S.DateStyle>
            </li>
          </S.Ul>
          <S.AlignRight>
            <Btn01 text="전체보기" />
          </S.AlignRight>
        </S.CommonBox>
      </S.Row>
    </S.Container>
  );
};

export default HomePresenter;
