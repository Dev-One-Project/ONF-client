import Footer from '../common/footer';
import InputLabel from '../common/inputLabel';
import Memo from '../common/memo';
import * as S from './roleCategoryForm.styles';
import { IRoleCategoryFormPresenterProps } from './roleCategoryForm.types';

const RoleCategoryFormPresenter = (props: IRoleCategoryFormPresenterProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <S.Wrapper>
        <InputLabel name="name" type="text" register={props.register('name')}>
          직무명
        </InputLabel>
        <InputLabel
          name="colorCode"
          type="color"
          register={props.register('colorCode')}
          inputWidth="1.5rem"
        >
          색깔
        </InputLabel>
        <Memo register={props.register('memo')} />
      </S.Wrapper>
      <Footer onCancel={props.onCancel} />
    </form>
  );
};

export default RoleCategoryFormPresenter;
