import { gql } from '@apollo/client';

export const FETCH_SCHEDULE_LIST = gql`
  query fetchListTypeSchedule(
    $startDate: DateTime!
    $endDate: DateTime!
    $organizationId: [String!]!
  ) {
    fetchListTypeSchedule(
      startDate: $startDate
      endDate: $endDate
      organizationId: $organizationId
    ) {
      id
      startWorkTime
      endWorkTime
      memo
      date
      member {
        id
      }
      # company {
      #   id
      #   name
      # }
      organization {
        id
        name
      }
      roleCategory {
        id
        duty
      }
      scheduleTemplate {
        id
        colorCode
      }
      scheduleCategory {
        id
        scheduleCategoryName
        colorCode
      }
    }
  }
`;

export const FETCH_ROLE_CATEGORIES = gql`
  query fetchRoleCategories($companyId: String!) {
    fetchRoleCategories(companyId: $companyId) {
      id
      duty
    }
  }
`;

export const FETCH_ORGANIZATIONS = gql`
  query fetchOrganizations($companyId: String!) {
    fetchOrganizations(companyId: $companyId) {
      id
      name
    }
  }
`;

export const FETCH_ACCOUNT = gql`
  query fetchAccount {
    fetchAccount {
      id
      company {
        id
        name
      }
    }
  }
`;

export const FETCH_MEMBERS = gql`
  query fetchMembers($companyId: String!) {
    fetchMembers(companyId: $companyId) {
      id
      name
      roleCategory {
        id
        duty
        colorCode
      }
      organization {
        id
        name
        color
      }
      company {
        id
        name
      }
    }
  }
`;
