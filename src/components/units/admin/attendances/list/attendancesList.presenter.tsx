import * as S from './attendancesList.styles';
import Check01 from '../../../../commons/input/check01';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import { DatePicker, Space } from 'antd';
import FallingModal from '../../../../commons/modal/fallingModal';
import { IAttendancesListPresenterProps } from './attendancesList.types';
import AddAttendances from '../modules/addAttendances';
import Select03 from '../../../../commons/input/select03';
import Select01 from '../../../../commons/input/select01';
import dayjs from 'dayjs';
import { getDateSlash, getTimeStr } from '../../../../../commons/utils/getDate';
import EditAttendances from '../modules/editAttendances';

const AttendancesListPresenter = (props: IAttendancesListPresenterProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>출퇴근기록 관리</S.H1>
        <Btn01
          text={'+ 출퇴근기록 생성'}
          color={styleSet.colors.white}
          bgC={styleSet.colors.primary}
          onClick={props.onClickOpenModal}
        />
      </S.TopWrapper>

      {props.isOpen && (
        <FallingModal
          aniMode={props.aniMode}
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
          onCancel={() => {
            props.setAniMode(false);
          }}
          title="출퇴근기록 생성하기"
        >
          <AddAttendances
            handleSubmit={props.handleSubmit}
            onSubmit={props.onSubmit}
            register={props.register}
            control={props.control}
            onCancel={() => {
              props.setAniMode(false);
            }}
            setValue={props.setValue}
            watch={props.watch}
          />
        </FallingModal>
      )}

      {props.isEditOpen && (
        <FallingModal
          aniMode={props.aniMode}
          isOpen={props.isEditOpen}
          setIsOpen={props.setIsEditOpen}
          onCancel={() => {
            props.setAniMode(false);
          }}
          title="출퇴근기록 수정하기"
        >
          <EditAttendances
            handleSubmit={props.handleSubmit}
            onSubmit={props.onSubmit}
            register={props.register}
            control={props.control}
            onCancel={() => {
              props.setAniMode(false);
            }}
            setValue={props.setValue}
            watch={props.watch}
          />
        </FallingModal>
      )}

      <S.OptWrapper>
        <S.OptBox>
          <S.OptSelect>
            <Space direction="vertical">
              <DatePicker.RangePicker
                style={{
                  borderRadius: '0',
                  padding: '0.4rem 1rem',
                }}
                defaultValue={[
                  dayjs(
                    new Date(
                      new Date().getFullYear(),
                      new Date().getMonth(),
                      1,
                    ),
                  ),
                  dayjs(
                    new Date(
                      new Date().getFullYear(),
                      new Date().getMonth() + 1,
                      0,
                    ),
                  ),
                ]}
                onChange={props.onChangeStartEndDate}
              />
            </Space>
            <Select03 filterInit={props.init} setFilterInit={props.setInit} />
          </S.OptSelect>
          <Select01
            left
            role="organization"
            data={props.organizationsData}
            setState={props.setOrganizationArr}
            defaultChecked={props.organizationArr}
          />
        </S.OptBox>
        {props.checkedList.length > 0 ? (
          <S.OptBox>
            <S.OptSelect>
              <Btn01 text={'출퇴근기록 수정'} bdC={styleSet.colors.gray} />
              <Btn01
                text={'삭제'}
                bdC={styleSet.colors.gray}
                color={styleSet.colors.fail}
                onClick={props.onClickDeleteChecked}
              />
            </S.OptSelect>
          </S.OptBox>
        ) : (
          <S.EmptyBox></S.EmptyBox>
        )}
      </S.OptWrapper>

      <S.UlWrapper>
        <S.Ul>
          <li>
            <Check01
              checked={
                props.checkedList.length === 0
                  ? false
                  : props.checkedList.length ===
                    props.data?.fetchDateMemberWorkChecks.length
              }
              onChange={(event) => props.onCheckedAll(event.target.checked)}
            />
          </li>
          <li>직원</li>
          <li>날짜</li>
          <li>근무시간</li>
          <li>근무일정</li>
          <li>조직</li>
          <li>직무</li>
          <li>출근 장소</li>
          <li>퇴근 장소</li>
          <li>근무노트</li>
          <li>휴게시간</li>
          <li>총 시간</li>
          <li>근무일정 오차범위</li>
          <li>출근시간 오차범위</li>
          <li>퇴근시간 오차범위</li>
        </S.Ul>
        {props.data?.fetchDateMemberWorkChecks.map((fetchData, i) => (
          <S.Ul key={i} onClick={props.onClickOpenEditModal} id={fetchData.id}>
            <li>
              <Check01
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onChange={(e) =>
                  props.onCheckedElement(e.target.checked, fetchData)
                }
                checked={props.checkedList.includes(fetchData)}
              />
            </li>
            <li>{fetchData.member.name}</li>
            <li>{getDateSlash(fetchData.workDay)}</li>
            <li>
              <p>{getTimeStr(fetchData.workingTime, '')}</p>
              <p>
                {getTimeStr('', fetchData.quittingTime).replace(
                  '0NaN:0NaN -',
                  '',
                )}
              </p>
            </li>
            {fetchData.schedule ? (
              <li>
                <p>{fetchData.schedule.startWorkTime} -</p>
                <p>{fetchData.schedule.endWorkTime}</p>
              </li>
            ) : (
              <li></li>
            )}

            <li>{fetchData.organization?.name}</li>
            <li>{fetchData.roleCategory?.name}</li>
            <li>{fetchData.organization?.checkPoint}</li>
            <li>{fetchData.organization?.checkPoint}</li>
            <li>{fetchData.workCheckMemo}</li>
            <li>60분</li>
            <li>개발중임돠,,</li>
            <li>에헷^.0,,</li>
            <li>{fetchData.workingTimeRange}</li>
            <li>{fetchData.endTimeRange}</li>
          </S.Ul>
        ))}
      </S.UlWrapper>
    </S.Container>
  );
};

export default AttendancesListPresenter;
