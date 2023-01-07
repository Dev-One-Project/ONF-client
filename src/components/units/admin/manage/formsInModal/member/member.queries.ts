import { gql } from '@apollo/client';

export const CREATE_MEMBER = gql`
  mutation createMember($createMemberInput: CreateMemberInput!) {
    createMember(createMemberInput: $createMemberInput) {
      id
      name
    }
  }
`;

export const UPDATE_MEMBER = gql`
  mutation updateMember(
    $memberId: String!
    $updateMemberInput: UpdateMemberInput!
  ) {
    updateMember(memberId: $memberId, updateMemberInput: $updateMemberInput) {
      id
      name
    }
  }
`;

export const SOFT_DELETE_MEMBER = gql`
  mutation softDeleteMember($memberId: String!) {
    softDeleteMember(memberId: $memberId)
  }
`;
