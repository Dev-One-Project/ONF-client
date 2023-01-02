import { gql } from '@apollo/client';

export const FETCH_VACATION_ISSUE_DETAIL_DELETE = gql`
  query fetchVacationIssueDetailDateDelete(
    $baseDate: DateTime!
    $companyId: String!
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueDetailDateDelete(
      baseDate: $baseDate
      companyId: $companyId
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
    $companyId: String!
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueDetailDate(
      baseDate: $baseDate
      companyId: $companyId
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
    $companyId: String!
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueBaseDate(
      baseDate: $baseDate
      companyId: $companyId
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
    $companyId: String!
    $organizationId: [String!]!
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchVacationIssueWithBaseDateDelete(
      baseDate: $baseDate
      companyId: $companyId
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

export const FETCH_ACCOUNT = gql`
  query fetchAccount {
    fetchAccount {
      id
      company {
        id
      }
    }
  }
`;
