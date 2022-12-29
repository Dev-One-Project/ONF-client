import * as S from '../leaveAccruals.styles';
import { DatePicker, Divider } from 'antd';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Input01 from '../../../../commons/input/input01';
import Select02 from '../../../../commons/input/select02';
import Textarea from '../../../../commons/textarea';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

interface IAddLeaveAccrualsProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => void;
  onClickCloseModal: () => void;
  register: UseFormRegister<FieldValues>;
}

const AddLeaveAccruals = (props: IAddLeaveAccrualsProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <S.ModalWrapper>
        <S.ModalField>
          <div>
            <S.Label>직원</S.Label>
            <Select02
              data={['짱구', '맹구', '철수']}
              register={props.register('member')}
            />
          </div>
          <div>
            <S.Label>발생 일수</S.Label>
            <Input01 type="number" width="133px" />
          </div>
          <div>
            <S.Label>발생 시점</S.Label>
            <DatePicker style={{ borderRadius: '0' }} />
          </div>
          <div>
            <S.Label>만료 시점</S.Label>
            <DatePicker style={{ borderRadius: '0' }} />
          </div>
        </S.ModalField>
        <S.MemoBox>
          <S.Label>메모</S.Label>
          <Textarea height="4rem" register={props.register('memo')} />
        </S.MemoBox>
      </S.ModalWrapper>
      <Divider style={{ margin: '1.8rem 0 0' }} />

      <S.ModalFooter>
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
      </S.ModalFooter>
    </form>
  );
};

export default AddLeaveAccruals;
