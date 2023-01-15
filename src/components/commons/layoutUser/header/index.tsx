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
  CHECK_WORK_STATUS,
  CREATE_END_WORK_CHECK,
  FETCH_ACCOUNT,
  FETCH_MY_WORK_CHECK,
} from '../../layoutUser/layout.queries';
import { MouseEvent, useEffect, useMemo, useState } from 'react';
import Switch01 from '../../switch/switch01';
import * as S from '../../layoutUser/layout.styles';
import PoppingModal from '../../modal/poppingModal';
import { useMutation, useQuery } from '@apollo/client';
import { styleSet } from '../../../../commons/styles/styleSet';
import { ErrorModal, SuccessModal } from '../../modal/sweetAlertModal';
import { getStaticDateStr } from '../../../../commons/utils/getDate';
import { useMoveToPage } from '../../hooks/useMoveToPage';

const UserHeaderPage = () => {
  const router = useRouter();
  const [mypage, setMypage] = useState(false);
  const [status, setStatus] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const [menu, setMenu] = useState([false, false, false]);
  const [createEndWorkCheck] = useMutation(CREATE_END_WORK_CHECK);
  const [isPoppingModalOpen, setIsPoppingModalOpen] = useState(false);
  const [createStartWorkCheck] = useMutation(CERATE_START_WORK_CHECK);
  const { data: workStatus } = useQuery(CHECK_WORK_STATUS);

  useMemo(() => {
    setStatus(workStatus?.checkWorkStatus);
  }, [workStatus]);

  const today = getStaticDateStr(new Date());

  const { data: myWorkCheck } = useQuery(FETCH_MY_WORK_CHECK, {
    variables: {
      startDate: today,
      endDate: today,
    },
  });
  const { onClickMoveToPage } = useMoveToPage();

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
    router.reload();
  };

  const onClickModalOpen = () => {
    setIsPoppingModalOpen(true);
    setAniMode(true);
  };

  const onClickWorkCheck = async () => {
    try {
      await createStartWorkCheck();
      setIsPoppingModalOpen(false);
      SuccessModal(
        `성공적으로 출근했습니다.\n 오늘도 힘찬 하루되세요!\n  ON&OFF가 응원합니다.`,
      );
    } catch (error) {
      setIsPoppingModalOpen(false);
      ErrorModal(error as string);
    }
  };

  const onClickWorkEndCheck = async () => {
    try {
      await createEndWorkCheck({
        variables: {
          workCheckId: myWorkCheck?.fetchMemberWorkChecks[0].id,
        },
      });

      setIsPoppingModalOpen(false);
      SuccessModal('성공적으로 퇴근했습니다.오늘도 수고하셨습니다!');
    } catch (error) {
      setIsPoppingModalOpen(false);
      ErrorModal(error as string);
    }
  };

  const onClickReload = () => {
    void router.reload();
    SuccessModal('새로고침 중입니다.');
  };

  return (
    <>
      <S.Header className="pc">
        <S.Section>
          <Image
            src="/icon_logo.png"
            alt="로고"
            width={80}
            height={30}
            onClick={onClickMoveToPage('/')}
          />
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
              <Switch01 status={status} />
            </li>
            <li onClick={onClickReload}>
              <ReloadOutlined />
            </li>
            <li onClick={onClickMypage}>
              <span>
                <SettingOutlined />
              </span>
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

      {status ? (
        <>
          {isPoppingModalOpen && (
            <PoppingModal
              isOpen={isPoppingModalOpen}
              setIsOpen={setIsPoppingModalOpen}
              aniMode={aniMode}
              onCancel={onClickModalClose}
            >
              <S.ModalWrapper>
                <h4>지금 퇴근하시겠습니까?</h4>
                <span>근무일정: 10:00 - 19:00 [직무없음]</span>
                <S.BtnBox>
                  <Btn01
                    text="취소"
                    bdC="#ddd"
                    fontSize={styleSet.fontSizes.small}
                    onClick={onClickModalClose}
                  />
                  <Btn01
                    text="퇴근하기"
                    bdC={styleSet.colors.primary}
                    bgC={styleSet.colors.primary}
                    fontSize={styleSet.fontSizes.small}
                    color="white"
                    onClick={onClickWorkEndCheck}
                  />
                </S.BtnBox>
              </S.ModalWrapper>
            </PoppingModal>
          )}
        </>
      ) : (
        <>
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
        </>
      )}
      <>
        <S.Header className="mobile">
          {sideMenu && <S.BgLayer></S.BgLayer>}

          <UnorderedListOutlined onClick={onClickSideMenu} />
          <Image
            src="/icon_logo.png"
            alt="로고"
            height={40}
            width={100}
            onClick={onClickMoveToPage('/')}
          />
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
