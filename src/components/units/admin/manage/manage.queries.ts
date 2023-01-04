import { gql } from '@apollo/client';

export const FETCH_MEMBERS = gql`
  query {
    fetchMembers {
      id
      name
      joinDate
      organization {
        id
        name
      }
      roleCategory {
        id
        duty
      }
    }
  }
`;
