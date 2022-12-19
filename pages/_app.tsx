import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { globalStyles } from '../src/commons/styles/globalStyles';
import ApolloSetting from '../src/components/commons/apollo';
import 'antd/dist/reset.css';
import AdminLayout from '../src/components/commons/layoutAdmin';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import UserLayout from '../src/components/commons/layoutUser';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const HIDDEN_LAYOUT = ['/auth/login', '/auth/join'];

  const isUserPage = router.asPath.includes('/user');
  const hiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <ApolloSetting>
          <>
            {hiddenLayout ? (
              <Component {...pageProps} />
            ) : isUserPage ? (
              <UserLayout>
                <Component {...pageProps} />
              </UserLayout>
            ) : (
              <AdminLayout>
                <Component {...pageProps} />
              </AdminLayout>
            )}
          </>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
