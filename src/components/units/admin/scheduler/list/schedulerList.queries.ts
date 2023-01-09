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
        name
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
        name
      }
      scheduleTemplate {
        id
        colorCode
      }
      scheduleCategory {
        id
        name
        color
      }
    }
  }
`;

export const FETCH_ROLE_CATEGORIES = gql`
  query fetchRoleCategories {
    fetchRoleCategories {
      id
      name
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
        name
        colorCode
      }
      organization {
        id
        name
      }
      company {
        id
        name
      }
    }
  }
`;

export const FETCH_SCHEDULE_TEMPLATE = gql`
  query fetchAllScheduleTemplates {
    fetchAllScheduleTemplates {
      id
      name
      startTime
      endTime
      scheduleCategory {
        id
        name
      }
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
