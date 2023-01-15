import { gql } from '@apollo/client';

export const CREATE_SCHEDULE_CATEGORY = gql`
  mutation createScheduleCategory(
    $createScheduleCategoryInput: CreateScheduleCategoryInput!
  ) {
    createScheduleCategory(
      createScheduleCategoryInput: $createScheduleCategoryInput
    ) {
      id
    }
  }
`;
