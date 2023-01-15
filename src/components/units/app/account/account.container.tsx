import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  ErrorModal,
  SuccessModal,
} from '../../../commons/modal/sweetAlertModal';
import AccountPresenter from './account.presenter';
import {
  CHANGE_ACCOUNT,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHECK_VALIDATION_CODE,
  FETCH_ACCOUNT,
  SEND_TO_VALIDATION_CODE,
} from './account.queries';

const AccountContainer = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [isValitationBtn, setIsValidationBtn] = useState(false);
  const [isEmailValitation, setIsEmailValidation] = useState(false);
  const { data: fetchAccount } = useQuery(FETCH_ACCOUNT);

  const [changeAccount] = useMutation(CHANGE_ACCOUNT);
  const [changePassword] = useMutation(CHANGE_PASSWORD);
  const [sendToValidationCode] = useMutation(SEND_TO_VALIDATION_CODE);
  const [checkValidationCode] = useMutation(CHECK_VALIDATION_CODE);
  const [changeEmail] = useMutation(CHANGE_EMAIL);

  useEffect(() => {
    setValue('name', fetchAccount?.fetchAccount.name);
    setValue('email', fetchAccount?.fetchAccount.email);
    setValue('phone', fetchAccount?.fetchAccount.phone);
  }, [setValue, fetchAccount]);

  const onClickUpdateAccount = async (inputData: FieldValues) => {
    try {
      await changeAccount({
        variables: {
          name: inputData.name,
          phone: inputData.phone,
        },
      });
      SuccessModal('계정 정보 수정 완료');
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  const onClickSendCode = async (inputData: FieldValues) => {
    try {
      await sendToValidationCode({
        variables: {
          newEmail: inputData.newEmail,
        },
      });
      SuccessModal('발송 완료');
      setIsValidationBtn(true);
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };
  const onClickCheckCode = async (inputData: FieldValues) => {
    try {
      await checkValidationCode({
        variables: {
          validationCode: inputData.validationCode,
        },
      });
      SuccessModal('코드 확인 완료');
      setIsEmailValidation(true);
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };
  const onClickUpdateEmail = async (inputData: FieldValues) => {
    try {
      await changeEmail({
        variables: {
          newEmail: inputData.newEmail,
          password: inputData.password,
        },
      });
      SuccessModal('이메일 변경 완료');
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  const onClickUpdatePassword = async (inputData: FieldValues) => {
    try {
      await changePassword({
        variables: {
          password: inputData.password,
          newPassword: inputData.newPassword,
          checkPassword: inputData.checkPassword,
        },
      });
      SuccessModal('비밀번호 변경 완료');
    } catch (error) {
      if (error instanceof Error) ErrorModal(error.message);
    }
  };

  return (
    <AccountPresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickUpdateAccount={onClickUpdateAccount}
      onClickUpdateEmail={onClickUpdateEmail}
      onClickUpdatePassword={onClickUpdatePassword}
      fetchAccount={fetchAccount}
      isValitationBtn={isValitationBtn}
      onClickSendCode={onClickSendCode}
      onClickCheckCode={onClickCheckCode}
      isEmailValitation={isEmailValitation}
    />
  );
};

export default AccountContainer;
