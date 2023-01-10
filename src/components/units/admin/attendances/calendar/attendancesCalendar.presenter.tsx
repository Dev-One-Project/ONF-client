import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Switch01 from '../../../../commons/switch/switch01';
import * as S from './attendancesCalendar.styles';
import { IAttendancesCalendarPresenterProps } from './attendancesCalendar.types';
import { v4 as uuidV4 } from 'uuid';
import Select01 from '../../../../commons/input/select01';
import Select03 from '../../../../commons/input/select03';
import AddAttendances from '../modules/addAttendances';
import FallingModal from '../../../../commons/modal/fallingModal';
// import { getTimeStr } from '../../../../../commons/utils/getDate';

const AttendancesCalendarPresenter = (
  props: IAttendancesCalendarPresenterProps,
) => {
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
          />
        </FallingModal>
      )}

      <S.OptWrapper>
        <S.OptBox>
          <S.OptSelect>
            <S.Input placeholder={props.month} />
            <Select03 filterInit={props.init} setFilterInit={props.setInit} />
          </S.OptSelect>
          <Select01
            data={props.organizationsData}
            role="organization"
            left
            setState={props.setOrganizationArr}
            defaultChecked={props.organizationArr}
          />
        </S.OptBox>
        <S.OptBox>
          <S.OptSelect>
            <Switch01 text={'휴가 관리'} />
          </S.OptSelect>
          <S.OptSelect>
            <S.Block></S.Block>
            <S.Span>휴가</S.Span>
          </S.OptSelect>
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper>
        <S.DateUl>
          <div>공백</div>
          {props.monthArr.map((day) => (
            <li key={uuidV4()}>{day}</li>
          ))}
          <div>합계</div>
        </S.DateUl>
        {console.log(props.data?.fetchMonthWorkChecks)}
        {/* {props.data?.fetchMonthWorkChecks.map((fetchDatas) =>
              <div>{fetchDatas[0] ? fetchDatas[0].member.name : ''}</div>
          fetchDatas.map((fetchData, i) => (
            <S.DateUl key={i}>
              {console.log(fetchData[0])}
              <li>
                {fetchData[0]
                  ? getTimeStr(
                      fetchData[0].workingTime,
                      fetchData[0].quittingTime,
                    )
                  : ''}
              </li>
              <div>{props.monthArr.length}</div>
            </S.DateUl>
          )),
        )} */}
      </S.UlWrapper>
    </S.Container>
  );
};

export default AttendancesCalendarPresenter;
