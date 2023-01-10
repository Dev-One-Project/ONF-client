import { DatePicker, Space } from 'antd';
import Check01 from '../../input/check01';
import { IUserSideBar } from '../../layoutUser/layout.types';
import * as S from '../../layoutUser/layout.styles';
import { useSetRecoilState } from 'recoil';
import { attendanceDateState } from '../../../../commons/store';

const UserAttendancesSideBar = (props: IUserSideBar) => {
  const setAttendanceDate = useSetRecoilState(attendanceDateState);
  const dateFormat = 'YYYY-MM-DD';

  return (
    <>
      <S.Sidebar className="min">
        <S.H1>내 출퇴근기록</S.H1>
        <S.Date>
          <li className="tab2">
            <Space direction="vertical">
              <DatePicker.RangePicker
                onChange={(_: any, dateString: string[]) =>
                  setAttendanceDate(dateString)
                }
                format={dateFormat}
                style={{ height: '30px' }}
              />
            </Space>
          </li>
        </S.Date>

        <S.Check>
          <li>
            <Check01 register={props.register} text={'정상적인 기록'} />
          </li>
          <li>
            <Check01 register={props.register} text={'지각 기록'} />
          </li>
          <li>
            <Check01 register={props.register} text={'조퇴 기록'} />
          </li>
          <li>
            <Check01 register={props.register} text={'출근 누락된 기록'} />
          </li>
          <li>
            <Check01 register={props.register} text={'퇴근 누락된 기록'} />
          </li>
        </S.Check>
      </S.Sidebar>
    </>
  );
};
export default UserAttendancesSideBar;
