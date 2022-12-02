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
    </>
  );
};
export default UserSideBar;
