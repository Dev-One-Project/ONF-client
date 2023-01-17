import { gql, useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import { Divider } from 'antd';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import {
  IMutation,
  IWorkCheckOutput,
} from '../../../../../../commons/types/generated/types';
import Btn01 from '../../../../../commons/button/btn01';
import Check01 from '../../../../../commons/input/check01';
import Textarea from '../../../../../commons/textarea';
import AttendancesInput from '../../modules/attendancesInput';

interface ICheckedEditAttendanceListProps {
  onCancel?: () => void;
  checkedList: IWorkCheckOutput[];
}

interface IStyedDate {
  memoChecked?: boolean;
}

const UPDATE_MANY_WORK_CHECK = gql`
  mutation updateManyWorkCheck(
    $workCheckId: [String!]!
    $updateWorkCheckInput: UpdateWorkCheckInput!
  ) {
    updateManyWorkCheck(
      workCheckId: $workCheckId
      updateWorkCheckInput: $updateWorkCheckInput
    ) {
      id
    }
  }
`;

const CheckedEditAttendanceList = (props: ICheckedEditAttendanceListProps) => {
  const [startTimeChecked, setStartTimeChecked] = useState(false);
  const [endTimeChecked, setEndTimeChecked] = useState(false);
  const [memoChecked, setMemoChecked] = useState(false);

  const { register, handleSubmit } = useForm();

  const [updateManyWorkCheck] = useMutation<
    Pick<IMutation, 'updateManyWorkCheck'>
  >(UPDATE_MANY_WORK_CHECK);

  const onSubmitCheckedEdit = async (data: any) => {
    try {
      if (data.startHour && data.startMin)
        data.workingTime = `${String(data.startHour)}${String(data.startMin)}`;
      if (data.endHour && data.endMin)
        data.quittingTime = `${String(data.endHour)}${String(data.endMin)}`;
      const { startHour, startMin, endHour, endMin, ...rest } = data;
      console.log(rest);
      await updateManyWorkCheck({
        variables: {
          workCheckId: props.checkedList.map((checked) => checked.id),
          updateWorkCheckInput: { ...rest },
        },
      });
    } catch (error) {
      alert('다시 ㄱㄱㄱ');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitCheckedEdit)}>
      <P>* 선택된 휴가 발생 건들을 일괄 수정할 수 있습니다.</P>
      <ModalField>
        <ModalBoxRow>
          <div>
            <Check01 onChange={() => setStartTimeChecked((prev) => !prev)} />
            <label>출근 시간</label>
          </div>
          {startTimeChecked ? (
            <InputBox>
              <AttendancesInput register={register('startHour')} />
              <span>:</span>
              <AttendancesInput register={register('startMin')} />
            </InputBox>
          ) : (
            <LabelText>변화 없음</LabelText>
          )}
        </ModalBoxRow>
        <ModalBoxRow>
          <div>
            <Check01 onChange={() => setEndTimeChecked((prev) => !prev)} />
            <label>퇴근 시간</label>
          </div>
          {endTimeChecked ? (
            <InputBox>
              <AttendancesInput register={register('endHour')} />
              <span>:</span>
              <AttendancesInput register={register('endMin')} />
            </InputBox>
          ) : (
            <LabelText>변화 없음</LabelText>
          )}
        </ModalBoxRow>
        <ModalBoxRow memoChecked={memoChecked}>
          <div>
            <Check01 onChange={() => setMemoChecked((prev) => !prev)} />
            <label>근무노트</label>
          </div>
          {memoChecked ? (
            <Textarea register={register('workCheckMemo')} />
          ) : (
            <LabelText>변화 없음</LabelText>
          )}
        </ModalBoxRow>
      </ModalField>
      <Divider style={{ margin: '1.8rem 0 0', transform: 'scaleX(1.075)' }} />
      <ModalFooter>
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
      </ModalFooter>
    </form>
  );
};

export default CheckedEditAttendanceList;

const ModalField = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 27rem;
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & input {
    height: 32px;
  }
`;

const ModalBoxRow = styled.div`
  display: flex;
  flex-direction: ${(props: IStyedDate) =>
    props.memoChecked ? 'column' : 'row'} !important;
  align-items: center;
  label:nth-of-type(2) {
    margin-right: 1rem;
  }
  & > div {
    height: 2rem;
    width: ${(props: IStyedDate) => (props.memoChecked ? '100%' : '')};
  }
  & > input {
    width: 5rem;
    border-radius: 0;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0 0;
  gap: 1rem;
`;

const P = styled.p`
  color: #777;
  font-size: ${styleSet.fontSizes.small};
  margin-bottom: 1rem;
`;

const LabelText = styled.label`
  color: #666;
  font-size: ${styleSet.fontSizes.small};
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  span:nth-of-type(2) {
    font-size: 0.6rem;
    color: #888;
  }
`;
