import { gql } from '@apollo/client';

export const FETCH_MEMBERS = gql`
  query {
    fetchMembers {
      id
      name
      joinDate
      isJoin
      memo
      company {
        id
        memberCount
      }
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
      checkPoint
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

export const FETCH_ALL_SCHEDULE_CATEGORIES = gql`
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

export const FETCH_VACATION_CATEGORIES = gql`
  query {
    fetchVacationCategories {
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

export const FETCH_WORK_INFOS = gql`
  query {
    fetchWorkInfos {
      id
      name
      fixedLabor
      weekOffDays
      memo
      fixedLabor
      fixedHours
      fixedStandard
      fixedUnitPeriod
      fixedPeriodRange
      maximumHours
      maximumStandard
      maximumUnitPeriod
      maximumPeriodRange
      companyId
    }
  }
`;
