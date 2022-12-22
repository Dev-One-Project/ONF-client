import { gql } from '@apollo/client';

export const FETCH_V_ISSUES = gql`
  query fetchVacationIssues($companyId: String!) {
    fetchVacationIssues(companyId: $companyId) {
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
      #   organization {
      #     id
      #   }
    }
  }
`;

export const FETCH_V_I_DELETE = gql`
  query fetchVacationIssueWithDelete {
    fetchVacationIssueWithDelete {
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

export const FETCH_V_I_BASE_DATE = gql`
  query fetchVacationIssueBaseDate($baseDate: DateTime!, $companyId: String!) {
    fetchVacationIssueBaseDate(baseDate: $baseDate, companyId: $companyId) {
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

export const FETCH_V_I_BASE_DATE_DELETE = gql`
  query fetchVacationIssueWithBaseDateDelete(
    $baseDate: DateTime!
    $companyId: String!
  ) {
    fetchVacationIssueWithBaseDateDelete(
      baseDate: $baseDate
      companyId: $companyId
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
