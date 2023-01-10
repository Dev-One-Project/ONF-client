import { gql } from '@apollo/client';

export const FETCH_MEMBER_WORK_CHECKS = gql`
  query fetchMemberWorkChecks($startDate: DateTIme!, $endDate: DateTime!) {
    fetchMemberWorkChecks(startDate: $startDate, endDate: $endDate) {
      id
      workDay
      workingTime
      quittingTime
      workCheckMemo
      isConfirmed
      createdAt
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
