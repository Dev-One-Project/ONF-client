import { gql } from '@apollo/client';

export const FETCH_VACATION_ISSUE_DETAIL_DELETE = gql`
  query fetchVacationIssueDetailDateDelete(
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueDetailDateDelete(
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
      }
    }
  }
`;

export const FETCH_VACATION_ISSUE_DETAIL = gql`
  query fetchVacationIssueDetailDate(
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueDetailDate(
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
