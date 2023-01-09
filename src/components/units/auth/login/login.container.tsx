import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import * as yup from 'yup';
import { accessTokenState } from '../../../../commons/store';
import { ErrorModal } from '../../../commons/modal/sweetAlertModal';
import LoginPresenter from './login.presenter';
import { LOGIN } from './login.queries';
import { IFormData } from './login.types';

const schma = yup.object({
  email: yup.string().email('이메일 형식 확인').required('필수'),
  password: yup
    .string()
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/, '필수')
    .required('필수'),
  terms: yup.boolean(),
});

const LoginContainer = () => {
  const router = useRouter();
  const [login] = useMutation(LOGIN);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schma),
    mode: 'onChange',
  });

  const onClickLogin = async (data: IFormData) => {
    try {
      const result = await login({
        variables: { ...data },
      });

      const accessToken = result.data?.login;
      if (!accessToken) {
        ErrorModal('로그인 실패. 다시 시도 바랍니다.');
        return;
      }
      setAccessToken(accessToken);
      sessionStorage.setItem('accessToken', accessToken);
      // void router.push('/user/requests');
      await router.push('/admin/manage/organization');
    } catch (error) {
      ErrorModal('다시 로그인해주세요.');
    }
  };

  return (
    <LoginPresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
    />
  );
};
export default LoginContainer;
