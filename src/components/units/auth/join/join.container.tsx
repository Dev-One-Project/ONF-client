import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import JoinPresenter from './join.presenter';
import { CREATE_ACCOUNT } from './join.queries';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormData } from './join.types';
import {
  ErrorModal,
  SuccessModal,
} from '../../../commons/modal/sweetAlertModal';

const schma = yup.object({
  email: yup.string().email('이메일 형식 확인').required('필수'),
  password: yup.string().required('필수'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 같지 않습니다.')
    .required('필수'),
});

const JoinContainer = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schma),
    mode: 'onChange',
  });

  const [createAccount] = useMutation(CREATE_ACCOUNT);

  const onClickSubmit = async (data: IFormData) => {
    try {
      const result = createAccount({
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
      />
    </>
  );
};

export default JoinContainer;
