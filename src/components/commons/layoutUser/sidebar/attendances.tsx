import { DatePicker, Space } from 'antd';
import Check01 from '../../input/check01';
import * as S from '../layout.styles';
import { IUserSideBar } from '../layout.types';

const UserAttendancesSideBar = (props: IUserSideBar) => {
  return (
    <>
      <S.Sidebar className="min">
        <S.H1>내 출퇴근기록</S.H1>
        <S.Date>
          <li className="tab2">
            <Space direction="vertical">
              <DatePicker.RangePicker style={{ height: '30px' }} />
            </Space>
          </li>
        </S.Date>

        <S.Check>
          <li>
            <Check01 register={props.register} text={'정상적인 기록'} />
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
