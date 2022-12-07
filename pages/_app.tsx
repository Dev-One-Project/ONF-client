import { Global } from '@emotion/react';
import { AppProps } from 'next/app';
import { globalStyles } from '../src/commons/styles/globalStyles';
import ApolloSetting from '../src/components/commons/apollo';
import 'antd/dist/reset.css';
import UserLayout from '../src/components/commons/layoutUser';
import AdminLayout from '../src/components/commons/layoutAdmin';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const USER_LAYOUT = ['/user', '/user/vacation'];
  const HIDDEN_LAYOUT = ['/auth/login', '/auth/join'];

  const isUserPage = USER_LAYOUT.includes(router.asPath);
  const hiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <ApolloSetting>
      <>
        {router.asPath === HIDDEN_LAYOUT[0] ||
        router.asPath === HIDDEN_LAYOUT[1] ? (
          <>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
          </>
        ) : isUserPage ? (
          <UserLayout>
            <>
              <Global styles={globalStyles} />
              <Component {...pageProps} />
            </>
          </UserLayout>
        ) : (
          <AdminLayout>
            <>
              <Global styles={globalStyles} />
              <Component {...pageProps} />
            </>
          </AdminLayout>
        )}
      </>
    </ApolloSetting>
  );
}

export default MyApp;
