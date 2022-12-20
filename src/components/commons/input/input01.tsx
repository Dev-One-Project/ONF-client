import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';

interface IInput01Props {
  type?: string | undefined;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  width?: string;
  id?: string;
}

interface IStyle {
  width: string;
}

const Input01 = (props: IInput01Props) => {
  return (
    <Input
      id={props.id}
      width={props.width || '100%'}
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
};

export default Input01;

const Input = styled.input`
  width: ${(props: IStyle) => props.width};
  border-radius: 2px;
  padding: 0.6rem;
  border: 1px solid ${styleSet.colors.gray};
  transition: all 0.3s ease;
  outline: none;
  :focus {
    border: 1px solid ${styleSet.colors.primary};
  }
`;
