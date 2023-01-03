import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface ICompanyPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickUpdate: (data: any) => void;
  fetchCompanyDetail: {
    id: string;
    name: string;
    logoUrl: string;
    rules: string;
  };
  fetchGlobalConfig: {
    id: string;
    allowedCheckInBefore: number;
    allowedCheckInAfter: number;
    isWorkLogEnabled: boolean;
    isVacationEnabled: boolean;
    isScheduleEnabled: boolean;
    isCheckInEnabled: boolean;
    isCheckOutEnabled: boolean;
  };
}
