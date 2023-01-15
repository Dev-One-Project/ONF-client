import { gql } from '@apollo/client';
import { GraphQLClient } from 'graphql-request';

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      'https://onf-backend.brian-hong.tech/graphql',
      { credentials: 'include' },
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken;
    sessionStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
