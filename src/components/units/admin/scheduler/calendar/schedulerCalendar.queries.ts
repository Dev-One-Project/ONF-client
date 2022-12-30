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
  query fetchRoleCategories {
    fetchRoleCategories {
      id
      duty
    }
  }
`;

export const FETCH_ORGANIZATIONS = gql`
  query fetchOrganizations {
    fetchOrganizations {
      id
      name
    }
  }
`;

export const FETCH_MEMBERS = gql`
  query fetchMembers {
    fetchMembers {
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
