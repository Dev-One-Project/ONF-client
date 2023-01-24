import { gql } from '@apollo/client';

export const CREATE_WORK_INFO = gql`
  mutation createWorkInfo(
    $createBasicWorkInfoInput: CreateBasicWorkInfoInput
    $createFixedLaborDaysInput: CreateFixedLaborDaysInput
    $createMaximumLaberInput: CreateMaximumLaberInput
  ) {
    createWorkInfo(
      createBasicWorkInfoInput: $createBasicWorkInfoInput
      createFixedLaborDaysInput: $createFixedLaborDaysInput
      createMaximumLaberInput: $createMaximumLaberInput
    ) {
      id
    }
  }
`;
