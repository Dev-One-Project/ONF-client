import { DatePicker, Space } from 'antd';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import Check01 from '../../../commons/input/check01';
import Switch01 from '../../../commons/switch/switch01';
import * as S from './leaveAccruals.styles';
import { ILeaveAccrualsPresenterProps } from './leaveAccruals.types';

const LeaveAccrualsPresenter = (props: ILeaveAccrualsPresenterProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>휴가 발생</S.H1>
        <Btn01
          text={'휴가 발생'}
          color={styleSet.colors.white}
          bgC={styleSet.colors.primary}
        />
      </S.TopWrapper>

      {props.isSelect ? (
        <S.OptWrapper>
          <S.OptBox>
            <S.OptSelect>
              <S.DateBox>
                <S.Date>기준 일자</S.Date>
                <Space direction="vertical">
                  <DatePicker style={{ borderRadius: '0 2px 2px 0' }} />
                </Space>
              </S.DateBox>
              <input placeholder="필터" />
            </S.OptSelect>
            <input placeholder="selectBox222" />
          </S.OptBox>
          <S.OptBox>
            <S.OptSelect>
              <Switch01 text={'기준 일자까지만 계산'} />
            </S.OptSelect>
            <S.SelectBox
              onClick={props.onClickEmployee}
              className={props.isSelect ? 'active' : ''}
            >
              직원
            </S.SelectBox>
            <S.SelectBox
              onClick={props.onClickList}
              className={props.isSelect ? '' : 'active'}
            >
              목록
            </S.SelectBox>
          </S.OptBox>
        </S.OptWrapper>
      ) : (
        <S.OptWrapper>
          <S.OptBox>
            <S.OptSelect>
              <Space direction="vertical">
                <DatePicker.RangePicker
                  style={{ width: '207px', borderRadius: '2px' }}
                />
              </Space>
              <S.DateBox>
                <S.Date>기준 일자</S.Date>
                <Space direction="vertical">
                  <DatePicker style={{ borderRadius: '0 2px 2px 0' }} />
                </Space>
              </S.DateBox>
              <input placeholder="필터" />
            </S.OptSelect>
            <input placeholder="selectBox222" />
          </S.OptBox>
          <S.OptBox>
            <S.OptSelect>
              <Switch01 text={'기준 일자까지만 계산'} />
            </S.OptSelect>
            <S.SelectBox
              onClick={props.onClickEmployee}
              className={props.isSelect ? 'active' : ''}
            >
              직원
            </S.SelectBox>
            <S.SelectBox
              onClick={props.onClickList}
              className={props.isSelect ? '' : 'active'}
            >
              목록
            </S.SelectBox>
          </S.OptBox>
        </S.OptWrapper>
      )}

      {props.isSelect ? (
        <S.UlWrapper>
          <S.EmployeeUl>
            <li>직원</li>
            <li>휴가 그룹</li>
            <li>산정 기간</li>
            <li>총 휴가 일수</li>
            <li>사용한 휴가 일수</li>
            <li>남은 일수</li>
          </S.EmployeeUl>
          <S.EmployeeUl>
            <li>에스쿱스</li>
            <li>연차휴가</li>
            <li>12월 5일 (월) 10:00 - 14:00</li>
            <li>12일</li>
            <li>0일</li>
            <li>12일</li>
          </S.EmployeeUl>
          <S.EmployeeUl>
            <li>에스쿱스</li>
            <li>연차휴가</li>
            <li>12월 5일 (월) 10:00 - 14:00</li>
            <li>12일</li>
            <li>0일</li>
            <li>12일</li>
          </S.EmployeeUl>
          <S.EmployeeUl>
            <li>에스쿱스</li>
            <li>연차휴가</li>
            <li>12월 5일 (월) 10:00 - 14:00</li>
            <li>12일</li>
            <li>0일</li>
            <li>12일</li>
          </S.EmployeeUl>
        </S.UlWrapper>
      ) : (
        <S.UlWrapper>
          <S.ListUl>
            <li>직원</li>
            <li>휴가 그룹</li>
            <li>발생 시점</li>
            <li>만료 시점</li>
            <li>발생 일수</li>
            <li>사용한 휴가 일수</li>
            <li>남은 휴가 일수</li>
            <li>메모</li>
          </S.ListUl>
          <S.ListUl>
            <li>에스쿱스</li>
            <li>연차휴가</li>
            <li>2022-12-30</li>
            <li>2023-12-30</li>
            <li>12</li>
            <li>0</li>
            <li>12</li>
            <li>메롱</li>
          </S.ListUl>
        </S.UlWrapper>
      )}
    </S.Container>
  );
};

export default LeaveAccrualsPresenter;
