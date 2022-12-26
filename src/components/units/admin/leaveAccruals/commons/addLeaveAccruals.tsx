import * as S from '../leaveAccruals.styles';
import { DatePicker } from 'antd';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Input01 from '../../../../commons/input/input01';
import Select02 from '../../../../commons/input/select02';
import Textarea from '../../../../commons/textarea';
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';

interface IAddLeaveAccrualsProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => void;
  onClickCloseModal: () => void;
}

const AddLeaveAccruals = (props: IAddLeaveAccrualsProps) => {
  return (
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
          <Textarea height="4rem" />
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
  );
};

export default AddLeaveAccruals;
