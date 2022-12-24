import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import Textarea from '../../../../../commons/textarea';
import Label from './label';

interface IMemoProps {
  placeholder?: string;
  id?: string;
  register?: UseFormRegisterReturn;
  textareaHeight?: string;
}

const Memo = (props: IMemoProps) => {
  return (
    <MemoWrapper>
      <Label for={props.id}>메모</Label>
      <Textarea
        height={props.textareaHeight}
        placeholder={props.placeholder}
        id={props.id}
        register={props.register}
      ></Textarea>
    </MemoWrapper>
  );
};

export default Memo;

const MemoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
