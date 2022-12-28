import styled from '@emotion/styled';
import Footer from './common/footer';
import { IFormProps } from './common/form.types';
import InputLabel from '../../../../commons/inputLabel';
import Memo from './common/memo';

const LeaveTypes = (props: IFormProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <InputLabel
          register={props.register('name')}
          type="text"
          name="name"
          labelWidth="4rem"
        >
          이름
        </InputLabel>
        <InputLabel
          data={[
            { id: '1234', name: '패파' },
            { id: '1234', name: '우리집' },
          ]}
          register={props.register('organization')}
          setValue={props.setValue}
          type="select"
          name="organization"
          labelWidth="4rem"
        >
          지점
        </InputLabel>
        <InputLabel
          data={[
            { id: '1234', name: '프론트엔드' },
            { id: '1234', name: '백엔드' },
          ]}
          register={props.register('duty')}
          setValue={props.setValue}
          type="select"
          name="duty"
          labelWidth="4rem"
        >
          직무
        </InputLabel>
        <InputLabel
          type="number"
          name="paidTime"
          labelWidth="4rem"
          inputWidth="5rem"
        >
          유급 시간(h)
        </InputLabel>
        <InputLabel
          type="number"
          name="deductionDays"
          labelWidth="4rem"
          inputWidth="5rem"
        >
          차감 일수
        </InputLabel>
        <Memo register={props.register('memo')} />
      </Wrapper>
      <Footer onCancel={props.onCancel} />
    </form>
  );
};

export default LeaveTypes;

const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
