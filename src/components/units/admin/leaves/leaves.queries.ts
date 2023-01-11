import { gql } from '@apollo/client';

export const FETCH_VACATION_WITH_DATE = gql`
  query fetchVacationWithDate(
    $startDate: DateTime
    $endDate: DateTime
    $organizationId: [String!]!
  ) {
    fetchVacationWithDate(
      startDate: $startDate
      endDate: $endDate
      organizationId: $organizationId
    ) {
      id
      vacationEndDate
      vacationStartDate
      description
      member {
        id
        name
      }
      vacationCategory {
        id
        name
        paidTime
        deductionDays
      }
    }
  }
`;

export const FETCH_VACATION_WITH_DELETE = gql`
  query fetchVacationWithDelete(
    $startDate: DateTime
    $endDate: DateTime
    $organizationId: [String!]!
  ) {
    fetchVacationWithDelete(
      startDate: $startDate
      endDate: $endDate
      organizationId: $organizationId
    ) {
      id
      vacationEndDate
      vacationStartDate
      description
      member {
        id
        name
      }
      vacationCategory {
        id
        name
        paidTime
        deductionDays
      }
    }
  }
`;

export const DELETE_MANY_VACATION = gql`
  mutation deleteManyVacation($vacationId: [String!]!) {
    deleteManyVacation(vacationId: $vacationId)
  }
`;
