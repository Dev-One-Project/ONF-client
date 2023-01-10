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

export const FETCH_DATE_MEMBER_WORK_CHECKS = gql`
  query fetchDateMemberWorkChecks(
    $startDate: DateTime!
    $endDate: DateTime!
    $organizationId: [String!]!
    $isActiveMember: Boolean!
  ) {
    fetchDateMemberWorkChecks(
      startDate: $startDate
      endDate: $endDate
      organizationId: $organizationId
      isActiveMember: $isActiveMember
    ) {
      id
      workDay
      workingTime
      quittingTime
      workCheckMemo
      member {
        id
        name
      }
      organization {
        id
        name
        checkPoint
      }
      roleCategory {
        id
        name
      }
      schedule {
        id
        startWorkTime
        endWorkTime
      }
    }
  }
`;

export const DELETE_MANY_WORK_CHECK = gql`
  mutation deleteManyWorkCheck($workCheckId: [String!]!) {
    deleteManyWorkCheck(workCheckId: $workCheckId)
  }
`;
