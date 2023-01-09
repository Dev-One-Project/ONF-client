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
import {
  getDateKoreanStr,
  getTimeStr,
} from '../../../../../commons/utils/getDate';
import { getRestStr, getWorkHourStr } from '../../../../../commons/utils/work';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/ko_KR';
import FallingModal from '../../../../commons/modal/fallingModal';
import DetailModal from '../modules/detailModal/detailModal';
import Check02 from '../../../../commons/input/check02';
import CreateModal from '../modules/createModal/createModal';

const SchedulerListPresenter = (props: ISchedulerListProps) => {
  return (
    <S.Container>
      {props.isOpen ? (
        <FallingModal
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          title={`근무일정 추가하기`}
        >
          <CreateModal
            member={props.member}
            templates={props.templates}
            onClickCloseModal={props.onClickCloseModal}
            initData={props.initOption}
          />
        </FallingModal>
      ) : null}
      {props.isOpenDetail && props.selectSchedule ? (
        <FallingModal
          isOpen={props.isOpenDetail}
          setIsOpen={props.setIsOpenDetail}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          title={`${
            props.selectSchedule?.member?.name || ''
          }의 근무일정 바꾸기 (${getDateKoreanStr(
            new Date(String(props.selectSchedule.startWorkTime)),
          )})`}
        >
          <DetailModal
            onClickCloseModal={props.onClickCloseModal}
            initData={props.initOption}
            createdAt={'아직 데이터를 안줘서 모름..... 줘....'}
            schedule={props.selectSchedule}
          />
        </FallingModal>
      ) : null}
      <S.TopWrapper>
        <S.TopTitleBox>
          <S.H1>근무일정</S.H1>
        </S.TopTitleBox>
        <Btn01
          text={'근무일정 추가하기'}
          bgC={styleSet.colors.primary}
          color={styleSet.colors.white}
          onClick={props.onClickOpenModal}
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
            {Number(props.scheduleList?.length) > 0 &&
            props.checkedList?.length === props.scheduleList?.length ? (
              <Check01 checked={true} onChange={props.onChangeCheckAll} />
            ) : (
              <Check01 checked={false} onChange={props.onChangeCheckAll} />
            )}
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
        {props.scheduleList?.map((schedule: ISchedule) => (
          <S.ListBodyWrapper
            key={schedule.id}
            id={schedule.id}
            onClick={props.onClickListContent}
          >
            <S.List>
              {props.checkedList?.includes(schedule.id) ? (
                <Check02
                  id={schedule.id}
                  checked={true}
                  onChange={props.onChangeCheckList}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <Check02
                  id={schedule.id}
                  checked={false}
                  onChange={props.onChangeCheckList}
                  onClick={(e) => e.stopPropagation()}
                />
              )}
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
                {schedule.scheduleCategory.name || ''}
              </S.ListBodyContent>
              <S.ListBodyContent>
                {schedule.organization.name || ''}
              </S.ListBodyContent>
              <S.ListBodyContent>
                {schedule.roleCategory.name || ''}
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
