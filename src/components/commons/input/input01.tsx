import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';

interface IInput01Props {
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

const Input01 = (props: IInput01Props) => {
  const [preview, setPreview] = useState<any>('');

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      const fileResult = e.target?.result;
      console.log(e.target);
      if (!fileResult) return;
      setPreview(fileResult);
    };
  };

  return (
    <>
      {props.type === 'file' ? (
        <>
          {preview && (
            <Div>
              <Img src={preview} alt={'회사로고 미리보기'} />
            </Div>
          )}
        </>
      ) : null}
      <Input
        id={props.id}
        width={props.width || '100%'}
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
        disabled={props.disabled || false}
        onChange={onChangeFile}
      />
      <Error className="error" error={props.error}>
        {props.error}
      </Error>
    </>
  );
};

export default Input01;

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

const Div = styled.div`
  padding: 0 0 0 1.5rem;
`;

const Img = styled.img`
  width: 7rem;
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
