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

export const FETCH_MEMBERS = gql`
  query {
    fetchMembers {
      id
      name
    }
  }
`;

export const FETCH_VACATION_CATEGORIES = gql`
  query {
    fetchVacationCategories {
      id
      name
      paidTime
      deductionDays
    }
  }
`;

export const CREATE_VACATION = gql`
  mutation createVacation($createVacationInput: CreateVacationInput!) {
    createVacation(createVacationInput: $createVacationInput) {
      id
    }
  }
`;

export const FETCH_VACATION = gql`
  query fetchVacation($vacationId: String!) {
    fetchVacation(vacationId: $vacationId) {
      id
      vacationStartDate
      vacationEndDate
      description
      member {
        id
        name
      }
      vacationCategory {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
