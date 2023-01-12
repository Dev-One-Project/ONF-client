import { gql } from '@apollo/client';

export const FETCH_USER_SCHEDULE = gql`
  query fetchMonthMemberSchedule($memberId: [String!]!) {
    fetchMonthMemberSchedule(memberId: $memberId) {
      id
      startWorkTime
      endWorkTime
      roleCategory {
        id
        name
        colorCode
      }
      scheduleCategory {
        id
        name
        color
      }
    }
  }
`;

export const FETCH_ACCOUNT = gql`
  query fetchAccount {
    fetchAccount {
      id
      member {
        id
      }
      company {
        id
      }
    }
  }
`;
