import { DatePicker, Space } from 'antd';
import { styleSet } from '../../../../commons/styles/styleSet';
import Check01 from '../../input/check01';
import * as S from '../layout.styles';
import { IUserSideBar } from '../layout.types';

const UserRequestSideBar = (props: IUserSideBar) => {
  return (
    <>
        <S.Sidebar className="min">
          <S.H1>내 요청들</S.H1>
          <S.Date2>
            <li>
              <Space direction="vertical">
                <DatePicker.RangePicker style={{ height: '30px' }} />
              </Space>
            </li>
            <S.Li className="top">
              대기중인 요청 수 <strong>10</strong>
            </S.Li>
            <S.Li>
              완료된 요청 수 <strong>0</strong>
            </S.Li>
          </S.Date2>

          <S.Check>
            <li>
              <Check01 register={props.register} text={'대기중인 요청 보기'} />
            </li>
            <li>
              <Check01 register={props.register} text={'완료된 요청 보기'} />
            </li>
            <li>
              <Check01 register={props.register} text={'참조된 요청들'} />
            </li>
          </S.Check>
        </S.Sidebar>
    </>
  );
};
export default UserRequestSideBar;
