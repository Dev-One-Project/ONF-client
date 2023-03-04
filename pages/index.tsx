import Image from 'next/image';
import styled from '@emotion/styled';
import { styleSet } from '../src/commons/styles/styleSet';
import { useMoveToPage } from '../src/components/commons/hooks/useMoveToPage';
import { FETCH_ACCOUNT } from '../src/components/commons/layoutUser/layout.queries';
import { useQuery } from '@apollo/client';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';

export default function Home() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data: fetchAccount } = useQuery(FETCH_ACCOUNT);

  return (
    <Section>
      <Header>
        <Wrapper>
          <Image
            src="/icon_logo.png"
            alt="로고 아이콘"
            width={150}
            height={60}
            onClick={onClickMoveToPage('/')}
          />
          {fetchAccount?.fetchAccount ? (
            <HeaderList>
              <li
                className="login"
                onClick={onClickMoveToPage('/user/schedule')}
              >
                <UserOutlined />
                {fetchAccount?.fetchAccount?.name}님 환영합니다!
              </li>
            </HeaderList>
          ) : (
            <HeaderList>
              <li onClick={onClickMoveToPage('/auth/login')}>로그인</li>
              <li onClick={onClickMoveToPage('/auth/join')}>회원가입</li>
            </HeaderList>
          )}
        </Wrapper>
      </Header>

      <Text>
        <h1>기업의 도약을 위한 솔루션</h1>
        <h2>ON&OFF</h2>
        <p>
          근태부터 인력관리까지 한 곳으로 모은 <br />
          솔루션 기업의 원동력인 인력에 더욱 집중하고 기민하게 대응합니다
        </p>
        {fetchAccount?.fetchAccount.roles === 'USER' && (
          <button onClick={onClickMoveToPage('/user/schedule')}>
            <LoginOutlined /> 직원
          </button>
        )}
        {fetchAccount?.fetchAccount.roles === 'ADMIN' && (
          <button onClick={onClickMoveToPage('/admin/home')}>
            <LoginOutlined /> 관리자
          </button>
        )}
        {!fetchAccount?.fetchAccount && (
          <button onClick={onClickMoveToPage('/auth/login')}>
            로그인 &gt;
          </button>
        )}
      </Text>

      <Main>
        <Image
          src="/main/img_on&off.png"
          alt="관리자 메인페이지"
          width={850}
          height={500}
          className={'admin'}
        />
        <article>
          <Image
            src="/main/main-obj.png"
            alt="메인 오브제 이미지"
            width={1000}
            height={1000}
            className={'obj'}
          />
          <Image
            src="/main/sub-obj2.png"
            alt="메인 오브제 이미지"
            width={820}
            height={820}
            className={'obj2'}
          />
        </article>
      </Main>
    </Section>
  );
}
const Text = styled.section`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(10px, -50%);
  h1 {
    font-family: ${styleSet.fonts.EB};
    font-size: 1.5rem;
  }
  h2 {
    font-family: ${styleSet.fonts.EB};
    font-size: 3rem;
    color: ${styleSet.colors.primary};
    padding-block: 10px;
  }
  p {
    font-family: ${styleSet.fonts.EB};
    font-size: ${styleSet.fontSizes.strong};
    color: ${styleSet.colors.darkGray};
    padding-bottom: 20px;
  }
  button {
    width: 225px;
    height: 60px;
    padding: 16px 37px;
    border-radius: 30px;
    background: ${styleSet.colors.primary};
    color: ${styleSet.colors.white};
    font-size: ${styleSet.fontSizes.strong};
    font-family: ${styleSet.fonts.EB};
    transition: 0.4s;

    &:hover {
      background: ${styleSet.colors.black};
    }
  }
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden !important;
`;

const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  img {
    cursor: pointer;
  }
`;
const Main = styled.main`
  position: relative;

  & > span {
    position: absolute !important;
    margin-top: 12% !important;
    right: -5%;
    z-index: 999;
    border-radius: 15px;
    overflow: inherit !important;
    box-shadow: -80px 80px 80px rgb(0 0 0 / 20%);
    img {
      border-radius: 15px;
    }
  }
  article {
    position: relative;
    & > span {
      position: absolute !important;
      overflow: inherit !important;
    }
    & > span:first-of-type {
      right: -5%;
    }
    & > span:last-of-type {
      right: 0;
      top: 90px;
    }
  }
  .obj {
    transform: translate(-50%, -50%);
    animation: rotate-img-main 10s linear infinite;
    @keyframes rotate-img-main {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  .obj2 {
    transform: translate(-50%, -50%);
    animation: rotate-img-sub 10s linear infinite;
    @keyframes rotate-img-sub {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const HeaderList = styled.ul`
  display: flex;
  gap: 20px;
  z-index: 9999;
  li {
    &.login {
      width: 100%;
      &:hover {
        background: transparent;
        color: ${styleSet.colors.black};
      }
    }
    width: 95px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${styleSet.fontSizes.strong};
    font-family: ${styleSet.fonts.EB};
    color: ${styleSet.colors.black};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: ${styleSet.colors.primary};
      color: ${styleSet.colors.white};
      transition: 0.4s;
    }
  }
`;
const Header = styled.header`
  width: 100%;
  height: 100px;
`;
