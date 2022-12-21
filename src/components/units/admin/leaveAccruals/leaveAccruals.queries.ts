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

export const FETCH_ORGANIZATIONS = gql`
  query fetchOrganizations($companyId: String!) {
    fetchOrganizations(companyId: $companyId) {
      id
      name
      # color
    }
  }
`;
