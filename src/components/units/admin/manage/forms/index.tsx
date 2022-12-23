import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import AttendanceLocation from './attendanceLocation';
import Duty from './duty';
import MemberForm from './member';
import OrganizationForm from './oranization';
import Wages from './wages';

interface IFormProps {
  register: UseFormRegister<FieldValues>;
  onCancel: () => void;
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  tab: string;
}

const Form = (props: IFormProps) => {
  let divergence: JSX.Element = <></>;

  if (props.tab === '직원') divergence = <MemberForm {...props} />;
  if (props.tab === '지점') divergence = <OrganizationForm {...props} />;
  if (props.tab === '출퇴근 장소')
    divergence = <AttendanceLocation {...props} />;
  if (props.tab === '직무') divergence = <Duty {...props} />;
  if (props.tab === '근로 정보') divergence = <Wages {...props} />;
  return divergence;
};

export default Form;
