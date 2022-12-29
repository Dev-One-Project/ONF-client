import { styleSet } from '../../../../../commons/styles/styleSet';
import { getStaticDateStr } from '../../../../../commons/utils/getDate';
import Btn01 from '../../../../commons/button/btn01';
import Select01 from '../../../../commons/input/select01';
import ArrowSvg from '../../../../commons/svg/arrows';
import Switch01 from '../../../../commons/switch/switch01';
import CalendarElementContainer from '../elements/calendar/calendarElement.container';
import { IDateData } from '../scheduler.types';
import * as S from './schedulerCalendar.styles';
import { ISchedulerCalendarProps } from './schedulerCalendar.types';
import { v4 } from 'uuid';

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
const getTimeStr = (date: Date) => {
  const hour = date.getHours().toString();
  const minute = date.getMinutes().toString();
  let timeStr = '';
  if (hour.length !== 2) timeStr += '0';
  timeStr += hour + ':';
  if (minute.length !== 2) timeStr += '0';
  timeStr += minute;
  return timeStr;
};

const SchedulerCalendarPresenter = (props: ISchedulerCalendarProps) => {
  console.log(props.member);
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
              left
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
            {props.dateArray?.map((date: IDateData) => {
              const dayStr = getDateStr(date);
              return (
                <S.CalendarHeaderItem
                  key={v4()}
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
                          key={v4()}
                          className={date.isToday ? 'today' : 'other'}
                        >
                          {props.scheduleList?.map((schedule: any) => {
                            if (
                              schedule.member.id === member.id &&
                              getStaticDateStr(new Date(schedule.date)) ===
                                date.day
                            ) {
                              return (
                                <CalendarElementContainer
                                  key={String(schedule.id)}
                                  startTime={getTimeStr(
                                    new Date(schedule.startWorkTime),
                                  )}
                                  endTime={getTimeStr(
                                    new Date(schedule.endWorkTime),
                                  )}
                                  member={member}
                                  companyName={member.company.name}
                                  color={styleSet.colors.primary}
                                />
                              );
                            } else return <></>;
                          })}
                          {/* <CalendarElementContainer
                            member={member}
                            companyName={member.company.name}
                            color={styleSet.colors.primary}
                          /> */}
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
                  key={v4()}
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
                  key={v4()}
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
