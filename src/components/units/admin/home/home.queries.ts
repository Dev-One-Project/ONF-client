import { gql } from '@apollo/client';

export const FETCH_ALL_NOTICE_BOARDS = gql`
  query fetchAllNoticeBoards {
    fetchAllNoticeBoards {
      id
      preface
      title
      createdAt
    }
  }
`;
