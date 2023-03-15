import { DatePicker, Divider } from 'antd';
import Select02 from '../../../../../commons/input/select02';
import * as S from '../../leaves.styles';
import dayjs from 'dayjs';
import Textarea from '../../../../../commons/textarea';
import Btn01 from '../../../../../commons/button/btn01';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import { IEditLeavesPresenterProps } from './editLeaves.types';
import { Controller } from 'react-hook-form';
import { getDateAll } from '../../../../../../commons/utils/getDate';

const EditLeavesPresenter = (props: IEditLeavesPresenterProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <S.ModalWrapper>
        <S.ModalField>
          <S.LabelBox>
            <label>휴가 유형</label>
            <Select02
              data={props.vacationCategoriesData}
              register={props.register('vacationCategoryId')}
              name={'vacationCategoryId'}
              setValue={props.setValue}
              defaultValue={props.data?.fetchVacation.vacationCategory?.id}
            />
          </S.LabelBox>
          <S.LabelBox>
            <label>휴가 기간</label>
            <Controller
              control={props.control}
              name="vacationStartEndDate"
              defaultValue={[
                dayjs(props.data?.fetchVacation.vacationStartDate),
                dayjs(props.data?.fetchVacation.vacationEndDate),
              ]}
              render={({ field: { onChange } }) => (
                <DatePicker.RangePicker
                  style={{
                    borderRadius: '0',
                    padding: '0.4rem 1rem',
                  }}
                  defaultValue={[
                    dayjs(props.data?.fetchVacation.vacationStartDate),
                    dayjs(props.data?.fetchVacation.vacationEndDate),
                  ]}
                  onChange={(value: any) => onChange(value)}
                />
              )}
            />
          </S.LabelBox>
          <S.MemoBox>
            <label>사유</label>
            <Textarea height="4rem" register={props.register('description')} />
          </S.MemoBox>
        </S.ModalField>
        <S.LabelBox>
          <S.P>생성일자</S.P>
          <S.P>{getDateAll(props.data?.fetchVacation.createdAt)}</S.P>
        </S.LabelBox>
        {props.data?.fetchVacation.createdAt !==
        props.data?.fetchVacation.updatedAt ? (
          <S.LabelBox>
            <S.P>마지막 수정일자</S.P>
            <S.P>{getDateAll(props.data?.fetchVacation.updatedAt)}</S.P>
          </S.LabelBox>
        ) : (
          <></>
        )}
      </S.ModalWrapper>
      <Divider style={{ margin: '1.8rem 0 0', transform: 'scaleX(1.07)' }} />
      <S.ModalFooter>
        <Btn01
          type={'button'}
          text="삭제하기"
          bdC="#ddd"
          color="red"
          onClick={props.onClickDelete}
        />
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
  );
};

export default EditLeavesPresenter;
