export interface INoticeListPresenterProps {
  fetchAllNoticeBoards: {
    id: string;
    preface: string;
    title: string;
    createdAt: string;
  };
  onClickBoard: (id: string) => () => void;
  boardId: string | undefined;
}

export interface INoticeDetailProps {
  boardId: string | undefined;
}

export interface FetchAllNoticeBoards {
  id: string;
  preface: string;
  title: string;
  createdAt: Date;
}

export interface IStlyesProps {
  right?: boolean;
}
