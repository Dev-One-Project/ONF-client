import Image from 'next/image';
import * as S from './login.styles';
import { ILoginProps } from './login.types';
import Btn01 from '../../../commons/button/btn01';
import Input01 from '../../../commons/input/input01';
import { styleSet } from '../../../../commons/styles/styleSet';
import { useMoveToPage } from '../../../commons/hooks/useMoveToPage';
import Check01 from '../../../commons/input/check01';

const LoginPresenter = (props: ILoginProps) => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <Image
            src="/icon_logo.png"
            alt="logo"
            width={80}
            height={30}
            onClick={onClickMoveToPage('/')}
          />
          <p>
            아직 ON&OFF 계정이 없으신가요?{' '}
            <span onClick={onClickMoveToPage('/auth/join')}>지금 가입하기</span>
          </p>
        </S.Header>

        <S.Main>
          <S.H1>로그인</S.H1>
          <form onSubmit={props.handleSubmit(props.onClickLogin)}>
            <S.Data>
              <S.Label>이메일</S.Label>
              <Input01 type={'text'} register={props.register('email')} />
            </S.Data>

            <S.Data>
              <S.Label>
                비밀번호 <span>비밀번호를 잊으셨나요?</span>
              </S.Label>
              <Input01
                type={'password'}
                register={props.register('password')}
              />
            </S.Data>
            <Check01
              register={props.register('terms')}
              text={'로그인 상태 유지'}
            />
            <Btn01
              text={'로그인'}
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
              type="submit"
            />
          </form>
          <S.P>
            <strong>or</strong>
          </S.P>

          <S.Join>
            아직 ON&OFF 계정이 없으신가요?{' '}
            <span onClick={onClickMoveToPage('/auth/join')}>지금 가입하기</span>
          </S.Join>
        </S.Main>
      </S.Wrapper>
    </>
  );
};
export default LoginPresenter;
