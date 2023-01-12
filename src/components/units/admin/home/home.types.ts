export interface IHomePresenterProps {
  fetchAllNoticeBoards: {
    id: string;
    preface: string;
    title: string;
    createdAt: string;
  };
  fetchMainPageWorkCheck: {
    working: string;
    tardy: string;
    notworking: string;
    vacation: string;
  };
  onClickNoticeBoard: (id: string) => any;
}

export interface FetchAllNoticeBoards {
  id: string;
  preface: string;
  title: string;
  createdAt: Date;
}
