import { gql } from '@apollo/client';

export const FETCH_MEMBERS = gql`
  query {
    fetchMembers {
      id
      name
      joinDate
      isJoin
      memo
      # organization {
      #   id
      #   name
      # }
      # roleCategory {
      #   id
      #   name
      # }
    }
  }
`;

export const FETCH_ORGANIZATIONS = gql`
  query {
    fetchOrganizations {
      id
      name
      address
      lat
      lng
      description
      color
      # scheduleTemplate {
      #   id
      #   name
      #   startTime
      #   endTime
      #   colorCode
      # }
    }
  }
`;

export const FETCH_ROLE_CATEGORIES = gql`
  query {
    fetchRoleCategories {
      id
      name
      memo
      colorCode
      # scheduleTemplate {
      #   id
      #   name
      #   startTime
      #   endTime
      #   colorCode
      # }
    }
  }
`;
