import {
  BellOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  ReloadOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import Btn01 from '../../button/btn01';
import { useRouter } from 'next/router';
import {
  CERATE_START_WORK_CHECK,
  FETCH_ACCOUNT,
} from '../../layoutUser/layout.queries';
import { MouseEvent, useState } from 'react';
import Switch01 from '../../switch/switch01';
import * as S from '../../layoutUser/layout.styles';
import PoppingModal from '../../modal/poppingModal';
import { useMutation, useQuery } from '@apollo/client';
import { styleSet } from '../../../../commons/styles/styleSet';
import { ErrorModal, SuccessModal } from '../../modal/sweetAlertModal';

const UserHeaderPage = () => {
  const router = useRouter();
  const [mypage, setMypage] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [menu, setMenu] = useState([false, false, false]);
  const [isPoppingModalOpen, setIsPoppingModalOpen] = useState(false);
  const [createStartWorkCheck] = useMutation(CERATE_START_WORK_CHECK);

  const headerLink = [
    { id: 0, address: '/user/schedule', name: '스케줄' },
    { id: 1, address: '/user/attendances', name: '출퇴근기록' },
    { id: 2, address: '/user/requests', name: '요청 내역' },
  ];

  const { data: fetchAccount } = useQuery(FETCH_ACCOUNT);

  const onClickMoveMenu = (path: string) => () => {
    void router.push(path);
    setSideMenu(false);
  };

  console.log(fetchAccount, 'fetchAccount');

  const onClickMypage = () => {
    setMypage((prev) => !prev);
  };

  const onClickList = (id: number) => (event: MouseEvent<HTMLLIElement>) => {
    void router.push(event?.currentTarget.id);
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

  const onClickModalClose = () => {
    setAniMode(false);
  };

  const onClickModalOpen = () => {
    setIsPoppingModalOpen(true);
    setAniMode(true);
  };

  const onClickWorkCheck = async () => {
    try {
      await createStartWorkCheck({
        variables: {
          id: fetchAccount?.fetchAccount.id,
          workDay: Date.now(),
          workingTime: Date.now(),
          quittingTime: Date.now(),
          createdAt: Date.now(),
          updatedAt: Date.now(),
          member: String(fetchAccount?.fetchAccount.member.id),
          company: fetchAccount.fetchAccount?.company?.id,
          organization: fetchAccount.fetchAccount?.company?.name,
          roleCategory: String(fetchAccount.fetchAccount?.roles),
        },
      });
      setIsPoppingModalOpen(false);
      SuccessModal(
        '성공적으로 출근했습니다. 오늘도 힘찬 하루되세요! on&off가 응원합니다.',
      );
    } catch (error) {
      setIsPoppingModalOpen(false);
      ErrorModal(error as string);
    }
  };

  return (
    <>
      <S.Header className="pc">
        <S.Section>
          <Image src="/icon_logo.png" alt="로고" width={100} height={50} />
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
            <li onClick={onClickModalOpen}>
              <Switch01 aniMode={aniMode} />
            </li>
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
                    <UserOutlined /> {fetchAccount?.fetchAccount?.name}
                  </li>
                  <li>
                    <SettingOutlined /> 계정 설정
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

      {isPoppingModalOpen && (
        <PoppingModal
          isOpen={isPoppingModalOpen}
          setIsOpen={setIsPoppingModalOpen}
          aniMode={aniMode}
          onCancel={onClickModalClose}
        >
          <S.ModalWrapper>
            <h4>지금 출근하시겠습니까?</h4>
            <span>근무일정: 10:00 - 19:00 [직무없음]</span>
            <S.BtnBox>
              <Btn01
                text="취소"
                bdC="#ddd"
                fontSize={styleSet.fontSizes.small}
                onClick={onClickModalClose}
              />
              <Btn01
                text="출근하기"
                bdC={styleSet.colors.primary}
                bgC={styleSet.colors.primary}
                fontSize={styleSet.fontSizes.small}
                color="white"
                onClick={onClickWorkCheck}
              />
            </S.BtnBox>
          </S.ModalWrapper>
        </PoppingModal>
      )}

      <>
        <S.Header className="mobile">
          {sideMenu && <S.BgLayer></S.BgLayer>}

          <UnorderedListOutlined onClick={onClickSideMenu} />
          <Image src="/icon_logo.png" alt="로고" height={40} width={100} />
          <BellOutlined />
        </S.Header>
        {sideMenu && (
          <S.Nav>
            <S.MyPage>
              <CloseOutlined className="close" onClick={onClickSideMenu} />
              <S.TopText>
                <li>
                  <S.Name>{fetchAccount?.fetchAccount?.name} </S.Name>
                  {fetchAccount?.fetchAccount?.roles}
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
                <li onClick={onClickMoveMenu('/user/attendances')}>
                  <ClockCircleOutlined /> 출퇴근기록
                </li>
                <li onClick={onClickMoveMenu('/user/requests')}>
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
