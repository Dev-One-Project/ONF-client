import { DatePicker, Divider, Space } from 'antd';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import dayjs from 'dayjs';
import Select01 from '../../../commons/input/select01';
import Select03 from '../../../commons/input/select03';
import FallingModal from '../../../commons/modal/fallingModal';
import Switch01 from '../../../commons/switch/switch01';
import * as S from './leaveAccruals.styles';
import { ILeaveAccrualsPresenterProps } from './leaveAccruals.types';
import AddLeaveAccruals from './commons/addLeaveAccruals';

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
          width="31rem"
          title="휴가 발생 건 추가하기"
        >
          <AddLeaveAccruals
            handleSubmit={props.handleSubmit}
            onSubmit={props.onSubmit}
            onClickCloseModal={props.onClickCloseModal}
          />
        </FallingModal>
      )}

      {props.isSelectOpen && (
        <FallingModal
          setIsOpen={props.setIsSelectOpen}
          isOpen={props.setIsOpen}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          title="휴가 발생 건 관리"
        >
          <>
            <S.ModalBox>
              <S.Left>
                <S.UlWrapper>
                  <S.SelectListUl>
                    <li>발생 일수</li>
                    <li>발생 시점</li>
                    <li>만료 시점</li>
                    <li>메모</li>
                  </S.SelectListUl>
                  <S.SelectListUl onClick={props.onClickOpenList}>
                    <li>12</li>
                    <li>2022-12-30</li>
                    <li>2023-12-30</li>
                    <li>메롱</li>
                  </S.SelectListUl>
                </S.UlWrapper>
                <S.AccrualsBox>
                  <strong onClick={props.onClickOpenList}>휴가 발생하기</strong>
                </S.AccrualsBox>
              </S.Left>
              {props.isMemberOpen ? (
                <S.Right>
                  <AddLeaveAccruals
                    handleSubmit={props.handleSubmit}
                    onSubmit={props.onSubmit}
                    onClickCloseModal={props.onClickCloseList}
                  />
                </S.Right>
              ) : (
                <S.PBox>
                  <p>선택된 휴가 발생 건이 없습니다.</p>
                </S.PBox>
              )}
            </S.ModalBox>
            <Divider style={{ margin: '0.7rem 0 0' }} />
            <S.ModalFooter>
              <Btn01 text="닫기" onClick={props.onClickCloseModal} bdC="#ddd" />
            </S.ModalFooter>
          </>
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
            <Select01
              data={props.organizationsData}
              role="organization"
              left
            />
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
                        props.date.getFullYear(),
                        props.date.getMonth(),
                        1,
                      ),
                    ),
                    dayjs(
                      new Date(
                        props.date.getFullYear(),
                        props.date.getMonth() + 1,
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
            <Select01
              data={props.organizationsData}
              role="organization"
              left
            />
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
          <S.ListUl onClick={props.onClickOpenModal}>
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
