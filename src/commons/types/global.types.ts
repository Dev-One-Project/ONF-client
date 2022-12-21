import { MutableRefObject } from 'react';
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormReturn,
} from 'react-hook-form';

export interface GeneralInput {
  register?: (UseFormRegister<FieldValues> & UseFormRegisterReturn) | undefined;
}

export interface GeneralLayout {
  children?: React.ReactNode & JSX.Element;
}

export interface GeneralModalProps {
  children?: React.ReactNode & JSX.Element;
  handleSubmit?:
    | (UseFormHandleSubmit<FieldValues> & UseFormReturn)
    | UseFormReturn
    | UseFormHandleSubmit<FieldValues>
    | undefined;
}

export interface IEditor {
  contentsRef?: MutableRefObject<any> | undefined;
  onChangeContents?: (text: string) => void;
  register?: UseFormRegister<FieldValues>;
  handleSubmit?: UseFormHandleSubmit<FieldValues>;
  formState?: FormState<FieldValues>;
}
