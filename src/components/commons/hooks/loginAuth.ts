import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ErrorModal } from '../modal/sweetAlertModal';

export function LoginAuth() {
  const router = useRouter();
  useEffect(() => {
    if (sessionStorage.getItem('accessToken')) {
      ErrorModal('이미 로그인상태입니다.');
      void router.push('/user/schedule');
    }
  }, []);
}
