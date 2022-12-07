import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import WritePresenter from './write.presenter';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required('필수'),
  content: yup.string(),
  preface: yup.string(),
});

const WriteContainer = () => {
  const contentsRef = useRef<any>(null);
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onChangeContents = () => {
    const text = contentsRef?.current?.getInstance().getHTML();
    setValue('content', text === '<p><br><p>' ? '' : text);
  };

  return (
    <WritePresenter
      contentsRef={contentsRef}
      onChangeContents={onChangeContents}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
};

export default WriteContainer;
