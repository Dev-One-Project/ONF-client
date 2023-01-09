import { gql } from '@apollo/client';

export const CREATE_SCHEDULE = gql`
  mutation createSchedule(
    $dates: [DateTime!]!
    $createScheduleInput: CreateScheduleInput!
  ) {
    createSchedule(dates: $dates, createScheduleInput: $createScheduleInput) {
      id
    }
  }
`;
