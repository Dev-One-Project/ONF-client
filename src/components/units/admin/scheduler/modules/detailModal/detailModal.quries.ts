import { gql } from '@apollo/client';

export const DELETE_SCHEDULE = gql`
  mutation deleteOneSchedule($scheduleId: String!) {
    deleteOneSchedule(scheduleId: $scheduleId)
  }
`;

export const UPDATE_SCHEDULE = gql`
  mutation updateOneSchedule(
    $scheduleId: String!
    $updateScheduleInput: UpdateScheduleInput!
  ) {
    updateOneSchedule(
      scheduleId: $scheduleId
      updateScheduleInput: $updateScheduleInput
    ) {
      id
      # startWorkTime
      # endWorkTime
      # memo
      # date
      # member {
      #   id
      #   name
      # }
      # organization {
      #   id
      #   name
      # }
      # roleCategory {
      #   id
      #   duty
      # }
      # scheduleTemplate {
      #   id
      #   colorCode
      # }
      # scheduleCategory {
      #   id
      #   scheduleCategoryName
      #   colorCode
      # }
    }
  }
`;
