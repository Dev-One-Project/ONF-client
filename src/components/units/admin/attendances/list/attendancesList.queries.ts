import { gql } from '@apollo/client';

export const CREATE_ADMIN_WORK_CHECK = gql`
  mutation createAdminWorkCheck($createWorkCheckInput: CreateWorkCheckInput!) {
    createAdminWorkCheck(createWorkCheckInput: $createWorkCheckInput) {
      id
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

export const FETCH_LIST_TYPE_SCHEDULE = gql`
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
        name
        startTime
        endTime
      }
      scheduleCategory {
        id
        name
      }
    }
  }
`;

export const DELETE_MANY_WORK_CHECK = gql`
  mutation deleteManyWorkCheck($workCheckId: [String!]!) {
    deleteManyWorkCheck(workCheckId: $workCheckId)
  }
`;
