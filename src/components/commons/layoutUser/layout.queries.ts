import { gql } from '@apollo/client';

export const FETCH_MEMBER = gql`
  query fetchMember($memberId: String!) {
    fetchMember(memberId: $memberId) {
      id
      name
      phone
      joinDate
      exitDate
      memo
      isJoin
      leave
      company {
        id
      }
      roleCategory {
        id
      }
      organization {
        id
      }
    }
  }
`;
