import * as yup from 'yup';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import WritePresenter from './write.presenter';
import { IWriteContainerProps } from './write.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorModal } from '../../modal/sweetAlertModal';
import { CREATE_NOTICE_BOARD, UPDATE_NOTICE_BOARD } from './write.queries';

const schema = yup.object({
  title: yup.string().required('필수'),
  contents: yup.string(),
  preface: yup.string(),
});

const WriteContainer = (props: IWriteContainerProps) => {
  const contentsRef = useRef<any>(null);
  const [createNoticeBoard] = useMutation(CREATE_NOTICE_BOARD);
  const [updateNoticeBoard] = useMutation(UPDATE_NOTICE_BOARD);
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue('contents', text === '<p><br><p>' ? '' : text);
  };

  const onClickCreate = async (data: any) => {
    try {
      await createNoticeBoard({
        variables: {
          createNoticeBoardInput: {
            ...data,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) ErrorModal(String(error));
    }
  };

  const onClickUpdate = async (data: any) => {
    try {
      await updateNoticeBoard({
        variables: {
          noticeBoardId: '',
          updateNoticeBoardInput: {
            ...data,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) ErrorModal(String(error));
    }
  };

  return (
    <WritePresenter
      register={register}
      formState={formState}
      isEdit={props.isEdit}
      contentsRef={contentsRef}
      handleSubmit={handleSubmit}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onChangeContents={onChangeContents}
      createUpdateRef={props.createUpdateRef}
    />
  );
};

export default WriteContainer;
