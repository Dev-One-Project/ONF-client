import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $password: String!) {
    createAccount(email: $email, password: $password) {
      id
      email
      role
      member {
        id
      }
      company {
        id
      }
    }
  }
`;
