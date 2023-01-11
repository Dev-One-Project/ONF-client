import { gql } from '@apollo/client';

export const FETCH_VACATION_ISSUE_DETAIL_DELETE = gql`
  query fetchVacationIssueDetailDateDelete(
    $baseDate: DateTime!
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueDetailDateDelete(
      baseDate: $baseDate
      organizationId: $organizationId
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      startingPoint
      expirationDate
      vacationAll
      useVacation
      remaining
      description
      member {
        id
        name
        leave
      }
    }
  }
`;

export const FETCH_VACATION_ISSUE_DETAIL = gql`
  query fetchVacationIssueDetailDate(
    $baseDate: DateTime!
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueDetailDate(
      baseDate: $baseDate
      organizationId: $organizationId
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      startingPoint
      expirationDate
      vacationAll
      useVacation
      remaining
      description
      member {
        id
        name
        leave
      }
    }
  }
`;

export const FETCH_VACATION_ISSUE_BASE = gql`
  query fetchVacationIssueBaseDate(
    $baseDate: DateTime!
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueBaseDate(
      baseDate: $baseDate
      organizationId: $organizationId
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      startingPoint
      expirationDate
      vacationAll
      useVacation
      remaining
      description
      member {
        id
        name
        leave
      }
    }
  }
`;

export const FETCH_VACATION_ISSUE_BASE_DELETE = gql`
  query fetchVacationIssueWithBaseDateDelete(
    $baseDate: DateTime!
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueWithBaseDateDelete(
      baseDate: $baseDate
      organizationId: $organizationId
      startDate: $startDate
      endDate: $endDate
    ) {
      id
      startingPoint
      expirationDate
      vacationAll
      useVacation
      remaining
      description
      member {
        id
        name
        leave
      }
    }
  }
`;

export const FETCH_ORGANIZATIONS = gql`
  query fetchOrganizations {
    fetchOrganizations {
      id
      name
      # color
    }
  }
`;

export const DELETE_MANY_VACATION_ISSUE = gql`
  mutation deleteManyVacationIssue($vacationIssueId: [String!]!) {
    deleteManyVacationIssue(vacationIssueId: $vacationIssueId)
  }
`;

export const CREATE_VACATION_ISSUE = gql`
  mutation createVacationIssue(
    $createVacationIssueInput: CreateVacationIssueInput!
  ) {
    createVacationIssue(createVacationIssueInput: $createVacationIssueInput) {
      id
    }
  }
`;
