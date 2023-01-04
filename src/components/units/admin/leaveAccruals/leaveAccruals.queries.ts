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
