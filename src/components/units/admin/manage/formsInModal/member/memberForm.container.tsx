import { Modal } from 'antd';
import type { DatePickerProps } from 'antd';
import { useEffect, useState } from 'react';
import { IFormProps } from '../common/form.types';
import dayjs, { Dayjs } from 'dayjs';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import {
  CREATE_MEMBER,
  INSERT_WORK_INFO,
  SEND_CODE_TO_EMAIL,
  SOFT_DELETE_MEMBER,
  UPDATE_MEMBER,
} from './memberForm.queries';
import {
  IMutation,
  IMutationCreateMemberArgs,
  IMutationInsertWorkInfoArgs,
  IMutationSendCodeToEmailArgs,
  IMutationSoftDeleteMemberArgs,
  IMutationUpdateMemberArgs,
} from '../../../../../../commons/types/generated/types';
import MemberFormpresenter from './memberForm.presenter';
import { IFormData } from './memberForm.types';

const MemberFormContainer = (props: IFormProps) => {
  const [createMember] = useMutation<
    Pick<IMutation, 'createMember'>,
    IMutationCreateMemberArgs
  >(CREATE_MEMBER);
  const [updateMember] = useMutation<
    Pick<IMutation, 'updateMember'>,
    IMutationUpdateMemberArgs
  >(UPDATE_MEMBER);
  const [softDeleteMember] = useMutation<
    Pick<IMutation, 'softDeleteMember'>,
    IMutationSoftDeleteMemberArgs
  >(SOFT_DELETE_MEMBER);
  const [sendCodeToEmail] = useMutation<
    Pick<IMutation, 'sendCodeToEmail'>,
    IMutationSendCodeToEmailArgs
  >(SEND_CODE_TO_EMAIL);
  const [insertWorkInfo] = useMutation<
    Pick<IMutation, 'insertWorkInfo'>,
    IMutationInsertWorkInfoArgs
  >(INSERT_WORK_INFO);

  const { register, handleSubmit, setValue, reset } = useForm<IFormData>();

  const [invitationRadio, setInvitationRadio] = useState([true, false, false]);
  const [isActiveStartDate, setIsActiveStartDate] = useState<boolean>(
    props.editTarget?.joinDate,
  );
  const [isActiveEndDate, setIsActiveEndDate] = useState<boolean>(
    props.editTarget?.exitDate,
  );
  const [isActiveWagesInput, setIsActiveWagesInput] = useState(false);

  useEffect(() => {
    if (props.editTarget) {
      reset(props.editTarget);
    }

    return () => {
      reset({});
    };
  }, []);

  const onChangeStartDate: DatePickerProps['onChange'] = (
    date: Dayjs | null,
  ) => {
    setValue('joinDate', new Date(String(date?.format('YYYY-MM-DD'))));
  };
  const onChangeEndDate: DatePickerProps['onChange'] = (date: Dayjs | null) => {
    setValue('exitDate', new Date(String(date?.format('YYYY-MM-DD'))));
  };
  const onChangeAppliedFrom: DatePickerProps['onChange'] = (
    date: Dayjs | null,
  ) => {
    setValue('appliedFrom', String(date?.format('YYYY-MM-DD')));
  };
  // const onChangeTransmissionDate: DatePickerProps['onChange'] = (
  //   date: Dayjs | null,
  // ) => {
  //   setValue('transmissionDate', new Date(String(date?.format('YYYY-MM-DD'))));
  // };

  const onChangeInvitation = (index: number) => () => {
    setInvitationRadio(invitationRadio.map((_, i) => index === i));
  };

  // const accessAuth = {
  //   id: props.editTarget?.accessAuth,
  //   name: props.editTarget?.accessAuth,
  // };

  const roleCategories = props.data?.roleCategories?.fetchRoleCategories?.map(
    (role) => ({
      id: String(role.id),
      name: String(role.name),
    }),
  );

  const organizations = props.data?.organizations?.fetchOrganizations?.map(
    (org) => ({
      id: String(org.id),
      name: String(org.name),
    }),
  );

  const workInfos = props.data?.workInfos?.fetchWorkInfos?.map((info) => ({
    id: String(info.id),
    name: String(info.name),
  }));

  const roleCategoryDefaultValue = props.editTarget?.roleCategory && [
    {
      id: String(props.editTarget?.roleCategory?.id),
      name: String(props.editTarget?.roleCategory?.name),
    },
  ];

  const organizationDefaultValue = props.editTarget?.organization && [
    {
      id: String(props.editTarget?.organization?.id),
      name: String(props.editTarget?.organization?.name),
    },
  ];

  const defaultJoinDate = props.editTarget?.joinDate
    ? dayjs(props.editTarget?.joinDate, 'YYYY-MM-DD')
    : undefined;
  const defaultExitDate = props.editTarget?.exitDate
    ? dayjs(props.editTarget?.exitDate, 'YYYY-MM-DD')
    : undefined;

  const onSubmit = async (data: IFormData) => {
    console.log(data);

    // 수정된 workInfo api 머지되면 수정 -> 정상작동 테스트 -> 백엔드와 상의 후 삭제
    if (data.name) return;

    try {
      const result = await createMember({
        variables: {
          createMemberInput: {
            name: String(data.name),
            exitDate: data.exitDate,
            joinDate: data.joinDate,
            memo: data.memo,
            organizationId: String(data.organizationId?.[0]),
            roleCategoryId: String(data.roleCategoryId?.[0]),
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchMembers: (prev) => {
                return [data?.createMember, ...prev];
              },
            },
          });
        },
      });
      const invitationData = {
        email: data.email ?? '',
        memberId: String(result.data?.createMember.id),
      };
      await sendCodeToEmail({ variables: invitationData });
      await insertWorkInfo({
        variables: {
          email: data.email ?? '',
          name: data.workInfoName ?? '',
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onEdit = async (data: any) => {
    console.log('수정', data);
    try {
      await updateMember({
        variables: { memberId: props.editTarget?.id, updateMemberInput: data },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onSoftDelete = async () => {
    console.log('삭제');
    try {
      await softDeleteMember({ variables: { memberId: props.editTarget?.id } });
      Modal.success({
        content: `${String(props.editTarget?.name)} 님이 비활성화 되었습니다.`,
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <MemberFormpresenter
      roleCategories={roleCategories}
      roleCategoryDefaultValue={roleCategoryDefaultValue}
      organizations={organizations}
      organizationDefaultValue={organizationDefaultValue}
      setIsActiveStartDate={setIsActiveStartDate}
      isActiveStartDate={isActiveStartDate}
      defaultJoinDate={defaultJoinDate}
      isActvieWageInput={isActiveWagesInput}
      onChangeStartDate={onChangeStartDate}
      setIsActiveEndDate={setIsActiveEndDate}
      isActiveEndDate={isActiveEndDate}
      defaultExitDate={defaultExitDate}
      onChangeEndDate={onChangeEndDate}
      onChangeInvitation={onChangeInvitation}
      invitationRadio={invitationRadio}
      onChangeAppliedFrom={onChangeAppliedFrom}
      setIsActiveWagesInput={setIsActiveWagesInput}
      workInfos={workInfos}
      onSoftDelete={onSoftDelete}
      onCancel={props.onCancel}
      isActiveWagesInput={isActiveWagesInput}
      onEdit={onEdit}
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      setValue={setValue}
    />
  );
};

export default MemberFormContainer;
