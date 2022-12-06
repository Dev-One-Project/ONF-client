import * as S from './join.styles';
import { useForm } from 'react-hook-form';
import Input01 from '../../../src/components/commons/input/input01';
import Check01 from '../../../src/components/commons/input/check01';
import Btn01 from '../../../src/components/commons/button/btn01';
import { styleSet } from '../../../src/commons/styles/styleSet';
import { IJoinProps } from './join.types';
import { useState } from 'react';
import { Tooltip } from 'antd';

const LoginPage = (props: IJoinProps) => {
  const [check, setCheck] = useState([false, false, false]);

  return (
    <>
      <S.Header>
        <img src="/logo.png" alt="logo" />
        <p>
          이미 웹체크 계정이 있나요? <span>로그인</span>
        </p>
      </S.Header>
      <S.Wrapper>
        <S.Section>
          <S.H2>
            대규모 인력 도입을 위한<span></span> 엔터프라이즈 지원
          </S.H2>
          <p>
            100인 이상 기업은 아래 문의를 통해<span></span>보다 원활하게 도입할
            수 있습니다.
          </p>
          <Btn01
            text={'도입문의'}
            bgC={styleSet.colors.primary}
            color={styleSet.colors.white}
          />
        </S.Section>

        <S.Main>
          <S.H1>
            환영합니다!
            <p>통합 인력관리 솔루션 웹체크, 지금 바로 시작해보세요.</p>
          </S.H1>
          <form>
            <S.Data>
              <S.Label>이메일</S.Label>
              <Input01 type={'text'} register={props.register} />
            </S.Data>

            <S.Data>
              <S.Label>비밀번호</S.Label>
              <Input01 type={'text'} register={props.register} />
              <span>* 8자 이상이면서 영문, 숫자를 모두 포함하세요.</span>
            </S.Data>

            <S.Data>
              <S.Label>비밀번호 재확인</S.Label>
              <Input01 type={'text'} register={props.register} />
              <span>* 비밀번호를 다시 입력해주세요.</span>
            </S.Data>

            <S.Data>
              <S.Label>이름</S.Label>
              <Input01 type={'text'} register={props.register} />
            </S.Data>

            <S.Data>
              <S.Label>전화번호</S.Label>
              <Input01 type={'number'} register={props.register} />
            </S.Data>

            <S.Article>
              <Check01
                id="0"
                register={props.register}
                text={'모두 동의합니다.'}
              />

              <Check01
                id="1"
                register={props.register}
                text={'[필수] 만 14세 이상입니다.'}
                checked={check[0]}
              />
              <Check01
                id="2"
                register={props.register}
                text={'[필수] 최종이용자 이용약관에 동의합니다.'}
                checked={check[1]}
              />
              <Check01
                id="3"
                register={props.register}
                text={'[필수] 개인정보 수집 및 이용에 동의합니다.'}
                checked={check[2]}
              />
            </S.Article>

            <Btn01
              text={'가입하기'}
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
              구글 계정으로 가입하기
            </li>
            <li>
              <img src="/login/icon_naver.png" />
              네이버 계정으로 가입하기
            </li>
            <li>
              <img src="/login/icon_sso.png" />
              SSO로 가입하기
            </li>
          </S.Ul>
        </S.Main>
      </S.Wrapper>
    </>
  );
};
export default LoginPage;
