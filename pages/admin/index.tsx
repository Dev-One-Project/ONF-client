import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdminPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/admin/home');
  }, []);
  return <div>안녕해새요~ 어떻게 들어오션나용</div>;
};

export default AdminPage;
