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

export const UPDATE_ORGANIZATION = gql`
  mutation updateOrganization(
    $organizationId: String!
    $updateOrganizationInput: UpdateOrganizationInput!
  ) {
    updateOrganization(
      organizationId: $organizationId
      updateOrganizationInput: $updateOrganizationInput
    ) {
      id
    }
  }
`;
