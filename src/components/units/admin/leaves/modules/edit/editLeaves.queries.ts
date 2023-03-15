import { gql } from '@apollo/client';

export const UPDATE_VACATION = gql`
  mutation updateVacation(
    $vacationId: String!
    $updateVacationInput: UpdateVacationInput!
  ) {
    updateVacation(
      vacationId: $vacationId
      updateVacationInput: $updateVacationInput
    ) {
      id
    }
  }
`;

export const DELETE_VACATION = gql`
  mutation deleteVacation($vacationId: String!) {
    deleteVacation(vacationId: $vacationId)
  }
`;
