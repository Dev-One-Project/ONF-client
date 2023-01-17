import { gql } from '@apollo/client';

export const CREATE_SCHEDULE_TEMPLATE = gql`
  mutation createScheduleTemplate(
    $createScheduleTemplateInput: CreateScheduleTemplateInput!
  ) {
    createScheduleTemplate(
      createScheduleTemplateInput: $createScheduleTemplateInput
    ) {
      id
    }
  }
`;
