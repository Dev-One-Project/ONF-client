import * as S from './schedulerList.styles';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Select01 from '../../../../commons/input/select01';
import { ConfigProvider, DatePicker, Space } from 'antd';
import { ISchedulerListProps } from './schedulerList.types';
import Check01 from '../../../../commons/input/check01';
import { ISchedule } from '../../../../../commons/types/generated/types';
import moment from 'moment';
import dayjs from 'dayjs';
import dayToString from '../../../../../commons/utils/dayToString';
import { getTimeStr } from '../../../../../commons/utils/getDate';
import { getRestStr, getWorkHourStr } from '../../../../../commons/utils/work';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/ko_KR';

const SchedulerListPresenter = (props: ISchedulerListProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.TopTitleBox>
          <S.H1>근무일정</S.H1>
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
            <Space direction="vertical">
              <ConfigProvider locale={locale}>
                <DatePicker.RangePicker
                  style={{
                    borderRadius: '0',
                    padding: '0.4rem 1rem',
                  }}
                  defaultValue={[
                    dayjs(
                      new Date(
                        new Date(props.startDate).getFullYear(),
                        new Date(props.startDate).getMonth(),
                        new Date(props.startDate).getDate(),
                      ),
                    ),
                    dayjs(
                      new Date(
                        new Date(props.endDate).getFullYear(),
                        new Date(props.endDate).getMonth(),
                        new Date(props.endDate).getDate(),
                      ),
                    ),
                  ]}
                  onChange={props.onChangeStartEndDate}
                />
              </ConfigProvider>
            </Space>
            <S.FuncButton onClick={props.onClickToday}>오늘</S.FuncButton>
            {/* 필터 추가 */}
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
            <S.Label>총 시간 : {props.workHour}h</S.Label>
          </S.OptSectionWrapper>
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper>
        <S.ListHeaderWrapper>
          <S.List>
            <Check01 />
            <S.ListHeaderContent>직원</S.ListHeaderContent>
            <S.ListHeaderContent>날짜</S.ListHeaderContent>
            <S.ListHeaderContent>일정시간</S.ListHeaderContent>
            <S.ListHeaderContent>근무일정 유형</S.ListHeaderContent>
            <S.ListHeaderContent>조직</S.ListHeaderContent>
            <S.ListHeaderContent>직무</S.ListHeaderContent>
            <S.ListHeaderContent>근무일정 템플릿</S.ListHeaderContent>
            <S.ListHeaderContent>일정노트</S.ListHeaderContent>
            <S.ListHeaderContent>휴게시간</S.ListHeaderContent>
            <S.ListHeaderContent>총시간</S.ListHeaderContent>
          </S.List>
        </S.ListHeaderWrapper>
        {/* TOOD: need type declaration */}
        {props.scheduleList?.map((schedule: ISchedule) => (
          <S.ListBodyWrapper key={schedule.id}>
            <S.List>
              <Check01 />
              <S.ListBodyContent>{schedule.member.name}</S.ListBodyContent>
              <S.ListBodyContent>
                {moment(schedule.startWorkTime).format('MM/DD')}
                {` (${dayToString(moment(schedule.startWorkTime).day())})`}
              </S.ListBodyContent>
              <S.ListBodyContent>
                {getTimeStr(
                  String(schedule.startWorkTime),
                  String(schedule.endWorkTime),
                )}
              </S.ListBodyContent>
              <S.ListBodyContent>
                {schedule.scheduleCategory.scheduleCategoryName || ''}
              </S.ListBodyContent>
              <S.ListBodyContent>
                {schedule.organization.name || ''}
              </S.ListBodyContent>
              <S.ListBodyContent>
                {schedule.roleCategory.duty || ''}
              </S.ListBodyContent>
              <S.ListBodyContent>
                {schedule.scheduleTemplate.name || ''}
              </S.ListBodyContent>
              <S.ListBodyContent>{schedule.memo || ''}</S.ListBodyContent>
              <S.ListBodyContent>
                {getRestStr(
                  String(schedule.startWorkTime),
                  String(schedule.endWorkTime),
                )}
              </S.ListBodyContent>
              <S.ListBodyContent>
                {getWorkHourStr(
                  String(schedule.startWorkTime),
                  String(schedule.endWorkTime),
                )}
              </S.ListBodyContent>
            </S.List>
          </S.ListBodyWrapper>
        ))}
      </S.UlWrapper>
    </S.Container>
  );
};

export default SchedulerListPresenter;
