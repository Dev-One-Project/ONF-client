import {
  ArrowRightOutlined,
  MenuOutlined,
  ReloadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider } from 'antd';
import Image from 'next/image';
import { styleSet } from '../../../../commons/styles/styleSet';
import { getTimeStr } from '../../../../commons/utils/getDate';
import Btn01 from '../../../commons/button/btn01';
import { useMoveToPage } from '../../../commons/hooks/useMoveToPage';
import PoppingModal from '../../../commons/modal/poppingModal';
import Switch01 from '../../../commons/switch/switch01';
import * as S from './header.styles';
import { IAdminHeaderPresenterProps } from './header.types';

const AdminHeaderPresenter = (props: IAdminHeaderPresenterProps) => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      {props.isOpen && (
        <>
          <S.Background onClick={() => props.setIsOpen(false)}></S.Background>
          <S.DropWrapper>
            <S.DropSetting>
              <S.SettingBox>
                <strong>김멤버</strong>
                <Divider style={{ margin: '0' }} />
              </S.SettingBox>
              <S.SettingBox>
                <p onClick={onClickMoveToPage('/app/account')}>계정 설정</p>
                <p onClick={props.onClickLogout}>로그아웃</p>
              </S.SettingBox>
            </S.DropSetting>
          </S.DropWrapper>
        </>
      )}

      {props.status ? (
        <>
          {props.isPoppingModalOpen && (
            <PoppingModal
              isOpen={props.isPoppingModalOpen}
              setIsOpen={props.setIsPoppingModalOpen}
              aniMode={props.aniMode}
              onCancel={props.onClickModalClose}
            >
              <S.ModalWrapper>
                <h4>지금 퇴근하시겠습니까?</h4>
                <span>{`퇴근장소: ${String(
                  props.fetchOrganizationDetail?.fetchOrganizationDetail
                    .checkPoint,
                )}`}</span>
                <S.BtnBox>
                  <Btn01
                    text="취소"
                    bdC="#ddd"
                    fontSize={styleSet.fontSizes.small}
                    onClick={props.onClickModalClose}
                  />
                  <Btn01
                    text="퇴근하기"
                    bdC={styleSet.colors.primary}
                    bgC={styleSet.colors.primary}
                    fontSize={styleSet.fontSizes.small}
                    color="white"
                    onClick={props.onClickWorkEndCheck}
                  />
                </S.BtnBox>
              </S.ModalWrapper>
            </PoppingModal>
          )}
        </>
      ) : (
        <>
          {props.isPoppingModalOpen && (
            <PoppingModal
              isOpen={props.isPoppingModalOpen}
              setIsOpen={props.setIsPoppingModalOpen}
              aniMode={props.aniMode}
              onCancel={props.onClickModalClose}
            >
              <S.ModalWrapper>
                <h4>지금 출근하시겠습니까?</h4>
                <span>{`근무일정: ${getTimeStr(
                  String(
                    props.fetchMemberSchedule?.fetchMemberSchedule
                      ?.startWorkTime,
                  ),
                  String(
                    props.fetchMemberSchedule?.fetchMemberSchedule?.endWorkTime,
                  ),
                )} [${String(
                  props.fetchMember?.fetchMember.roleCategory?.name,
                )}]`}</span>
                <S.BtnBox>
                  <Btn01
                    text="취소"
                    bdC="#ddd"
                    fontSize={styleSet.fontSizes.small}
                    onClick={props.onClickModalClose}
                  />
                  <Btn01
                    text="출근하기"
                    bdC={styleSet.colors.primary}
                    bgC={styleSet.colors.primary}
                    fontSize={styleSet.fontSizes.small}
                    color="white"
                    onClick={props.onClickWorkCheck}
                  />
                </S.BtnBox>
              </S.ModalWrapper>
            </PoppingModal>
          )}
        </>
      )}

      <S.Wrapper>
        <S.Header>
          <S.Section>
            <S.Ul>
              <li>
                <MenuOutlined
                  onClick={props.onClickMenu}
                  style={{ padding: '0 0.5rem' }}
                />
              </li>
            </S.Ul>
            <Image src="/icon_logo.png" alt="logo" width={80} height={30} />
          </S.Section>
        </S.Header>
        <S.Section>
          <S.Ul>
            <li
              onClick={props.onClickModalOpen}
              style={{ padding: '0 0.5rem' }}
            >
              <Switch01 status={props.status} />
            </li>
            <li>
              <ReloadOutlined
                onClick={props.onClickReload}
                style={{ padding: '0 0.5rem' }}
              />
            </li>
            <li>
              <span>
                <SettingOutlined
                  onClick={() => props.setIsOpen((prev: boolean) => !prev)}
                />
              </span>
            </li>
          </S.Ul>
          <S.ChangeBtn>
            <ArrowRightOutlined />
            <span onClick={onClickMoveToPage('/user/requests')}>
              {typeof window !== 'undefined' && window.outerWidth < 767
                ? '직원 모드'
                : '직원 모드로 전환'}
            </span>
          </S.ChangeBtn>
        </S.Section>
      </S.Wrapper>
    </>
  );
};

export default AdminHeaderPresenter;
