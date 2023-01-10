import { gql } from '@apollo/client';

export const FETCH_MEMBER_WORK_CHECKS = gql`
  query fetchMemberWorkChecks($startDate: DateTime!, $endDate: DateTime!) {
    fetchMemberWorkChecks(startDate: $startDate, endDate: $endDate) {
      id
      workDay
      workingTime
      quittingTime
      workCheckMemo
      createdAt
      schedule {
        id
        startWorkTime
        endWorkTime
      }
      member {
        id
        name
      }
      organization {
        id
        name
      }
      roleCategory {
        id
        name
      }
    }
  }
`;
