import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';

interface ITextareaProps {
  register?: UseFormRegisterReturn;
  placeholder?: string;
  id?: string;
  height?: string;
}

interface IStyle {
  height?: string;
}

const Textarea = (props: ITextareaProps) => {
  return (
    <StyledTextarea
      {...props.register}
      placeholder={props.placeholder}
      id={props.id}
      height={props.height}
    ></StyledTextarea>
  );
};

export default Textarea;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: ${(props: IStyle) => props.height || '6rem'};
  resize: none;
  padding: 0.5rem;
  outline: none;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  :focus {
    border: 1px solid ${styleSet.colors.primary};
  }
`;
