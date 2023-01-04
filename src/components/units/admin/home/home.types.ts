export interface IHomePresenterProps {
  fetchAllNoticeBoards: {
    id: string;
    preface: string;
    title: string;
    createdAt: string;
  };
  onClickNoticeBoard: (id: string) => any;
}

export interface FetchAllNoticeBoards {
  id: string;
  preface: string;
  title: string;
  createdAt: Date;
}
