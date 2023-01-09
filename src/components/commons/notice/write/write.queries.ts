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

export const FETCH_ONE_NOTICE_BOARD = gql`
  query fetchOneNoticeBoard($noticeBoardId: String!) {
    fetchOneNoticeBoard(noticeBoardId: $noticeBoardId) {
      id
      preface
      title
      contents
    }
  }
`;

export const UPLOAD_SINGLE_FILE = gql`
  mutation uploadSingleFile($file: Upload!) {
    uploadSingleFile(file: $file) {
      id
      url
    }
  }
`;
