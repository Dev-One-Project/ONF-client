import * as S from './list.styles';
import dynamic from 'next/dynamic';
import Btn01 from '../../button/btn01';
import { useRecoilState } from 'recoil';
import { INoticeDetailProps } from './list.types';
import { useMutation, useQuery } from '@apollo/client';
import { styleSet } from '../../../../commons/styles/styleSet';
import { getStaticDateStr } from '../../../../commons/utils/getDate';
import { ErrorModal, SuccessModal } from '../../modal/sweetAlertModal';
import {
  DELETE_NOTICE_BOARD,
  FETCH_ACCOUNT,
  FETCH_ALL_NOTICE_BOARDS,
  FETCH_ONE_NOTICE_BOARD,
} from './list.queries';
import {
  isNoticeEditState,
  isNoticeWriteState,
} from '../../../../commons/store';
const ViewerPage = dynamic(async () => await import('./modules/viewer'), {
  ssr: false,
});

const NoticeDetail = (props: INoticeDetailProps) => {
  const [deleteNoticeBoard] = useMutation(DELETE_NOTICE_BOARD);
  const [, setIsWrite] = useRecoilState(isNoticeWriteState);
  const [, setIsEdit] = useRecoilState(isNoticeEditState);
  const { data: fetchAccount } = useQuery(FETCH_ACCOUNT);
  const { data: fetchOneNoticeBoard } = useQuery(FETCH_ONE_NOTICE_BOARD, {
    variables: {
      noticeBoardId: props.boardId,
    },
    fetchPolicy: 'network-only',
  });

  const onClickUpdate = async () => {
    setIsWrite(true);
    setIsEdit({ edit: true, boardId: props.boardId });
  };

  const onClickDelete = async () => {
    try {
      const result = await deleteNoticeBoard({
        variables: {
          noticeBoardId: props.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_ALL_NOTICE_BOARDS,
          },
        ],
      });
      if (result.data.deleteNoticeBoard) SuccessModal('삭제 완료');
    } catch (error) {
      if (error) ErrorModal(String(error));
    }
  };

  return (
    <S.DetailCantainer>
      <S.DetailTop>
        <S.Title>{fetchOneNoticeBoard?.fetchOneNoticeBoard.title}</S.Title>
        <S.DateStyle>
          {fetchOneNoticeBoard
            ? getStaticDateStr(
                fetchOneNoticeBoard?.fetchOneNoticeBoard.createdAt,
              )
            : null}
        </S.DateStyle>
      </S.DetailTop>
      <S.Contents>
        {fetchOneNoticeBoard?.fetchOneNoticeBoard.contents ? (
          <ViewerPage
            initialValue={fetchOneNoticeBoard?.fetchOneNoticeBoard.contents}
          />
        ) : fetchOneNoticeBoard ? (
          <div>loadding...</div>
        ) : (
          <div>공지사항이 없습니다.</div>
        )}
      </S.Contents>
      {fetchOneNoticeBoard?.fetchOneNoticeBoard.account.id ===
      fetchAccount?.fetchAccount.id ? (
        <S.BtnWrapper>
          <Btn01
            text="수정"
            onClick={onClickUpdate}
            bdC={styleSet.colors.gray}
          />
          <Btn01
            text="삭제"
            onClick={onClickDelete}
            bdC={styleSet.colors.gray}
          />
        </S.BtnWrapper>
      ) : null}
    </S.DetailCantainer>
  );
};

export default NoticeDetail;
