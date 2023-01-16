import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../../commons/store';
import {
  IMutation,
  IQuery,
  IQueryFetchMemberArgs,
  IQueryFetchMemberScheduleArgs,
  IQueryFetchMemberWorkChecksArgs,
  IQueryFetchOrganizationDetailArgs,
} from '../../../../commons/types/generated/types';
import { getStaticDateStr } from '../../../../commons/utils/getDate';
import useAuth from '../../../commons/hooks/useAuth';
import {
  CERATE_START_WORK_CHECK,
  CHECK_WORK_STATUS,
  CREATE_END_WORK_CHECK,
  FETCH_ACCOUNT,
  FETCH_MEMBER,
  FETCH_MEMBER_SCHEDULE,
  FETCH_MY_WORK_CHECK,
  FETCH_ORGANIZATION_DETAIL,
  LOGOUT,
} from '../../../commons/layoutUser/layout.queries';
import {
  ErrorModal,
  SuccessModal,
} from '../../../commons/modal/sweetAlertModal';
import AdminHeaderPresenter from './header.presenter';

const AdminHeaderContainer = () => {
  const router = useRouter();
  useAuth();

  const [, setIsAdminSidebar] = useRecoilState(isAdminSidebarState);
  const [isOpen, setIsOpen] = useState(false);
  const [isPoppingModalOpen, setIsPoppingModalOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [status, setStatus] = useState(false);

  const [createStartWorkCheck] = useMutation<
    Pick<IMutation, 'createStartWorkCheck'>
  >(CERATE_START_WORK_CHECK);

  const [createEndWorkCheck] = useMutation<
    Pick<IMutation, 'createEndWorkCheck'>
  >(CREATE_END_WORK_CHECK);

  const [logout] = useMutation<Pick<IMutation, 'logout'>>(LOGOUT);

  const { data: workStatus } =
    useQuery<Pick<IQuery, 'checkWorkStatus'>>(CHECK_WORK_STATUS);

  const today = getStaticDateStr(new Date());

  const { data: myWorkCheck } = useQuery<
    Pick<IQuery, 'fetchMemberWorkChecks'>,
    IQueryFetchMemberWorkChecksArgs
  >(FETCH_MY_WORK_CHECK, {
    variables: {
      startDate: today,
      endDate: today,
    },
  });

  const { data: fetchAccount } =
    useQuery<Pick<IQuery, 'fetchAccount'>>(FETCH_ACCOUNT);

  const { data: fetchMember } = useQuery<
    Pick<IQuery, 'fetchMember'>,
    IQueryFetchMemberArgs
  >(FETCH_MEMBER, {
    variables: { memberId: String(fetchAccount?.fetchAccount.member?.id) },
  });

  const { data: fetchMemberSchedule } = useQuery<
    Pick<IQuery, 'fetchMemberSchedule'>,
    IQueryFetchMemberScheduleArgs
  >(FETCH_MEMBER_SCHEDULE, {
    variables: {
      memberId: String(fetchAccount?.fetchAccount.member?.id),
      date: new Date(today),
    },
  });

  const { data: fetchOrganizationDetail } = useQuery<
    Pick<IQuery, 'fetchOrganizationDetail'>,
    IQueryFetchOrganizationDetailArgs
  >(FETCH_ORGANIZATION_DETAIL, {
    variables: {
      organizationId: String(fetchMember?.fetchMember.organization?.id),
    },
  });

  useMemo(() => {
    if (workStatus !== undefined) setStatus(workStatus?.checkWorkStatus);
  }, [workStatus]);

  const onClickMenu = () => {
    setIsAdminSidebar((prev) => !prev);
  };

  const onClickReload = () => {
    void router.reload();
    SuccessModal('새로고침 중입니다.');
  };

  const onClickModalOpen = () => {
    setIsPoppingModalOpen(true);
    setAniMode(true);
  };

  const onClickModalClose = () => {
    setAniMode(false);
  };

  const onClickLogout = async () => {
    try {
      await logout();
      SuccessModal('정상적으로 로그아웃 되었습니다.');
    } catch (error) {
      ErrorModal('다시 시도해주세요.');
    }
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

  return (
    <AdminHeaderPresenter
      onClickMenu={onClickMenu}
      onClickReload={onClickReload}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isPoppingModalOpen={isPoppingModalOpen}
      onClickModalOpen={onClickModalOpen}
      aniMode={aniMode}
      setIsPoppingModalOpen={setIsPoppingModalOpen}
      onClickModalClose={onClickModalClose}
      onClickWorkCheck={onClickWorkCheck}
      status={status}
      onClickWorkEndCheck={onClickWorkEndCheck}
      fetchMember={fetchMember}
      fetchMemberSchedule={fetchMemberSchedule}
      fetchOrganizationDetail={fetchOrganizationDetail}
      onClickLogout={onClickLogout}
    />
  );
};

export default AdminHeaderContainer;
