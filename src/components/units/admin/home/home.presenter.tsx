import { DatePicker } from 'antd';
import * as S from './home.styles';
import Btn01 from '../../../commons/button/btn01';
import NoticeModal from '../../../commons/modal/noticeModal';
import { styleSet } from '../../../../commons/styles/styleSet';
import { useMoveToPage } from '../../../commons/hooks/useMoveToPage';
import { getStaticDateStr } from '../../../../commons/utils/getDate';
import { FetchAllNoticeBoards, IHomePresenterProps } from './home.types';
const { RangePicker } = DatePicker;

const HomePresenter = (props: IHomePresenterProps) => {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <S.Container>
      <S.TopRow>
        <S.CommonBox>
          <S.BoxTitle>괸라자 빠른 메뉴</S.BoxTitle>
          <S.QuickBtnWrapper>
            <Btn01
              text="근무일정"
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
              onClick={onClickMoveToPage('/admin/scheduler/calendar')}
            />
            <Btn01
              text="출퇴근기록"
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
              onClick={onClickMoveToPage('/admin/attendances/calendar')}
            />
            <Btn01
              text="휴가"
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
              onClick={onClickMoveToPage('/admin/leaves')}
            />
            <Btn01
              text="회사설정"
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
              onClick={onClickMoveToPage('/admin/company')}
            />
          </S.QuickBtnWrapper>
        </S.CommonBox>
      </S.TopRow>
      <S.BodyRow>
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
          <S.OmissionUl>
            {/* <li>누락 기록이 없습니다.</li> */}
            <li>
              <span>이상현</span>
              <span>12월 4일(일)</span>
              <span>09:00</span>
              <span>-</span>
              <span></span>
            </li>
            <li>
              <span>이상현</span>
              <span>12월 4일(일)</span>
              <span></span>
              <span>-</span>
              <span></span>
            </li>
          </S.OmissionUl>
          <S.AlignRight>
            <Btn01 text="전체보기" />
          </S.AlignRight>
        </S.CommonBox>
        <S.CommonBox className="notice">
          <S.BoxTitle>공지사항</S.BoxTitle>
          <S.NoticeUl>
            {(
              props.fetchAllNoticeBoards as unknown as FetchAllNoticeBoards[]
            )?.map((board, i) =>
              i < 5 ? (
                <li key={i} onClick={props.onClickNoticeBoard(board.id)}>
                  <S.Preface>{board.preface}</S.Preface>
                  <span>{board.title}</span>
                  <S.DateStyle>{getStaticDateStr(board.createdAt)}</S.DateStyle>
                </li>
              ) : null,
            )}
          </S.NoticeUl>
          <S.AlignRight>
            <NoticeModal />
          </S.AlignRight>
        </S.CommonBox>
      </S.BodyRow>
    </S.Container>
  );
};

export default HomePresenter;
