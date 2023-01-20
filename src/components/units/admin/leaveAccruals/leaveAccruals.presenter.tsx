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
import AddLeaveAccruals from './modules/addLeaveAccruals';
import EmployeeOptionalFetch from './modules/employeeOptionalFetch';
import ListOptionalFetch from './modules/listOptionalFetch';
import Check01 from '../../../commons/input/check01';
import CheckedEditLeaveAccruals from './modules/checkedEditLeaveAccruals';
import EditLeaveAccruals from './modules/editLeaveAccruals';

const LeaveAccrualsPresenter = (props: ILeaveAccrualsPresenterProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>휴가 발생</S.H1>
        <Btn01
          text={'+ 휴가 발생'}
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
            onClickCloseModal={props.onClickCloseModal}
            setAniMode={props.setAniMode}
          />
        </FallingModal>
      )}

      {props.isSelectList && (
        <FallingModal
          setIsOpen={props.setIsSelectList}
          isOpen={props.isSelectList}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          title={`${props.listMemberName}의 휴가 발생 건 수정하기`}
        >
          <>
            {props.vBase?.fetchVacationIssueBaseDate
              .flat()
              .map(
                (data) =>
                  data.id === props.listMemberId && (
                    <EditLeaveAccruals
                      onClickCloseModal={props.onClickCloseModal}
                      key={data.id}
                      data={data}
                    />
                  ),
              )}
          </>
        </FallingModal>
      )}

      {props.isCheckedChange && (
        <FallingModal
          setIsOpen={props.setIsCheckedChange}
          isOpen={props.isCheckedChange}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          width="31rem"
          title="휴가 발생 건 수정"
        >
          <CheckedEditLeaveAccruals
            onCancel={props.onClickCloseModal}
            checkedList={props.checkedList}
            setAniMode={props.setAniMode}
          />
        </FallingModal>
      )}

      {props.isSelectOpen && (
        <FallingModal
          setIsOpen={props.setIsSelectOpen}
          isOpen={props.isSelectOpen}
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
                  <S.SelectListUl onClick={() => props.setIsMemberOpen(true)}>
                    <li>12</li>
                    <li>2022-12-30</li>
                    <li>2023-12-30</li>
                    <li>메롱</li>
                  </S.SelectListUl>
                </S.UlWrapper>
                <S.AccrualsBox>
                  <strong onClick={() => props.setIsMemberOpen(true)}>
                    휴가 발생하기
                  </strong>
                </S.AccrualsBox>
              </S.Left>
              {props.isMemberOpen ? (
                <S.Right>
                  <AddLeaveAccruals
                    onClickCloseModal={() => props.setIsMemberOpen(false)}
                    setAniMode={props.setAniMode}
                  />
                </S.Right>
              ) : (
                <S.PBox>
                  <p>선택된 휴가 발생 건이 없습니다.</p>
                </S.PBox>
              )}
            </S.ModalBox>
            <Divider
              style={{ margin: '0.7rem 0 0', transform: 'scaleX(1.027)' }}
            />
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
              setState={props.setOrganizationArr}
              data={props.organizationsData}
              role="organization"
              left
              defaultChecked={props.organizationArr}
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
              <Select03
                filterInit={props.filterInit}
                setFilterInit={props.setFilterInit}
              />
            </S.OptSelect>
            <Select01
              setState={props.setOrganizationArr}
              data={props.organizationsData}
              defaultChecked={props.organizationArr}
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
          </S.OptBox>
          <S.OptBox>
            {props.checkedList.length > 0 ? (
              <S.OptSelect>
                <Btn01
                  text={'휴가 유형 변경'}
                  bdC={styleSet.colors.gray}
                  onClick={props.onClickCheckedChange}
                />
                <Btn01
                  text={'모두 삭제'}
                  bdC={styleSet.colors.gray}
                  color={styleSet.colors.fail}
                  onClick={props.onClickDeleteChecked}
                />
              </S.OptSelect>
            ) : (
              <S.EmptyBox></S.EmptyBox>
            )}
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
          <EmployeeOptionalFetch
            init={props.init}
            filterInit={props.filterInit}
            vDetailDelete={props.vDetailDelete}
            vDetail={props.vDetail}
            vBase={props.vBase}
            vBaseDelete={props.vBaseDelete}
            onClickOpenSelectModal={props.onClickOpenSelectModal}
          />
        </S.UlWrapper>
      ) : (
        <S.UlWrapper>
          <S.ListUl>
            <li>
              <Check01
                checked={
                  props.checkedList.length === 0
                    ? false
                    : props.checkedList.length === props.dataLength
                }
                onChange={(event) => props.onCheckedAll(event.target.checked)}
              />
            </li>
            <li>직원</li>
            <li>발생 시점</li>
            <li>만료 시점</li>
            <li>발생 일수</li>
            <li>사용한 휴가 일수</li>
            <li>남은 휴가 일수</li>
            <li>메모</li>
          </S.ListUl>
          {/* {console.log(props.vDetail)} */}
          <ListOptionalFetch
            init={props.init}
            filterInit={props.filterInit}
            vDetailDelete={props.vDetailDelete}
            vDetail={props.vDetail}
            vBase={props.vBase}
            vBaseDelete={props.vBaseDelete}
            onClickOpenModal={props.onClickOpenSelectListModal}
            onCheckedElement={props.onCheckedElement}
            checkedList={props.checkedList}
          />
        </S.UlWrapper>
      )}
    </S.Container>
  );
};

export default LeaveAccrualsPresenter;
