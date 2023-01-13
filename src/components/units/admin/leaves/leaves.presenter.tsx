import { DatePicker, Divider, Space } from 'antd';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import Check01 from '../../../commons/input/check01';
import Select01 from '../../../commons/input/select01';
import Select03 from '../../../commons/input/select03';
import dayjs from 'dayjs';
import { ILeavesPresenterProps } from './leaves.types';
import * as S from './leaves.styles';
import FallingModal from '../../../commons/modal/fallingModal';
import Select02 from '../../../commons/input/select02';
import Textarea from '../../../commons/textarea';
import LeaveOptionalFetch from './modules/leaveOptionalFetch';
import Calendar from '../../../commons/calendar/calendar';

const LeavesPresenter = (props: ILeavesPresenterProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>휴가 관리</S.H1>
        <Btn01
          text={'휴가 관리'}
          color={styleSet.colors.white}
          bgC={styleSet.colors.primary}
          onClick={props.onClickOpenModal}
        />
      </S.TopWrapper>

      {props.isCheckedChange && (
        <FallingModal
          setIsOpen={props.setIsCheckedChange}
          isOpen={props.isCheckedChange}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          width="31rem"
          title={'변경할 휴가 유형을 선택하세요'}
        >
          <form>
            <S.ModalField>
              <S.LabelBox>
                <label>휴가 유형</label>
                <Select02
                  data={props.memberData}
                  register={props.register('member')}
                />
              </S.LabelBox>
            </S.ModalField>
            <Divider style={{ margin: '1.8rem 0 0' }} />
            <S.ModalFooter>
              <div></div>
              <S.BtnBox>
                <Btn01
                  type={'button'}
                  text="닫기"
                  bdC="#ddd"
                  onClick={props.onClickCloseModal}
                />
                <Btn01
                  type={'submit'}
                  text="변경사항 저장"
                  color="#fff"
                  bgC={styleSet.colors.primary}
                  bdC={styleSet.colors.primary}
                />
              </S.BtnBox>
            </S.ModalFooter>
          </form>
        </FallingModal>
      )}

      {props.isAddModalOpen && (
        <FallingModal
          setIsOpen={props.setIsAddModalOpen}
          isOpen={props.isAddModalOpen}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          title={'휴가 관리하기'}
        >
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <S.LabelBox>
              <S.Span>직원</S.Span>
              <Select01 data={props.memberData} setState={props.setMemberArr} />
            </S.LabelBox>
            <Calendar
              selected={props.selectedDate}
              setSelected={props.setSelectedDate}
              width="766px"
              elementHeight="3.5rem"
            />
            {props.selectedDate.length > 0 ? (
              <>
                <S.LabelBox>
                  <S.Span>휴가 유형</S.Span>
                  <Select02
                    data={props.vacationCategoriesData}
                    register={props.register('vacationCategoryId')}
                    name={'vacationCategoryId'}
                    setValue={props.setValue}
                  />
                </S.LabelBox>
                <S.MemoBox>
                  <label>사유</label>
                  <Textarea
                    height="4rem"
                    register={props.register('description')}
                  />
                </S.MemoBox>
              </>
            ) : (
              <></>
            )}

            <Divider
              style={{ margin: '1.8rem 0 0', transform: 'scaleX(1.04)' }}
            />
            <S.ModalFooter>
              <div></div>
              <S.BtnBox>
                <Btn01
                  type={'button'}
                  text="닫기"
                  bdC="#ddd"
                  onClick={props.onClickCloseModal}
                />
                <Btn01
                  type={'submit'}
                  text="추가하기"
                  color="#fff"
                  bgC={styleSet.colors.primary}
                  bdC={styleSet.colors.primary}
                />
              </S.BtnBox>
            </S.ModalFooter>
          </form>
        </FallingModal>
      )}

      {props.isOpen && (
        <FallingModal
          setIsOpen={props.setIsOpen}
          isOpen={props.isOpen}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          width="31rem"
          title={'김멤버의 휴가 바꾸기 (목, 12월 22일)'}
        >
          <form>
            <S.ModalWrapper>
              <S.ModalField>
                <S.LabelBox>
                  <label>휴가 유형</label>
                  <Select02
                    data={props.memberData}
                    register={props.register('member')}
                  />
                </S.LabelBox>
                <S.LabelBox>
                  <label>휴가 기간</label>
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
                          Number(props.date.getMonth()) + 1,
                          0,
                        ),
                      ),
                    ]}
                    onChange={props.onChangeStartEndDate}
                  />
                </S.LabelBox>
                <S.MemoBox>
                  <label>사유</label>
                  <Textarea height="4rem" register={props.register('memo')} />
                </S.MemoBox>
              </S.ModalField>
              <S.LabelBox>
                <S.P>생성일자</S.P>
                <S.P>2022/12/22 16:04:45</S.P>
              </S.LabelBox>
              <S.LabelBox>
                <S.P>마지막 수정일자</S.P>
                <S.P>2022/12/28 15:57:03</S.P>
              </S.LabelBox>
            </S.ModalWrapper>
            <Divider
              style={{ margin: '1.8rem 0 0', transform: 'scaleX(1.07)' }}
            />
            <S.ModalFooter>
              <Btn01 type={'button'} text="삭제하기" bdC="#ddd" color="red" />
              <S.BtnBox>
                <Btn01
                  type={'button'}
                  text="닫기"
                  bdC="#ddd"
                  onClick={props.onClickCloseModal}
                />
                <Btn01
                  type={'button'}
                  text="변경사항 저장"
                  color="#fff"
                  bgC={styleSet.colors.primary}
                  bdC={styleSet.colors.primary}
                />
              </S.BtnBox>
            </S.ModalFooter>
          </form>
        </FallingModal>
      )}

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
                      Number(props.date.getMonth()) + 1,
                      0,
                    ),
                  ),
                ]}
                onChange={props.onChangeStartEndDate}
              />
            </Space>
            <Select03
              filterInit={props.filterInit}
              setFilterInit={props.setFilterInit}
            />
          </S.OptSelect>
          <Select01
            name={'organization'}
            setState={props.setOrganizationArr}
            data={props.organizationsData}
            defaultChecked={props.organizationArr}
            role="organization"
            left
          />
        </S.OptBox>
        {props.checkedList.length > 0 ? (
          <S.OptBox>
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
          </S.OptBox>
        ) : (
          <S.EmptyBox></S.EmptyBox>
        )}
      </S.OptWrapper>

      <S.UlWrapper>
        <S.Ul>
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
          <li>휴가 기간</li>
          <li>휴가 유형</li>
          <li>유급 시간</li>
          <li>차감 일수</li>
          <li>사유</li>
        </S.Ul>
        <LeaveOptionalFetch
          onClickList={props.onClickList}
          filterInit={props.filterInit}
          withDate={props.withDate}
          withDelete={props.withDelete}
          onCheckedElement={props.onCheckedElement}
          checkedList={props.checkedList}
        />
      </S.UlWrapper>
    </S.Container>
  );
};

export default LeavesPresenter;
