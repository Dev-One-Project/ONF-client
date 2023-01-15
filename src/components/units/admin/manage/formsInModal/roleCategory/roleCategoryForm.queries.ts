import { gql } from '@apollo/client';

export const CREATE_ROLE_CATEGORY = gql`
  mutation createRoleCategory(
    $createRoleCategoryInput: CreateRoleCategoryInput!
  ) {
    createRoleCategory(createRoleCategoryInput: $createRoleCategoryInput) {
      id
    }
  }
`;
