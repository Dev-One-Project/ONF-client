import {
  HomeOutlined,
  LogoutOutlined,
  ReloadOutlined,
  SettingOutlined,
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
  const [menu, setMenu] = useState([false, false, false]);
  const headerLink = [
    { id: 0, address: '/user/schedule', name: '스케줄' },
    { id: 1, address: '/user/record', name: '출퇴근기록' },
    { id: 2, address: '/user/request', name: '요청 내역' },
  ];

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

  return (
    <>
      <S.Header>
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
    </>
  );
};
export default UserHeaderPage;
