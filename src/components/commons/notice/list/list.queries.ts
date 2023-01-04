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

export const FETCH_ONE_NOTICE_BOARD = gql`
  query fetchOneNoticeBoard($noticeBoardId: String!) {
    fetchOneNoticeBoard(noticeBoardId: $noticeBoardId) {
      id
      preface
      title
      contents
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_NOTICE_BOARD = gql`
  mutation deleteNoticeBoard($noticeBoardId: String!) {
    deleteNoticeBoard(noticeBoardId: $noticeBoardId)
  }
`;
