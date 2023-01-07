import { gql } from '@apollo/client';

export const FETCH_MEMBERS = gql`
  query {
    fetchMembers {
      id
      name
      joinDate
      organization {
        id
        name
      }
      roleCategory {
        id
        name
      }
    }
  }
`;

export const FETCH_ORGANIZATIONS = gql`
  query {
    fetchOrganizations {
      id
      name
    }
  }
`;

export const FETCH_ROLE_CATEGORIES = gql`
  query {
    fetchRoleCategories {
      id
      name
      colorCode
    }
  }
`;
