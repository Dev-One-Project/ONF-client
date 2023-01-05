import { MutableRefObject } from 'react';
import {
  FormState,
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
} from 'react-hook-form';

export interface IWritePresenterProps {
  contentsRef: MutableRefObject<any> | undefined;
  onChangeContents: (text: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickCreate: (data: any) => Promise<void>;
  onClickUpdate: (data: any) => Promise<void>;
  createUpdateRef?: any;
  // createUpdateRef:
  //   | LegacyRef<HTMLButtonElement | undefined>
  //   | MutableRefObject<HTMLButtonElement | undefined>;
  isEdit?: boolean;
  fetchContents: string;
}

export interface IEditorPageProps {
  contentsRef: MutableRefObject<any> | undefined;
  onChangeContents: (text: any) => void;
  initialValue?: string | undefined;
}

export interface IWriteContainerProps {
  createUpdateRef: MutableRefObject<HTMLButtonElement | undefined>;
}
