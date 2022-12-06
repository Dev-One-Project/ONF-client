import * as S from './login.styles';
import { useForm } from 'react-hook-form';
import Input01 from '../../../src/components/commons/input/input01';
import { ILoginProps } from './login.types';
import Check01 from '../../../src/components/commons/input/check01';
import Btn01 from '../../../src/components/commons/button/btn01';
import { styleSet } from '../../../src/commons/styles/styleSet';

const LoginPage = (props: ILoginProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <img src="/logo.png" alt="logo" />
          <p>
            아직 웹체크 계정이 없으신가요? <span>지금 가입하기</span>
          </p>
        </S.Header>

        <S.Main>
          <S.H1>로그인</S.H1>
          <form>
            <S.Data>
              <S.Label>이메일</S.Label>
              <Input01 type={'text'} register={props.register} />
            </S.Data>

            <S.Data>
              <S.Label>
                비밀번호 <span>비밀번호를 잊으셨나요?</span>
              </S.Label>
              <Input01 type={'text'} register={props.register} />
            </S.Data>
            <Check01 register={props.register} text={'로그인 상태 유지'} />
            <Btn01
              text={'로그인'}
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
            />
          </form>
          <S.P>
            <strong>or</strong>
          </S.P>

          <S.Ul>
            <li>
              <img src="/login/icon_google.png" />
              구글 계정으로 로그인
            </li>
            <li>
              <img src="/login/icon_naver.png" />
              네이버 계정으로 로그인
            </li>
            <li>
              <img src="/login/icon_sso.png" />
              SSO로 로그인
            </li>
          </S.Ul>

          <S.Join>
            아직 웹체크 계정이 없으신가요? <span>지금 가입하기</span>
          </S.Join>
        </S.Main>
      </S.Wrapper>
    </>
  );
};
export default LoginPage;
