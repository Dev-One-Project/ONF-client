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
import { getTimeStr } from '../../../../../commons/utils/getDate';

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
            <S.Select
              placeholder={props.yearArr[props.yearArr.length - 1]}
              onChange={props.onChangeSelect}
            >
              {props.yearArr.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </S.Select>
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
        <S.Table>
          <thead>
            <tr>
              <th></th>
              {props.monthArr.map((day) => (
                <th key={uuidV4()}>{day}</th>
              ))}
              <th>합계</th>
            </tr>
          </thead>
          <tbody>
            {props.data?.fetchMonthWorkChecks.map((member) => (
              <tr key={uuidV4()}>
                <td>{member.member.name}</td>
                {member.data.map((memberData) =>
                  memberData[0] ? (
                    <td key={uuidV4()}>
                      <label>
                        {memberData[0]
                          ? getTimeStr(memberData[0].workingTime, '').replace(
                              ' - ',
                              '',
                            )
                          : ''}
                      </label>
                      <label>
                        {memberData[0].quittingTime
                          ? getTimeStr('', memberData[0].quittingTime).replace(
                              ' - ',
                              '',
                            )
                          : ''}
                      </label>
                    </td>
                  ) : (
                    <td key={uuidV4()}></td>
                  ),
                )}
                <td></td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.UlWrapper>
    </S.Container>
  );
};

export default AttendancesCalendarPresenter;
