import styled from '@emotion/styled';
import { DatePicker, Divider, Modal } from 'antd';
import type { DatePickerProps } from 'antd';
import { useEffect, useState } from 'react';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import Check01 from '../../../../../commons/input/check01';
import InputLabel from '../../../../../commons/inputLabel';
import Footer from '../common/footer';
import { IFormProps } from '../common/form.types';
import dayjs, { Dayjs } from 'dayjs';
import Memo from '../common/memo';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import {
  CREATE_MEMBER,
  SOFT_DELETE_MEMBER,
  UPDATE_MEMBER,
} from './member.queries';
import {
  IMutation,
  IMutationCreateMemberArgs,
  IMutationSoftDeleteMemberArgs,
  IMutationUpdateMemberArgs,
} from '../../../../../../commons/types/generated/types';

const MemberForm = (props: IFormProps) => {
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

  const { register, handleSubmit, setValue, reset } = useForm();
  const invitationArray = ['전송 안함', '즉시 전송', '예약 전송'];

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
    setValue('startDate', new Date(String(date?.format('YYYY-MM-DD'))));
  };
  const onChangeEndDate: DatePickerProps['onChange'] = (date: Dayjs | null) => {
    setValue('endDate', new Date(String(date?.format('YYYY-MM-DD'))));
  };
  const onChangeAppliedPeriod: DatePickerProps['onChange'] = (
    date: Dayjs | null,
  ) => {
    setValue('applidePeriod', new Date(String(date?.format('YYYY-MM-DD'))));
  };
  const onChangeTransmissionDate: DatePickerProps['onChange'] = (
    date: Dayjs | null,
  ) => {
    setValue('transmissionDate', new Date(String(date?.format('YYYY-MM-DD'))));
  };

  const onChangeInvitation = (index: number) => () => {
    setInvitationRadio(invitationRadio.map((_, i) => index === i));
  };

  // const accessAuth = {
  //   id: props.editTarget?.accessAuth,
  //   name: props.editTarget?.accessAuth,
  // };

  const roleCategories = props.data?.roleCategories?.fetchRoleCategories?.map(
    (role) => {
      return {
        id: String(role.id),
        name: String(role.name),
      };
    },
  );

  const organizations = props.data?.organizations?.fetchOrganizations?.map(
    (orgs) => {
      return {
        id: String(orgs.id),
        name: String(orgs.name),
      };
    },
  );

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

  const onSubmit = async (data: any) => {
    console.log('추가', data);
    try {
      await createMember({ variables: { createMemberInput: data } });
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
    <form onSubmit={handleSubmit(props.editTarget ? onEdit : onSubmit)}>
      <WrapperM>
        <Left>
          <div>
            <h3>직원정보</h3>
            <FormWrapper>
              <InputLabel type="text" name="name" register={register('name')}>
                이름
              </InputLabel>
              <InputLabel
                noSearch
                type="select"
                name="accessAuth"
                // api 개발 중...
                // setValue={setValue}
                // register={register('accessAuth')}
                data={[
                  { id: '최고관리자', name: '최고관리자' },
                  { id: '직원', name: '직원' },
                ]}
                // defaultChecked={[accessAuth]}
              >
                액세스 권한
              </InputLabel>
              <InputLabel
                type="select"
                name="roleCategory"
                setValue={setValue}
                register={register('roleCategoryId')}
                data={roleCategories}
                defaultChecked={roleCategoryDefaultValue}
              >
                직무들
              </InputLabel>
              <InputLabel
                type="select"
                name="organization"
                setValue={setValue}
                register={register('organizationId')}
                data={organizations}
                defaultChecked={organizationDefaultValue}
              >
                지점들
              </InputLabel>
              <FormContent>
                <InnerContent>
                  <Check01
                    onChange={() => setIsActiveStartDate((prev) => !prev)}
                    text="입사일"
                  />
                  {isActiveStartDate && (
                    <DatePicker
                      defaultValue={defaultJoinDate}
                      onChange={onChangeStartDate}
                      style={{ flex: '2' }}
                    />
                  )}
                </InnerContent>
                <InnerContent>
                  <Check01
                    onChange={() => setIsActiveEndDate((prev) => !prev)}
                    text="퇴사일"
                  />
                  {isActiveEndDate && (
                    <DatePicker
                      defaultValue={defaultExitDate}
                      onChange={onChangeEndDate}
                      style={{ flex: '2' }}
                    />
                  )}
                </InnerContent>
              </FormContent>
            </FormWrapper>
          </div>
          {props.editTarget?.isJoin || (
            <div>
              <h3>직원합류 초대</h3>
              <FormWrapper>
                <FormContent>
                  {invitationArray.map((content, index) => (
                    <Check01
                      key={index}
                      text={content}
                      onChange={onChangeInvitation(index)}
                      checked={invitationRadio[index]}
                    />
                  ))}
                </FormContent>
                {!invitationRadio[0] && (
                  <InputLabel
                    type="text"
                    name="email"
                    setValue={setValue}
                    register={register('email')}
                  >
                    이메일
                  </InputLabel>
                )}
                {invitationRadio[1] && (
                  <GuidLine style={{ lineHeight: '1.5rem' }}>
                    합류코드가 각 직원에 등록된 이메일 및 전화번호로 즉시
                    전송됩니다.
                    <br /> 이메일 또는 전화번호를 입력하지 않은 경우, 합류코드를
                    전송할 수 없습니다.
                  </GuidLine>
                )}
                {invitationRadio[2] && (
                  <>
                    <InputLabel
                      type="custom"
                      name="trasmissionDate"
                      customInput={
                        <DatePicker onChange={onChangeTransmissionDate} />
                      }
                    >
                      전송 시각
                    </InputLabel>
                    <GuidLine style={{ lineHeight: '1.5rem' }}>
                      합류코드가 입력된 이메일로 예약 전송됩니다.
                      <br /> 이메일을 입력하지 않은 경우, 합류코드를 전송할 수
                      없습니다.
                    </GuidLine>
                  </>
                )}
                <CustomDivider />
                <Memo register={register('memo')} />
              </FormWrapper>
            </div>
          )}
        </Left>
        <Right>
          <div>
            <h3>근로정보</h3>
            <FormWrapper>
              <Check01
                onChange={() => setIsActiveWagesInput((prev) => !prev)}
                text="근로 정보 입력"
              />
              {isActiveWagesInput && (
                <>
                  <InputLabel
                    type="select"
                    name="wages"
                    setValue={setValue}
                    register={register('wages')}
                  >
                    근로정보
                  </InputLabel>
                  <InputLabel
                    type="custom"
                    name="appliedPeriod"
                    customInput={
                      <DatePicker onChange={onChangeAppliedPeriod} />
                    }
                  >
                    적용 시점
                  </InputLabel>
                </>
              )}
            </FormWrapper>
          </div>
        </Right>
      </WrapperM>
      <Footer
        onSoftDelete={onSoftDelete}
        isEdit={props.editTarget}
        onCancel={props.onCancel}
      />
    </form>
  );
};

export default MemberForm;

const WrapperM = styled.div`
  min-width: 1100px;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  h3 {
    background-color: ${styleSet.colors.lightGray};
    font-family: ${styleSet.fonts.B};
    font-size: ${styleSet.fontSizes.normal};
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    min-width: auto;
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 3;
`;
const Right = styled.div`
  flex: 2;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const FormContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const InnerContent = styled.div`
  min-width: 18rem;
  height: 2rem;
  display: flex;
  gap: 1rem;
`;

const CustomDivider = styled(Divider)`
  margin: 0;
`;

const GuidLine = styled.p`
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.small};
  color: #777;
`;
