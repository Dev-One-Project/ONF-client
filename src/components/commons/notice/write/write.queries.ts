import { gql } from '@apollo/client';

export const CREATE_NOTICE_BOARD = gql`
  mutation createNoticeBoard($createNoticeBoardInput: CreateNoticeBoardInput!) {
    createNoticeBoard(createNoticeBoardInput: $createNoticeBoardInput) {
      id
    }
  }
`;

export const UPDATE_NOTICE_BOARD = gql`
  mutation updateNoticeBoard(
    $noticeBoardId: String!
    $updateNoticeBoardInput: UpdateNoticeBoardInput!
  ) {
    updateNoticeBoard(
      noticeBoardId: $noticeBoardId
      updateNoticeBoardInput: $updateNoticeBoardInput
    ) {
      id
    }
  }
`;
