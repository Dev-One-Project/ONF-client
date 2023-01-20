import { gql } from '@apollo/client';

export const FETCH_ORGANIZATIONS = gql`
  query fetchOrganizations {
    fetchOrganizations {
      id
      name
      # color
    }
  }
`;

export const FETCH_MONTH_WORK_CHECKS = gql`
  query fetchMonthWorkChecks(
    $organizationId: [String!]!
    $month: String!
    $isActiveMember: Boolean!
  ) {
    fetchMonthWorkChecks(
      organizationId: $organizationId
      month: $month
      isActiveMember: $isActiveMember
    ) {
      member {
        id
        name
      }
      data {
        id
        workDay
        workingTime
        quittingTime
      }
    }
  }
`;

export const FETCH_COMPANY_DETAIL = gql`
  query {
    fetchCompanyDetail {
      id
      createdAt
    }
  }
`;
