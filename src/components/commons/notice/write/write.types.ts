import { MutableRefObject } from 'react';
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface IWritePresenterProps {
  contentsRef: MutableRefObject<any> | undefined;
  onChangeContents: (text: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
}

export interface IEditorPageProps {
  contentsRef: MutableRefObject<any> | undefined;
  onChangeContents: (text: any) => void;
  initialValue?: string | undefined;
}
