import { Dispatch, SetStateAction } from 'react';

export interface INoticeListPresenterProps {
  boards:
    | {
        id: string;
        preface: string;
        title: string;
        createdAt: string;
        length?: number;
      }
    | undefined;
  onClickBoard: (id: string) => () => void;
  boardId: string | undefined;
  page: number;
  limit: number;
  offset: number;
  setPage: Dispatch<SetStateAction<number>>;
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
