import { gql } from '@apollo/client';

export const FETCH_ACCOUNT = gql`
  query fetchAccount {
    fetchAccount {
      id
      email
      roles
      name
      phone
      member {
        id
      }
      company {
        id
      }
    }
  }
`;
