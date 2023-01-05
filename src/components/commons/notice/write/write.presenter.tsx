import dynamic from 'next/dynamic';
import * as S from './write.styles';
import Input01 from '../../input/input01';
import { IWritePresenterProps } from './write.types';
const EditorPage = dynamic(async () => await import('./modules/editor'), {
  ssr: false,
});

const WritePresenter = (props: IWritePresenterProps) => {
  return (
    <>
      <S.H2>공지사항</S.H2>
      <S.Container>
        <S.Form
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUpdate)
              : props.handleSubmit(props.onClickCreate)
          }
        >
          <S.WriteTop>
            <Input01
              placeholder="제목을 입력하세요."
              register={props.register('title')}
              error={props.formState.errors.title}
            />
            <select
              style={{ padding: '0.5rem' }}
              defaultValue={'disabled'}
              {...props.register('preface')}
            >
              <option value="공지" disabled>
                머릿말 선택
              </option>
              <option value={'공지'}>공지</option>
              <option value={'경사'}>경사</option>
              <option value={'조사'}>조사</option>
            </select>
          </S.WriteTop>
          <div style={{ width: '100%', height: '100%', paddingTop: '1rem' }}>
            {props.fetchContents ? (
              <EditorPage
                contentsRef={props.contentsRef}
                onChangeContents={props.onChangeContents}
                initialValue={props.fetchContents}
              />
            ) : props.isEdit ? (
              <div>loadding...</div>
            ) : (
              <EditorPage
                contentsRef={props.contentsRef}
                onChangeContents={props.onChangeContents}
              />
            )}
          </div>
          <S.InvisibleBtn ref={props.createUpdateRef}></S.InvisibleBtn>
        </S.Form>
      </S.Container>
    </>
  );
};

export default WritePresenter;
