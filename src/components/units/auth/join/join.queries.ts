import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $email: String!
    $password: String!
    $phone: String!
    $name: String!
    $createCompanyInput: CreateCompanyInput
    $invitationCode: String
  ) {
    createAccount(
      email: $email
      password: $password
      name: $name
      phone: $phone
      createCompanyInput: $createCompanyInput
      invitationCode: $invitationCode
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
