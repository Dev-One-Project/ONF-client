import styled from '@emotion/styled';
import InputLabel from '../../../../commons/inputLabel';
import Footer from './common/footer';
import { IFormProps } from './common/form.types';
import Memo from './common/memo';

const OrganizationForm = (props: IFormProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <InputLabel
          type="text"
          name="organization"
          register={props.register('organization')}
        >
          지점명
        </InputLabel>
        <InputLabel
          type="select"
          name="location"
          setValue={props.setValue}
          register={props.register('location')}
          data={[
            { id: '123', name: '패파1' },
            { id: '1234', name: '패파2' },
          ]}
        >
          출퇴근 장소들
        </InputLabel>
        <Memo register={props.register('memo')} />
      </Wrapper>
      <Footer onCancel={props.onCancel} />
    </form>
  );
};

export default OrganizationForm;

const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
