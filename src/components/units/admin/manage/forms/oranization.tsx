import styled from '@emotion/styled';
import { Divider } from 'antd';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Input01 from '../../../../commons/input/input01';
import Select01 from '../../../../commons/input/select01';

interface IOrganizationFormProps {
  register: UseFormRegister<FieldValues>;
  onCancel: () => void;
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

const OrganizationForm = (props: IOrganizationFormProps) => {
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
          <Select01 data={['패파', '희현님집']} />
        </FormContent>
        <FormContent>
          <span>메모</span>
          <Textarea
            placeholder="메모 입력"
            {...props.register('memo')}
          ></Textarea>
        </FormContent>
      </Wrapper>
      <Divider style={{ marginBottom: '0.5rem' }} />
      <Footer>
        <div></div>
        <ButtonBox>
          <Btn01
            onClick={props.onCancel}
            type="button"
            text="닫기"
            bdC="#ddd"
          />
          <Btn01
            text="저장"
            color="#fff"
            bgC={styleSet.colors.primary}
            bdC={styleSet.colors.primary}
          />
        </ButtonBox>
      </Footer>
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
