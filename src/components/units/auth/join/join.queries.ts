import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $email: String!
    $password: String!
    $name: String!
    $phone: String!
  ) {
    createAccount(
      email: $email
      password: $password
      name: $name
      phone: $phone
    ) {
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
