import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export interface IWagesProps {
  register: UseFormRegister<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  onCancel: () => void;
}
