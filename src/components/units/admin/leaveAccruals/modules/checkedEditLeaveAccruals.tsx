import { gql, useMutation } from '@apollo/client';
import { DatePicker, Divider } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { styleSet } from '../../../../../commons/styles/styleSet';
import {
  IMutation,
  IVacationIssue,
} from '../../../../../commons/types/generated/types';
import Btn01 from '../../../../commons/button/btn01';
import Check01 from '../../../../commons/input/check01';
import Input01 from '../../../../commons/input/input01';
import Textarea from '../../../../commons/textarea';
import * as S from '../leaveAccruals.styles';
import dayjs from 'dayjs';

interface ICheckedEditLeaveAccrualsProps {
  onCancel: () => void;
  checkedList: IVacationIssue[];
  setAniMode: Dispatch<SetStateAction<boolean>>;
}

const UPDATE_MANY_VACATION_ISSUE = gql`
  mutation UpdateManyVacationsIssue(
    $vacationIssueId: [String!]!
    $updateVacationIssueInput: UpdateVacationIssueInput
  ) {
    UpdateManyVacationsIssue(
      vacationIssueId: $vacationIssueId
      updateVacationIssueInput: $updateVacationIssueInput
    ) {
      id
    }
  }
`;

const CheckedEditLeaveAccruals = (props: ICheckedEditLeaveAccrualsProps) => {
  const [dayChecked, setDayChecked] = useState(false);
  const [startDateChecked, setStartDateChecked] = useState(false);
  const [endDateChecked, setEndDateChecked] = useState(false);
  const [memoChecked, setMemoChecked] = useState(false);

  const { handleSubmit, register, control } = useForm();

  const [updateManyVacationIssue] = useMutation<
    Pick<IMutation, 'UpdateManyVacationsIssue'>
  >(UPDATE_MANY_VACATION_ISSUE);

  const onSubmitCheckedEdit = async (data: any) => {
    try {
      if (data.vacationAll) data.vacationAll = Number(data.vacationAll);
      console.log(data);
      await updateManyVacationIssue({
        variables: {
          vacationIssueId: props.checkedList.map((checked) => checked.id),
          updateVacationIssueInput: data,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      props.setAniMode(false);
    } catch (error) {
      alert('다시 ㄱ');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitCheckedEdit)}>
      <S.P>* 선택된 휴가 발생 건들을 일괄 수정할 수 있습니다.</S.P>
      <S.ModalField>
        <S.ModalBoxRow>
          <div>
            <Check01 onChange={() => setDayChecked((prev: boolean) => !prev)} />
            <label>발생 일수</label>
          </div>
          {dayChecked ? (
            <Input01 type="number" register={register('vacationAll')} />
          ) : (
            <S.LabelText>변화 없음</S.LabelText>
          )}
        </S.ModalBoxRow>
        <S.ModalBoxRow>
          <div>
            <Check01
              onChange={() => setStartDateChecked((prev: boolean) => !prev)}
            />
            <label>발생 시점</label>
          </div>
          {startDateChecked ? (
            <Controller
              control={control}
              name="startingPoint"
              defaultValue={new Date()}
              render={({ field: { onChange } }) => (
                <DatePicker
                  style={{ borderRadius: '0' }}
                  defaultValue={dayjs(new Date())}
                  onChange={(value: any) => onChange(value?.$d)}
                />
              )}
            />
          ) : (
            <S.LabelText>변화 없음</S.LabelText>
          )}
        </S.ModalBoxRow>
        <S.ModalBoxRow>
          <div>
            <Check01
              onChange={() => setEndDateChecked((prev: boolean) => !prev)}
            />
            <label>발생 만료</label>
          </div>
          {endDateChecked ? (
            <Controller
              control={control}
              name="expirationDate"
              defaultValue={new Date()}
              render={({ field: { onChange } }) => (
                <DatePicker
                  style={{ borderRadius: '0' }}
                  defaultValue={dayjs(new Date())}
                  onChange={(value: any) => onChange(value?.$d)}
                />
              )}
            />
          ) : (
            <S.LabelText>변화 없음</S.LabelText>
          )}
        </S.ModalBoxRow>
        <S.ModalBoxRow memoChecked={memoChecked}>
          <div>
            <Check01
              onChange={() => setMemoChecked((prev: boolean) => !prev)}
            />
            <label>메모</label>
          </div>
          {memoChecked ? (
            <Textarea register={register('description')} />
          ) : (
            <S.LabelText>변화 없음</S.LabelText>
          )}
        </S.ModalBoxRow>
      </S.ModalField>
      <Divider style={{ margin: '1.8rem 0 0', transform: 'scaleX(1.075)' }} />
      <S.ModalFooter>
        <div></div>
        <Btn01
          type={'button'}
          text="닫기"
          bdC="#ddd"
          onClick={props.onCancel}
        />
        <Btn01
          type={'submit'}
          text="변경사항 저장"
          color="#fff"
          bgC={styleSet.colors.primary}
          bdC={styleSet.colors.primary}
        />
      </S.ModalFooter>
    </form>
  );
};

export default CheckedEditLeaveAccruals;
