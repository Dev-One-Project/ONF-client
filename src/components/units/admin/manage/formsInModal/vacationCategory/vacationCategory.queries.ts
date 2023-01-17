import { gql } from '@apollo/client';

export const CREATE_VACATION_CATEGORY = gql`
  mutation createVacationCategory(
    $createVacationCategoryInput: CreateVacationCategoryInput!
  ) {
    createVacationCategory(
      createVacationCategoryInput: $createVacationCategoryInput
    ) {
      id
    }
  }
`;
