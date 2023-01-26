import { gql } from '@apollo/client';

export const FETCH_MEMBERS = gql`
  query {
    fetchMembers {
      id
      name
    }
  }
`;

export const DELETE_VACATION_ISSUE = gql`
  mutation deleteVacationIssue($vacationIssueId: String!) {
    deleteVacationIssue(vacationIssueId: $vacationIssueId)
  }
`;

export const UPDATE_VACATION_ISSUE = gql`
  mutation updateVacationIssue(
    $vacationIssueId: String!
    $updateVacationIssueInput: UpdateVacationIssueInput!
  ) {
    updateVacationIssue(
      vacationIssueId: $vacationIssueId
      updateVacationIssueInput: $updateVacationIssueInput
    ) {
      id
    }
  }
`;
