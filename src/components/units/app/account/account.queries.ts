import { gql } from '@apollo/client';

export const FETCH_ACCOUNT = gql`
  query fetchAccount {
    fetchAccount {
      id
      email
      name
      phone
    }
  }
`;

export const CHANGE_ACCOUNT = gql`
  mutation changeAccount($name: String, $phone: String) {
    changeAccount(name: $name, phone: $phone) {
      id
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword(
    $password: String!
    $newPassword: String!
    $newPassword: String!
  ) {
    changePassword(
      password: $password
      newPassword: $newPassword
      checkPassword: $newPassword
    )
  }
`;

export const SEND_TO_VALIDATION_CODE = gql`
  mutation sendToValidationCode($newEmail: String!) {
    sendToValidationCode(newEmail: $newEmail)
  }
`;

export const CHECK_VALIDATION_CODE = gql`
  mutation checkValidationCode($validationCode: String!) {
    checkValidationCode(validationCode: $validationCode)
  }
`;

export const CHANGE_EMAIL = gql`
  mutation changeEmail($newEmail: String!, $password: String!) {
    changeEmail(newEmail: $newEmail, password: $password) {
      id
    }
  }
`;
