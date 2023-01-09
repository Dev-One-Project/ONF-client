import styled from '@emotion/styled';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { IQuery } from '../../../../../../commons/types/generated/types';
import InputLabel from '../../../../../commons/inputLabel';
import Footer from '../common/footer';
import Memo from '../common/memo';

interface OrganizationFormPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onCancel: () => void;
  data?: {
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
  };
}

const OrganizationFormPresenter = (props: OrganizationFormPresenterProps) => {
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

export default OrganizationFormPresenter;

const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
