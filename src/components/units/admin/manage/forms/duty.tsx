import styled from '@emotion/styled';
import { Divider } from 'antd';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import Input01 from '../../../../commons/input/input01';
import Textarea from '../../../../commons/textarea';
import Footer from './common/footer';

interface IDutyFormProps {
  register: UseFormRegister<FieldValues>;
  onCancel: () => void;
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

const Duty = (props: IDutyFormProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <FormContent>
          <label htmlFor="duty">직무명</label>
          <Input01
            id="duty"
            type="text"
            register={props.register('duty_name')}
          />
        </FormContent>
        <FormContent>
          <label htmlFor="color">색깔</label>{' '}
          <ColorPicker
            id="color"
            type="color"
            {...props.register('duty_color')}
          />
        </FormContent>
        <FormContent>
          <label htmlFor="memo">메모</label>
          <Textarea id="memo" register={props.register('duty_memo')} />
        </FormContent>
      </Wrapper>
      <Divider style={{ marginBottom: '0.5rem' }} />
      <Footer onCancel={props.onCancel} />
    </form>
  );
};

export default Duty;

const Wrapper = styled.div`
  width: 31.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  & > label {
    min-width: 5rem;
  }

  :last-of-type {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ColorPicker = styled.input``;
