import * as yup from 'yup';
import { useRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import WritePresenter from './write.presenter';
import { IWriteContainerProps } from './write.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_ALL_NOTICE_BOARDS } from '../list/list.queries';
import { ErrorModal, SuccessModal } from '../../modal/sweetAlertModal';
import {
  CREATE_NOTICE_BOARD,
  FETCH_ONE_NOTICE_BOARD,
  UPDATE_NOTICE_BOARD,
} from './write.queries';
import {
  isNoticeEditState,
  isNoticeModalState,
} from '../../../../commons/store';

const schema = yup.object({
  title: yup.string().required('필수'),
  contents: yup.string().required('필수'),
  preface: yup.string().required('필수'),
});

const WriteContainer = (props: IWriteContainerProps) => {
  const contentsRef = useRef<any>(null);
  const [, setIsOpen] = useRecoilState(isNoticeModalState);
  const [isEdit, setIsEdit] = useRecoilState(isNoticeEditState);
  const [createNoticeBoard] = useMutation(CREATE_NOTICE_BOARD);
  const [updateNoticeBoard] = useMutation(UPDATE_NOTICE_BOARD);
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const { data: fetchOneNoticeBoard } = useQuery(FETCH_ONE_NOTICE_BOARD, {
    variables: {
      noticeBoardId: isEdit.boardId,
    },
  });

  useEffect(() => {
    if (isEdit.edit) {
      setValue('title', fetchOneNoticeBoard.fetchOneNoticeBoard.title);
      setValue('preface', fetchOneNoticeBoard.fetchOneNoticeBoard.preface);
    }
  }, [fetchOneNoticeBoard, setValue, isEdit]);

  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue('contents', text === '<p><br><p>' ? '' : text);
  };

  const onClickCreate = async (data: any) => {
    try {
      const result = await createNoticeBoard({
        variables: {
          createNoticeBoardInput: {
            ...data,
          },
        },
        refetchQueries: [
          {
            query: FETCH_ALL_NOTICE_BOARDS,
          },
        ],
      });
      if (result) SuccessModal('등록 완료');
    } catch (error) {
      if (error instanceof Error) ErrorModal(String(error));
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      const result = await updateNoticeBoard({
        variables: {
          noticeBoardId: isEdit.boardId,
          updateNoticeBoardInput: {
            ...data,
          },
        },
      });
      if (result) {
        SuccessModal('수정 완료');
        setIsOpen((open) => !open);
        setIsEdit({ ...isEdit, edit: false });
      }
    } catch (error) {
      if (error instanceof Error) ErrorModal(String(error));
    }
  };

  return (
    <WritePresenter
      register={register}
      isEdit={isEdit.edit}
      formState={formState}
      contentsRef={contentsRef}
      handleSubmit={handleSubmit}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      createUpdateRef={props.createUpdateRef}
      fetchContents={fetchOneNoticeBoard?.fetchOneNoticeBoard.contents}
    />
  );
};

export default WriteContainer;
