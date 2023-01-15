import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ErrorModal } from '../modal/sweetAlertModal';

export default function useAuth() {
  const router = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem('accessToken')) {
      ErrorModal('로그인 후 이용하싩 수 있습니다.');
      void router.push('/auth/login');
    }
  }, []);
}
