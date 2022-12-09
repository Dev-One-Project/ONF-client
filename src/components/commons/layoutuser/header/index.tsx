import {
  BellOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  FileDoneOutlined,
  HomeOutlined,
  LogoutOutlined,
  ReloadOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import Switch01 from '../../switch/switch01';
import * as S from '../layout.styles';
import { IUserHeaderProps } from '../layout.types';

const UserHeaderPage = (props: IUserHeaderProps) => {
  const router = useRouter();
  const [mypage, setMypage] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [menu, setMenu] = useState([false, false, false]);
  const headerLink = [
    { id: 0, address: '/user/schedule', name: '스케줄' },
    { id: 1, address: '/user/record', name: '출퇴근기록' },
    { id: 2, address: '/user/request', name: '요청 내역' },
  ];

  const onClickMoveMenu = (path: string) => () => {
    void router.push(path);
    setSideMenu(false);
  };
  const onClickMypage = () => {
    setMypage((prev) => !prev);
  };

  const onClickList = (id: number) => (event: MouseEvent<HTMLLIElement>) => {
    router.push(event?.currentTarget.id);
    setMenu((prev) =>
      prev.map((el, index) => {
        if (index === id) return true;
        else return false;
      }),
    );
  };

  const onClickSideMenu = () => {
    setSideMenu((prev) => !prev);
  };

  return (
    <>
      <S.Header className="pc">
        <S.Section>
          <img src="/" alt="로고" />
          <S.Ul>
            {headerLink.map((el, index) => (
              <S.Menu
                key={el.id}
                menu={menu[index]}
                id={el.address}
                onClick={onClickList(index)}
              >
                {el.name}
              </S.Menu>
            ))}
          </S.Ul>
        </S.Section>

        <section>
          <S.Ul2>
            <Switch01 />
            <li onClick={() => location.reload()}>
              <ReloadOutlined />
            </li>
            <li onClick={onClickMypage}>
              <SettingOutlined />
            </li>
            {mypage && (
              <S.Mypage>
                <ul>
                  <li>
                    <UserOutlined /> 신미연
                  </li>
                  <li>
                    <SettingOutlined /> 계정 설정
                  </li>
                  <li>
                    <HomeOutlined /> 회사 선택
                  </li>
                  <li>
                    <LogoutOutlined /> 로그아웃
                  </li>
                </ul>
              </S.Mypage>
            )}
          </S.Ul2>
        </section>
      </S.Header>

      <>
        <S.Header className="mobile">
          {sideMenu && <S.BgLayer></S.BgLayer>}

          <UnorderedListOutlined onClick={onClickSideMenu} />
          <img src="/" alt="로고" />
          <BellOutlined />
        </S.Header>
        {sideMenu && (
          <S.Nav>
            <S.MyPage>
              <CloseOutlined className="close" onClick={onClickSideMenu} />
              <S.TopText>
                <li>
                  <S.Name>신미연 </S.Name>직원
                </li>
                <li>
                  <span>내 계정</span> <span>내 프로필</span>
                </li>
              </S.TopText>
            </S.MyPage>

            <S.MobileMenu>
              <p>Dev.One</p>
              <ul>
                <li onClick={onClickMoveMenu('/user/schedule')}>
                  <CalendarOutlined /> 스케줄
                </li>
                <li onClick={onClickMoveMenu('/user/record')}>
                  <ClockCircleOutlined /> 출퇴근기록
                </li>
                <li onClick={onClickMoveMenu('/user/request')}>
                  <FileDoneOutlined /> 요청 내역
                </li>
              </ul>
            </S.MobileMenu>
          </S.Nav>
        )}
      </>
    </>
  );
};
export default UserHeaderPage;
