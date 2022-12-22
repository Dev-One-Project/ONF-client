import { DatePicker, Space } from 'antd';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import dayjs from 'dayjs';
import Input01 from '../../../commons/input/input01';
import Select01 from '../../../commons/input/select01';
import Select02 from '../../../commons/input/select02';
import Select03 from '../../../commons/input/select03';
import FallingModal from '../../../commons/modal/fallingModal';
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
          onClick={props.onClickOpenModal}
        />
      </S.TopWrapper>

      {props.isOpen && (
        <FallingModal
          setIsOpen={props.setIsOpen}
          isOpen={props.isOpen}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          title="휴가 발생 건 추가하기"
        >
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <S.ModalWrapper>
              <S.ModalField>
                <div>
                  <label>직원</label>
                  <Select02 data={['짱구', '맹구', '철수']} />
                </div>
                <div>
                  <label>발생 일수</label>
                  <Input01 type="number" width="133px" />
                </div>
                <div>
                  <label>발생 시점</label>
                  <DatePicker style={{ borderRadius: '0' }} />
                </div>
                <div>
                  <label>만료 시점</label>
                  <DatePicker style={{ borderRadius: '0' }} />
                </div>
              </S.ModalField>
              <S.MemoDiv>
                <label>메모</label>
                <textarea />
              </S.MemoDiv>
            </S.ModalWrapper>
            <S.ModalFooter>
              <Btn01 text="닫기" bdC="#ddd" onClick={props.onClickCloseModal} />
              <Btn01
                text="추가하기"
                color="#fff"
                bgC={styleSet.colors.primary}
                bdC={styleSet.colors.primary}
              />
            </S.ModalFooter>
          </form>
        </FallingModal>
      )}

      {props.isSelect ? (
        <S.OptWrapper>
          <S.OptBox>
            <S.OptSelect>
              <S.DateBox>
                <S.Date>기준 일자</S.Date>
                <Space direction="vertical">
                  <DatePicker
                    style={{
                      borderRadius: '0',
                      padding: '0.4rem 1rem',
                    }}
                    defaultValue={dayjs(new Date())}
                    onChange={props.onChangeDate}
                  />
                </Space>
              </S.DateBox>
              <Select03
                filterInit={props.filterInit}
                setFilterInit={props.setFilterInit}
              />
            </S.OptSelect>
            <Select01 data={props.organizationsData} role="organization" left />
          </S.OptBox>
          <S.OptBox>
            <S.OptSelect>
              <Switch01
                text={'기준 일자까지만 계산'}
                init={props.init}
                setInit={props.setInit}
              />
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
              <S.DateBox>
                <S.Date>기준 일자</S.Date>
                <Space direction="vertical">
                  <DatePicker
                    style={{ borderRadius: '0', padding: '0.4rem 1rem' }}
                    defaultValue={dayjs(new Date())}
                    onChange={props.onChangeDate}
                  />
                </Space>
              </S.DateBox>
              <Select03 />
            </S.OptSelect>
            <Select01 data={props.organizationsData} role="organization" left />
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
            <li>산정 기간</li>
            <li>총 휴가 일수</li>
            <li>사용한 휴가 일수</li>
            <li>남은 일수</li>
          </S.EmployeeUl>
          {props.optionalFetch()}
        </S.UlWrapper>
      ) : (
        <S.UlWrapper>
          <S.ListUl>
            <li>직원</li>
            <li>발생 시점</li>
            <li>만료 시점</li>
            <li>발생 일수</li>
            <li>사용한 휴가 일수</li>
            <li>남은 휴가 일수</li>
            <li>메모</li>
          </S.ListUl>
          <S.ListUl>
            <li>에스쿱스</li>
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
