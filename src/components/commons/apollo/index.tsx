import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from '@apollo/client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { accessTokenState } from '../../../commons/store';
import { getAccessToken } from '../../../commons/accessToken';

interface IApolloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] =
    useRecoilState<string>(accessTokenState);

  useEffect(() => {
    void getAccessToken().then((newAccessToken: string) => {
      setAccessToken(newAccessToken);
      sessionStorage.setItem('accessToken', newAccessToken);
    });
  }, [setAccessToken]);
  console.log(accessToken, 'accessToken');

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          return fromPromise(
            getAccessToken().then((newAccessToken: string) => {
              setAccessToken(newAccessToken);
              sessionStorage.setItem('accessToken', newAccessToken);
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            }),
          ).flatMap(() => forward(operation));
        }
      }
    } else return forward(operation);
  });

  const uploadLink = createUploadLink({
    uri: 'https://onf-backend.brian-hong.tech/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
