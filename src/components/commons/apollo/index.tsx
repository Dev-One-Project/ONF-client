import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  // fromPromise,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
// import { useEffect } from "react";
// import { onError } from "@apollo/client/link/error";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     setAccessToken(newAccessToken);
  //   });
  // }, []);

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         return fromPromise(
  //           getAccessToken().then((newAccessToken) => {
  //             setAccessToken(newAccessToken);
  //             operation.setContext({
  //               headers: {
  //                 ...operation.getContext().headers,
  //                 Authorization: `Bearer ${newAccessToken}`,
  //               },
  //             });
  //           })
  //         ).flatMap(() => forward(operation));
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({
    uri: 'https://onf-backend.brian-hong.tech/graphql',
    // headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  // prettier-ignore
  return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
    )
}
