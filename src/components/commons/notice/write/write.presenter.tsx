import dynamic from 'next/dynamic';
import Input01 from '../../input/input01';
import * as S from './write.styles';
import { IWritePresenterProps } from './write.types';
const EditorPage = dynamic(async () => await import('./editor'), {
  ssr: false,
});

const WritePresenter = (props: IWritePresenterProps) => {
  return (
    <>
      <S.H2>공지사항</S.H2>
      <S.Container>
        <S.WriteTop>
          <Input01
            placeholder="제목을 입력하세요."
            register={props.register('title')}
          />
          <select
            style={{ padding: '0.5rem' }}
            defaultValue={'disabled'}
            {...props.register('preface')}
          >
            <option value="disabled" disabled>
              머릿말 선택
            </option>
            <option value={'공지'}>공지</option>
            <option value={'경사'}>경사</option>
            <option value={'조사'}>조사</option>
          </select>
        </S.WriteTop>
        <div style={{ width: '100%', height: '100%', paddingTop: '1rem' }}>
          <EditorPage
            contentsRef={props.contentsRef}
            onChangeContents={props.onChangeContents}
            // initialValue={fetchProduct?.fetchProduct.content}
          />
          {/* {fetchProduct?.fetchProduct.content ? (
                <EditorPage
                  contentsRef={contentsRef}
                  onChangeContents={onChangeContents}
                  initialValue={fetchProduct?.fetchProduct.content}
                />
              ) : isEdit ? (
                <div>loadding...</div>
              ) : (
                <EditorPage
                  contentsRef={contentsRef}
                  onChangeContents={onChangeContents}
                  initialValue={fetchProduct?.fetchProduct.content}
                />
              )} */}
        </div>
      </S.Container>
    </>
  );
};

export default WritePresenter;
