import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Select01 from '../../../../commons/input/select01';
import ArrowSvg from '../../../../commons/svg/arrows';
import Switch01 from '../../../../commons/switch/switch01';
import CalendarElementContainer from '../elements/calendar/calendarElement.container';
import { IDateData } from '../scheduler.types';
import * as S from './schedulerCalendar.styles';
import { ISchedulerCalendarProps } from './schedulerCalendar.types';

const getDateStr = (date: IDateData) => {
  let dayStr = date.day.split('-')[2] + '일';
  if (dayStr[0] === '0') dayStr = dayStr[1] + dayStr[2];
  if (dayStr === '1일') {
    let month = date.day.split('-')[1];
    if (month[0] === '0') month = month[1];
    dayStr = month + '월 ' + dayStr;
  }
  return dayStr + ` (${date.dateStr})`;
};

const SchedulerCalendarPresenter = (props: ISchedulerCalendarProps) => {
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
            <S.ArrowButton onClick={props.onClickPrevWeek}>
              <ArrowSvg
                direction={'left'}
                size={'big'}
                color={styleSet.colors.primary}
              />
            </S.ArrowButton>
            <S.ArrowButton onClick={props.onClickNextWeek}>
              <ArrowSvg
                direction={'right'}
                size={'big'}
                color={styleSet.colors.primary}
              />
            </S.ArrowButton>
            <S.FuncButton onClick={props.onClickToday}>오늘</S.FuncButton>
            <S.DateLabel>{props.currentMonth}</S.DateLabel>
          </S.OptSectionWrapper>
          <S.OptSectionWrapper>
            <Select01
              data={props.initOption?.organization}
              setState={props.setSelectOrganization}
              defaultChecked={props.initOption?.organization}
              name={'organization'}
              role="organization"
            />
          </S.OptSectionWrapper>
        </S.OptBox>
        <S.OptBox>
          <S.OptSectionWrapper>
            <Select01
              data={props.initOption?.roleCategory}
              setState={props.setSelectRoleCategory}
              defaultChecked={props.initOption?.roleCategory}
              name={'duty'}
              role="duty"
            />
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
              const dayStr = getDateStr(date);
              return (
                <S.CalendarHeaderItem
                  key={date.index}
                  className={date.isToday ? 'today' : 'other'}
                >
                  <S.Text>{dayStr}</S.Text>
                </S.CalendarHeaderItem>
              );
            })}
          </S.CalendarHeader>
          {props.member
            ? props.member?.map((member: any) => {
                return (
                  <S.CalendarBody key={member.id}>
                    <S.CalendarBodyItem>{member.name}</S.CalendarBodyItem>
                    {props.dateArray?.map((date: any) => {
                      return (
                        <S.CalendarBodyItem
                          key={date.index}
                          className={date.isToday ? 'today' : 'other'}
                        >
                          <CalendarElementContainer
                            member={member}
                            companyName={member.company.name}
                            color={member.schedule.scheduleCategory.color}
                          />
                        </S.CalendarBodyItem>
                      );
                    })}
                  </S.CalendarBody>
                );
              })
            : null}

          <S.CalendarFooter>
            <S.CalendarFooterItem>
              <S.Text>000h</S.Text>
            </S.CalendarFooterItem>
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
            <S.CalendarFooterItem>
              <S.Text>0명</S.Text>
            </S.CalendarFooterItem>
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
