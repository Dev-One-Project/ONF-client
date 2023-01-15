import { gql } from '@apollo/client';

export const FETCH_ACCOUNT = gql`
  query fetchAccount {
    fetchAccount {
      id
      email
      roles
      name
      phone
      member {
        id
        name
        phone
        joinDate
        exitDate
        memo
        isJoin
        leave
      }

      company {
        id
        name
        logoUrl
        rules
        memberCount
        membership
        createdAt
        updatedAt
        deletedAt
        globalConfig {
          id
        }
      }
    }
  }
`;

export const CERATE_START_WORK_CHECK = gql`
  mutation createStartWorkCheck {
    createStartWorkCheck {
      id
    }
  }
`;

export const CREATE_END_WORK_CHECK = gql`
  mutation createEndWorkCheck($workCheckId: String!) {
    createEndWorkCheck(workCheckId: $workCheckId) {
      id
    }
  }
`;

export const FETCH_MY_WORK_CHECK = gql`
  query fetchMemberWorkChecks($startDate: DateTime!, $endDate: DateTime!) {
    fetchMemberWorkChecks(startDate: $startDate, endDate: $endDate) {
      id
      workDay
    }
  }
`;

export const CHECK_WORK_STATUS = gql`
  query checkWorkStatus {
    checkWorkStatus
  }
`;
