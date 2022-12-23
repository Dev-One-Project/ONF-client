import styled from '@emotion/styled';
import Input01 from '../../../../commons/input/input01';
import Select01 from '../../../../commons/input/select01';
import Footer from './common/footer';
import { IFormProps } from './common/form.types';

const OrganizationForm = (props: IFormProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <FormContent>
          <span>지점명</span>
          <Input01
            type="text"
            width="180px"
            register={props.register('organization')}
          />
        </FormContent>
        <FormContent>
          <span>출퇴근 장소들</span>
          <Select01
            setValue={props.setValue}
            register={props.register('location')}
            data={['패파', '희현님집']}
          />
        </FormContent>
        <FormContent>
          <span>메모</span>
          <Textarea
            placeholder="메모 입력"
            {...props.register('memo')}
          ></Textarea>
        </FormContent>
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

const FormContent = styled.div`
  display: flex;
  align-items: center;
  & > span {
    min-width: 100px;
  }

  :nth-of-type(3) {
    flex-direction: column;
    align-items: flex-start;
  }
  gap: 1rem;
`;

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  padding: 1rem;
  outline: none;
`;
