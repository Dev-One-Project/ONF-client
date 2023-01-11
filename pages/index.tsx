import styled from '@emotion/styled';
import Image from 'next/image';
import { styleSet } from '../src/commons/styles/styleSet';
import { useMoveToPage } from '../src/components/commons/hooks/useMoveToPage';

export default function Home() {
  const { onClickMoveToPage } = useMoveToPage();
  return (
    <>
      <Header>
        <Wrapper>
          <Image
            src="/icon_logo.png"
            alt="로고 아이콘"
            width={80}
            height={30}
          />
          <HeaderList>
            <li onClick={onClickMoveToPage('/auth/login')}>로그인</li>
            <li onClick={onClickMoveToPage('/auth/join')}>회원가입</li>
          </HeaderList>
        </Wrapper>
      </Header>
    </>
  );
}
const Wrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const HeaderList = styled.ul`
  display: flex;
  gap: 20px;
  li {
    width: 95px;
    height: 45px;
    border: 1px solid ${styleSet.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.EB};
    color: ${styleSet.colors.white};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: ${styleSet.colors.white};
      transition: 1s;
      color: darkblue;
    }
  }
`;
const Header = styled.header`
  width: 100%;
  height: 100px;
  background: #ccc;
`;
