import * as S from '../layout.styles';
import { DatePicker, Space } from 'antd';
import { IUserSideBar } from '../layout.types';

const UserSideBar = (props: IUserSideBar) => {
  return (
    <>
      {props.tab === '1' && (
        <S.Sidebar>
          <S.H1>내 근로 통계</S.H1>
          <S.Date>
            <li>
              <Space direction='vertical'>
                <DatePicker.RangePicker style={{ height: '40px' }} />
              </Space>
            </li>
            <li>
              <S.InvisibleCheckbox type='checkbox' />
              <S.Checkbox className='checkbox'></S.Checkbox>
              <span>기간 고정</span>
            </li>
          </S.Date>

          <S.DateInfo>
            <li>
              소정근로시간
              <strong>0m</strong>
            </li>
            <li>
              승인된 근로시간
              <strong>0h</strong>
            </li>
            <li>
              승인된 유급시간
              <strong>0h</strong>
            </li>
            <li>
              실제 근로시간
              <strong>0m</strong>
            </li>
            <li>
              실제 유급시간
              <strong>0h</strong>
            </li>
            <li>
              유급휴가시간
              <strong>0h</strong>
            </li>
          </S.DateInfo>

          <S.Vacation>
            <div className='range'>
              <S.H2>내 휴가 통계 </S.H2>
              <Space direction='vertical'>
                <DatePicker style={{ height: '40px', width: '200px' }} />
              </Space>
            </div>
          </S.Vacation>

          <S.Aside>
            <p>휴가 그룹</p>
            <ul>
              <li>총</li>
              <li>사용</li>
              <li>잔여</li>
            </ul>
          </S.Aside>

          <S.Aside2>
            <p>연차휴가</p>
            <ul>
              <li>10</li>
              <li>2</li>
              <li>-</li>
            </ul>
          </S.Aside2>
        </S.Sidebar>
      )}

      {props.tab === '2' && (
        <S.Sidebar className='min'>
          <S.H1>내 출퇴근기록</S.H1>
          <S.Date>
            <li className='tab2'>
              <Space direction='vertical'>
                <DatePicker.RangePicker style={{ height: '40px' }} />
              </Space>
            </li>
          </S.Date>

          <S.Check>
            <li>정상적인 기록</li>
            <li>출근 누락된 기록</li>
            <li>퇴근 누락된 기록</li>
          </S.Check>
        </S.Sidebar>
      )}

      {props.tab === '3' && (
        <S.Sidebar className='min'>
          <S.H1>내 요청들</S.H1>
          <S.Date2>
            <li>
              <Space direction='vertical'>
                <DatePicker.RangePicker style={{ height: '40px' }} />
              </Space>
            </li>
            <S.Li className='top'>
              대기중인 요청 수 <strong>10</strong>
            </S.Li>
            <S.Li>
              완료된 요청 수 <strong>0</strong>
            </S.Li>
          </S.Date2>

          <S.Check>
            <li>정상적인 기록</li>
            <li>출근 누락된 기록</li>
            <li>퇴근 누락된 기록</li>
          </S.Check>
        </S.Sidebar>
      )}
    </>
  );
};
export default UserSideBar;
