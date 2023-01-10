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
      # color
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

export const FETCH_ALL_SCHEDULE_CATEGORY = gql`
  query {
    fetchAllScheduleCategories {
      id
      name
      color
      memo
      isOvertime
      isNotHolidayWork
    }
  }
`;

export const FETCH_ALL_SCHEDULE_TEMPLATE = gql`
  query {
    fetchAllScheduleTemplates {
      id
      name
      breakTime
      startTime
      endTime
      colorCode
      memo
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

// export const FETCH_WAGES = gql`
//   query {

//   }
// `

export const FETCH_VACATION_CATEGORYS = gql`
  query {
    fetchVacationCategorys {
      id
      name
      timeOption
      memo
      paidTime
      deductionDays
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
