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

export const FETCH_MAINPAGE_WORK_CHECK = gql`
  query fetchMainPageWorkCheck {
    fetchMainPageWorkCheck {
      working
      tardy
      notworking
      vacation
    }
  }
`;
