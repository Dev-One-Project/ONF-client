import {
  Control,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';

export interface IFormProps {
  register: UseFormRegister<FieldValues>;
  onCancel: () => void;
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  reset: UseFormReset<FieldValues>;
  control: Control;
  editTarget: any;
  tab: string;
}
