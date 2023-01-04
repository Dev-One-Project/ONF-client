import styled from '@emotion/styled';
import InputLabel from '../../../../commons/inputLabel';
import Footer from './common/footer';
import { IFormProps } from './common/form.types';
import Memo from './common/memo';

const RoleCategoryForm = (props: IFormProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <InputLabel
          name="duty_name"
          type="text"
          register={props.register('duty_name')}
        >
          직무명
        </InputLabel>
        <InputLabel
          name="duty_color"
          type="color"
          register={props.register('duty_color')}
          inputWidth="1.5rem"
        >
          색깔
        </InputLabel>
        <Memo register={props.register('memo')} />
      </Wrapper>
      <Footer onCancel={props.onCancel} />
    </form>
  );
};

export default RoleCategoryForm;

const Wrapper = styled.div`
  width: 31.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
