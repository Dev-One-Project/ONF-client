import {
  HomeOutlined,
  LogoutOutlined,
  ReloadOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';
import * as S from '../layout.styles';
import { IUserHeaderProps } from '../layout.types';

const UserHeaderPage = (props: IUserHeaderProps) => {
  const router = useRouter();
  const [isOn, setIsOn] = useState(false);
  const [mypage, setMypage] = useState(false);
  const [menu, setMenu] = useState(false);
  const headerLink = [
    { id: 1, address: '/user/schedule', name: '스케줄' },
    { id: 2, address: '/user/record', name: '출퇴근기록' },
    { id: 3, address: '/user/request', name: '요청 내역' },
  ];

  const onClickMypage = () => {
    setMypage((prev) => !prev);
  };

  const onClickList = (event: MouseEvent<HTMLLIElement>) => {
    router.push(event?.currentTarget.id);
    setMenu((prev) => !prev);
  };

  return (
    <>
      <S.Header>
        <S.Section>
          <img src="/" alt="로고" />
          <S.Ul menu={menu}>
            {headerLink.map((el) => (
              <li key={el.id} id={el.address} onClick={onClickList}>
                {el.name}
              </li>
            ))}
          </S.Ul>
        </S.Section>

        <section>
          <S.Ul2>
            <S.Switch onClick={() => setIsOn(!isOn)} className="switch">
              <S.Strong isOn={isOn}>{isOn ? '근무중' : '근무끝'}</S.Strong>
              <S.Groove isOn={isOn}>
                <S.Handle isOn={isOn} />
              </S.Groove>
              <S.Indicator isOn={isOn} />
            </S.Switch>
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
    </>
  );
};
export default UserHeaderPage;
