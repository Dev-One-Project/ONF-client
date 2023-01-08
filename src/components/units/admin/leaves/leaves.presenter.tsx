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

const LeavesPresenter = (props: ILeavesPresenterProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>휴가 관리</S.H1>
        <Btn01
          text={'휴가 관리'}
          color={styleSet.colors.white}
          bgC={styleSet.colors.primary}
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
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <S.ModalField>
              <S.LabelBox>
                <label>휴가 유형</label>
                <Select02
                  data={[
                    { id: '123', name: '짱구' },
                    { id: '456', name: ' 맹구' },
                    { id: '789', name: '철수' },
                  ]}
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

      {props.isOpen && (
        <FallingModal
          setIsOpen={props.setIsOpen}
          isOpen={props.isOpen}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          width="31rem"
          title={'김멤버의 휴가 바꾸기 (목, 12월 22일)'}
        >
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <S.ModalWrapper>
              <S.ModalField>
                <S.LabelBox>
                  <label>휴가 유형</label>
                  <Select02
                    data={[
                      { id: '123', name: '짱구' },
                      { id: '456', name: ' 맹구' },
                      { id: '789', name: '철수' },
                    ]}
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
            <Divider style={{ margin: '1.8rem 0 0' }} />
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
            role="organization"
            left
          />
        </S.OptBox>
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
            />
          </S.OptSelect>
          {/* <S.SelectBox>목록</S.SelectBox> */}
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper>
        <S.Ul>
          <li>
            <Check01 />
          </li>
          <li>직원</li>
          <li>휴가 기간</li>
          <li>휴가 유형</li>
          <li>유급 시간</li>
          <li>차감 일수</li>
          <li>사유</li>
        </S.Ul>
        <S.Ul onClick={props.onClickList}>
          <li>
            <Check01 />
          </li>
          <li>에스쿱스</li>
          <li>12월 5일 (월) 10:00 - 14:00</li>
          <li>반차</li>
          <li>4h</li>
          <li>0.5일</li>
          <li>매롱</li>
        </S.Ul>
      </S.UlWrapper>
    </S.Container>
  );
};

export default LeavesPresenter;
