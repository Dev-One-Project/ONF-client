import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';

interface IInput02Props {
  type?: string | undefined;
  register?: UseFormRegisterReturn;
  placeholder?: string;
  width?: string;
  id?: string;
  disabled?: boolean;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string | number;
  center?: boolean;
}

interface IStyle {
  width: string;
}

type IInputProps = {
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  edit?: boolean;
};

const Input02 = (props: IInput02Props) => {
  return (
    <>
      {props.center ? (
        <Input
          id={props.id}
          width={props.width || '100%'}
          type={props.type}
          {...props.register}
          placeholder={props.placeholder}
          disabled={props.disabled || false}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
          style={{ textAlign: 'center' }}
        />
      ) : (
        <Input
          id={props.id}
          width={props.width || '100%'}
          type={props.type}
          {...props.register}
          placeholder={props.placeholder}
          disabled={props.disabled || false}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
        />
      )}
      <Error className="error" error={props.error}>
        {props.error}
      </Error>
    </>
  );
};

export default Input02;

const Input = styled.input`
  width: ${(props: IStyle) => props.width};
  border-radius: 2px;
  padding: 0.5rem;
  border: 1px solid ${styleSet.colors.gray};
  transition: all 0.3s ease;
  outline: none;

  :focus {
    border: 1px solid ${styleSet.colors.primary};
  }
`;

const Error = styled.p`
  position: absolute;
  top: 50%;
  right: 1rem;
  color: ${styleSet.colors.primary};
  transition: all 0.35s;

  transform: ${(P: IInputProps) =>
    P.error ? `translate(0, -50%)` : `translate(5rem, -50%)`};
  opacity: ${(P: IInputProps) => (P.error ? `1` : `0`)};
`;
