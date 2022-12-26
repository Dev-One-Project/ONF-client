import { gql } from '@apollo/client';

export const FETCH_VACATION_ISSUE_DETAIL_DELETE = gql`
  query fetchVacationIssueDetailDateDelete(
    $baseDate: DateTime!
    $companyId: String!
    $organizationId: [String!]!
  ) {
    fetchVacationIssueDetailDateDelete(
      baseDate: $baseDate
      companyId: $companyId
      organizationId: $organizationId
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
  ) {
    fetchVacationIssueDetailDate(
      baseDate: $baseDate
      companyId: $companyId
      organizationId: $organizationId
    ) {
      id
      startingPoint
      expirationDate
      vacationAll
      useVacation
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
  ) {
    fetchVacationIssueBaseDate(
      baseDate: $baseDate
      companyId: $companyId
      organizationId: $organizationId
    ) {
      id
      startingPoint
      expirationDate
      vacationAll
      useVacation
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
  ) {
    fetchVacationIssueWithBaseDateDelete(
      baseDate: $baseDate
      companyId: $companyId
      organizationId: $organizationId
    ) {
      id
      startingPoint
      expirationDate
      vacationAll
      useVacation
      member {
        id
        name
      }
    }
  }
`;

export const FETCH_ORGANIZATIONS = gql`
  query fetchOrganizations($companyId: String!) {
    fetchOrganizations(companyId: $companyId) {
      id
      name
      # color
    }
  }
`;
