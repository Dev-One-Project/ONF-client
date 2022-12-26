import * as yup from 'yup';
import { ChangeEvent } from 'react';
import { IFormData } from './join.types';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import JoinPresenter from './join.presenter';
import { CREATE_ACCOUNT } from './join.queries';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ErrorModal,
  SuccessModal,
} from '../../../commons/modal/sweetAlertModal';

const schma = yup.object({
  email: yup.string().email('이메일 형식 확인').required('필수'),
  password: yup
    .string()
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/, '필수')
    .required('필수'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 같지 않습니다.')
    .required('필수'),
  allTerms: yup.boolean().oneOf([true], '필수'),
});

const JoinContainer = () => {
  const [createAccount] = useMutation(CREATE_ACCOUNT);

  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schma),
    mode: 'onChange',
  });

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setValue('allTerms', e.target.checked);
  };

  const onClickSubmit = async (data: IFormData) => {
    try {
      await createAccount({
        variables: {
          email: String(data.email),
          password: String(data.password),
        },
      });
      SuccessModal('회원가입이 완료되었습니다.');
    } catch (error) {
      ErrorModal('다시 진행해주세요.');
    }
  };

  return (
    <>
      <JoinPresenter
        onClickSubmit={onClickSubmit}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onChangeChecked={onChangeChecked}
      />
    </>
  );
};

export default JoinContainer;
