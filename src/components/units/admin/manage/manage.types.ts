import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IManagePresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}
