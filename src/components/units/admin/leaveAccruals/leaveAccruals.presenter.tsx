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
            <span>직원</span>
            <span>휴가 그룹</span>
            <span>산정 기간</span>
            <span>총 휴가 일수</span>
            <span>사용한 휴가 일수</span>
            <span>남은 일수</span>
          </S.EmployeeUl>
          <S.EmployeeLi>
            <span>에스쿱스</span>
            <span>연차휴가</span>
            <span>12월 5일 (월) 10:00 - 14:00</span>
            <span>12일</span>
            <span>0일</span>
            <span>12일</span>
          </S.EmployeeLi>
          <S.EmployeeLi>
            <span>에스쿱스</span>
            <span>연차휴가</span>
            <span>12월 5일 (월) 10:00 - 14:00</span>
            <span>12일</span>
            <span>0일</span>
            <span>12일</span>
          </S.EmployeeLi>
          <S.EmployeeLi>
            <span>에스쿱스</span>
            <span>연차휴가</span>
            <span>12월 5일 (월) 10:00 - 14:00</span>
            <span>12일</span>
            <span>0일</span>
            <span>12일</span>
          </S.EmployeeLi>
        </S.UlWrapper>
      ) : (
        <S.UlWrapper>
          <S.ListUl>
            <span>직원</span>
            <span>휴가 그룹</span>
            <span>발생 시점</span>
            <span>만료 시점</span>
            <span>발생 일수</span>
            <span>사용한 휴가 일수</span>
            <span>남은 휴가 일수</span>
            <span>메모</span>
          </S.ListUl>
          <S.ListLi>
            <span>에스쿱스</span>
            <span>연차휴가</span>
            <span>2022-12-30</span>
            <span>2023-12-30</span>
            <span>12</span>
            <span>0</span>
            <span>12</span>
            <span>메롱</span>
          </S.ListLi>
        </S.UlWrapper>
      )}
    </S.Container>
  );
};

export default LeaveAccrualsPresenter;
