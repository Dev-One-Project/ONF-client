import { gql } from '@apollo/client';

export const FETCH_ACCOUNT = gql`
  query {
    fetchAccount {
      id
      email
      name
      phone
      roles
    }
  }
`;

export const CHANGE_ACCOUNT = gql`
  mutation changeAccount($name: String, $phone: String) {
    changeAccount(name: $name, phone: $phone) {
      id
      name
    }
  }
`;
