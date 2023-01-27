import { gql } from '@apollo/client';

export const FETCH_MANY_VACATION_ISSUE = gql`
  query fetchManyVacationIssue($memberId: String!) {
    fetchManyVacationIssue(memberId: $memberId) {
      id
      startingPoint
      expirationDate
      vacationAll
      description
    }
  }
`;
