import { gql } from '@apollo/client';

export const CREATE_ORGANIZATION = gql`
  mutation createOrganization(
    $createOrganizationInput: CreateOrganizationInput!
  ) {
    createOrganization(createOrganizationInput: $createOrganizationInput) {
      id
    }
  }
`;
