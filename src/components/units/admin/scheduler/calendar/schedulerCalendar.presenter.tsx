import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Select01 from '../../../../commons/input/select01';
import ArrowSvg from '../../../../commons/svg/arrows';
import Switch01 from '../../../../commons/switch/switch01';
import CalendarElementContainer from '../elements/calendar/calendarElement.container';
import { IDateData } from '../scheduler.types';
import * as S from './schedulerCalendar.styles';
// import { v4 as uuidV4 } from 'uuid';

const SchedulerCalendarPresenter = (props: any) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.TopTitleBox>
          <S.H1>근무일정</S.H1>
          <Switch01 text={'휴가 관리'} />
        </S.TopTitleBox>
        <Btn01
          text={'근무일정 추가하기'}
          bgC={styleSet.colors.primary}
          color={styleSet.colors.white}
        />
      </S.TopWrapper>

      <S.OptWrapper>
        <S.OptBox>
          <S.OptSectionWrapper>
            <S.ArrowButton>
              <ArrowSvg
                direction={'left'}
                size={'big'}
                color={styleSet.colors.primary}
              />
            </S.ArrowButton>
            <S.ArrowButton>
              <ArrowSvg
                direction={'right'}
                size={'big'}
                color={styleSet.colors.primary}
              />
            </S.ArrowButton>
            <S.FuncButton>오늘</S.FuncButton>
            <S.DateLabel>2022년 12월</S.DateLabel>
          </S.OptSectionWrapper>
          <S.OptSectionWrapper>
            <Select01 data={['이다은', '바보', '멍충이']} role="organization" />
          </S.OptSectionWrapper>
        </S.OptBox>
        <S.OptBox>
          <S.OptSectionWrapper>
            <Select01 data={['이다은', '바보', '멍충이']} role="duty" />
            <S.FuncButton>모두 펼치기</S.FuncButton>
          </S.OptSectionWrapper>
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper>
        <S.CalendarWrapper>
          <S.CalendarHeader>
            <S.CalendarHeaderItem> </S.CalendarHeaderItem>
            {/* TODO: need type declaration */}
            {props.dateArray?.map((date: IDateData) => {
              return (
                <S.CalendarHeaderItem
                  key={date.index}
                  className={date.isToday ? 'today' : 'other'}
                >
                  <p>{`${date.day.split('-')[2]}일 (${date.dateStr})`}</p>
                </S.CalendarHeaderItem>
              );
            })}
          </S.CalendarHeader>
          {props.member ? (
            props.member?.map((member: any) => {
              return (
                <S.CalendarBody key={member.id}>
                  <S.CalendarBodyItem>{member.name}</S.CalendarBodyItem>
                  {props.dateArray?.map((date: any) => {
                    return (
                      <S.CalendarBodyItem
                        key={date.index}
                        className={date.isToday ? 'today' : 'other'}
                      >
                        <CalendarElementContainer member={member} date={date} />
                      </S.CalendarBodyItem>
                    );
                  })}
                </S.CalendarBody>
              );
            })
          ) : (
            <S.CalendarBody>
              <S.CalendarBodyItem>홍민우</S.CalendarBodyItem>
              {props.dateArray?.map((date: any) => {
                return (
                  <S.CalendarBodyItem
                    key={date.index}
                    className={date.isToday ? 'today' : 'other'}
                  ></S.CalendarBodyItem>
                );
              })}
            </S.CalendarBody>
          )}

          <S.CalendarFooter>
            <S.CalendarFooterItem>000h</S.CalendarFooterItem>
            {props.dateArray?.map((date: any) => {
              return (
                <S.CalendarFooterItem
                  key={date.index}
                  className={date.isToday ? 'today' : 'other'}
                ></S.CalendarFooterItem>
              );
            })}
          </S.CalendarFooter>
          <S.CalendarFooter>
            <S.CalendarFooterItem>0명</S.CalendarFooterItem>
            {props.dateArray?.map((date: any) => {
              return (
                <S.CalendarFooterItem
                  key={date.index}
                  className={date.isToday ? 'today' : 'other'}
                ></S.CalendarFooterItem>
              );
            })}
          </S.CalendarFooter>
        </S.CalendarWrapper>
      </S.UlWrapper>
    </S.Container>
  );
};

export default SchedulerCalendarPresenter;
