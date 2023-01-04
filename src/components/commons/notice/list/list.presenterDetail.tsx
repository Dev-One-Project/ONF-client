import * as S from './list.styles';
import dynamic from 'next/dynamic';
import Btn01 from '../../button/btn01';
import { INoticeDetailProps } from './list.types';
import { useMutation, useQuery } from '@apollo/client';
import { styleSet } from '../../../../commons/styles/styleSet';
import { getStaticDateStr } from '../../../../commons/utils/getDate';
import { ErrorModal, SuccessModal } from '../../modal/sweetAlertModal';
import {
  DELETE_NOTICE_BOARD,
  FETCH_ALL_NOTICE_BOARDS,
  FETCH_ONE_NOTICE_BOARD,
} from './list.queries';
const ViewerPage = dynamic(async () => await import('./modules/viewer'), {
  ssr: false,
});

const NoticeDetail = (props: INoticeDetailProps) => {
  const [deleteNoticeBoard] = useMutation(DELETE_NOTICE_BOARD);
  const { data: fetchOneNoticeBoard } = useQuery(FETCH_ONE_NOTICE_BOARD, {
    variables: {
      noticeBoardId: props.boardId,
    },
  });

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
    <>
      {' '}
      <S.DetailTop>
        <S.Title>{fetchOneNoticeBoard?.fetchOneNoticeBoard.title}</S.Title>
        <S.DateStyle>
          {getStaticDateStr(fetchOneNoticeBoard?.fetchOneNoticeBoard.createdAt)}
        </S.DateStyle>
      </S.DetailTop>
      <S.Contents>
        {fetchOneNoticeBoard?.fetchOneNoticeBoard.contents ? (
          <ViewerPage
            initialValue={fetchOneNoticeBoard?.fetchOneNoticeBoard.contents}
          />
        ) : (
          <div>loadding...</div>
        )}
      </S.Contents>
      <S.BtnWrapper>
        <Btn01
          text="수정"
          // onClick={onClickWrite}
          bdC={styleSet.colors.gray}
        />
        <Btn01 text="삭제" onClick={onClickDelete} bdC={styleSet.colors.gray} />
      </S.BtnWrapper>
    </>
  );
};

export default NoticeDetail;
