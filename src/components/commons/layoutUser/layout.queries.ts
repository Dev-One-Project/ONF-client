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
      workDay
      workingTime
      quittingTime
      workCheckMemo
      createdAt
      updatedAt
      member {
        id
      }
      company {
        id
      }
      organization {
        id
      }
      schedule {
        id
      }
      roleCategory {
        id
      }
    }
  }
`;
