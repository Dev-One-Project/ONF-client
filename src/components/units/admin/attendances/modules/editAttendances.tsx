import styled from '@emotion/styled';
import { DatePicker, Divider } from 'antd';
import Btn01 from '../../../../commons/button/btn01';
import Check01 from '../../../../commons/input/check01';
import Select02 from '../../../../commons/input/select02';
import Textarea from '../../../../commons/textarea';
import AttendancesInput from './attendancesInput';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@apollo/client';
import {
  IQuery,
  IQueryFetchMemberScheduleArgs,
} from '../../../../../commons/types/generated/types';
import { styleSet } from '../../../../../commons/styles/styleSet';
import moment from 'moment';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dispatch, SetStateAction } from 'react';

const schema = yup.object({
  startHour: yup.string().matches(/^\d{2}$/),
  startMin: yup.string().matches(/^\d{2}$/),
  endHour: yup.string().matches(/^\d{2}$/),
  endMin: yup.string().matches(/^\d{2}$/),
});

const FETCH_ORGANIZATIONS = gql`
  query {
    fetchOrganizations {
      id
      name
    }
  }
`;

const FETCH_MEMBERS = gql`
  query {
    fetchMembers {
      id
      name
    }
  }
`;

const FETCH_ROLE_CATEGORIES = gql`
  query {
    fetchRoleCategories {
      id
      name
    }
  }
`;

export const FETCH_MEMBER_SCHEDULE = gql`
  query fetchMemberSchedule($memberId: String!, $date: DateTime!) {
    fetchMemberSchedule(memberId: $memberId, date: $date) {
      id
      scheduleCategory {
        id
        name
      }
    }
  }
`;

export const CREATE_ADMIN_WORK_CHECK = gql`
  mutation createAdminWorkCheck($createWorkCheckInput: CreateWorkCheckInput!) {
    createAdminWorkCheck(createWorkCheckInput: $createWorkCheckInput) {
      id
    }
  }
`;

interface IAddAttendancesProps {
  onCancel?: () => void;
  setAniMode: Dispatch<SetStateAction<boolean>>;
}

const AddAttendances = (props: IAddAttendancesProps) => {
  const dateFormat = 'YYYY-MM-DD';

  const { handleSubmit, register, setValue, control, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const date = moment(watch('workDay'));
  const memberId = watch('memberId');

  const [createAdminWorkCheck] = useMutation(CREATE_ADMIN_WORK_CHECK);

  const { data: memberSchedule } = useQuery<
    Pick<IQuery, 'fetchMemberSchedule'>,
    IQueryFetchMemberScheduleArgs
  >(FETCH_MEMBER_SCHEDULE, {
    variables: {
      memberId,
      date,
    },
  });

  const memberScheduleData = [
    {
      id: memberSchedule?.fetchMemberSchedule?.scheduleCategory.id,
      name: memberSchedule?.fetchMemberSchedule?.scheduleCategory.name,
    },
  ];

  const { data: organizations } =
    useQuery<Pick<IQuery, 'fetchOrganizations'>>(FETCH_ORGANIZATIONS);

  const organizationData = organizations?.fetchOrganizations.map(
    (organization) => ({
      id: String(organization.id),
      name: String(organization.name),
    }),
  );

  const { data: members } =
    useQuery<Pick<IQuery, 'fetchMembers'>>(FETCH_MEMBERS);

  const memberData = members?.fetchMembers.map((member) => ({
    id: String(member.id),
    name: String(member.name),
  }));

  const { data: roleCategories } = useQuery<
    Pick<IQuery, 'fetchRoleCategories'>
  >(FETCH_ROLE_CATEGORIES);

  const roleCategoryData = roleCategories?.fetchRoleCategories.map(
    (roleCategory) => ({
      id: String(roleCategory.id),
      name: String(roleCategory.name),
    }),
  );

  const onSubmit = async (data: any) => {
    try {
      data.workingTime = `${String(data.startHour)}${String(data.startMin)}`;
      data.quittingTime = `${String(data.endHour)}${String(data.endMin)}`;
      const { startHour, startMin, endHour, endMin, ...rest } = data;
      console.log(rest);
      await createAdminWorkCheck({
        variables: { createWorkCheckInput: { ...rest } },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      props.setAniMode(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ContentBox>
          <span>날짜</span>
          <Controller
            control={control}
            name="workDay"
            defaultValue={new Date()}
            render={({ field: { onChange } }) => (
              <DatePicker
                style={{ borderRadius: '0', height: '36px' }}
                defaultValue={dayjs(new Date())}
                onChange={(value: any) => onChange(value?.$d)}
                format={dateFormat}
              />
            )}
          />
        </ContentBox>
        <ContentBox>
          <span>직원</span>
          <Select02
            category={['최고관리자', '직원']}
            data={memberData}
            register={register('memberId')}
            name={'memberId'}
            setValue={setValue}
          />
        </ContentBox>
        <ContentBox>
          <span>근무일정</span>
          <Select02
            data={memberScheduleData}
            customWidth="260px"
            register={register('scheduleId')}
            name={'scheduleId'}
            setValue={setValue}
          />
        </ContentBox>
        <ContentBox>
          <span>조직</span>
          <Select02
            data={organizationData}
            register={register('organizationId')}
            name={'organizationId'}
            setValue={setValue}
          />
        </ContentBox>
        <ContentBox>
          <span>직무</span>
          <Select02
            data={roleCategoryData}
            register={register('roleCategoryId')}
            name={'roleCategoryId'}
            setValue={setValue}
          />
        </ContentBox>
        <ContentBox>
          <span>출근시간</span>
          <InputBox>
            <AttendancesInput register={register('startHour')} />
            <span>:</span>
            <AttendancesInput register={register('startMin')} />
            <span>{`1월 5일 `}</span>
            <span></span>
          </InputBox>
        </ContentBox>
        <ContentBox>
          <span>퇴근시간</span>
          <InputBox>
            <AttendancesInput register={register('endHour')} />
            <span>:</span>
            <AttendancesInput register={register('endMin')} />
            <span>{`1월 5일 `}</span>
          </InputBox>
        </ContentBox>
        <WorkBox>
          <Check01 />
          <span>현재 근무중</span>
        </WorkBox>
        <Divider style={{ margin: '0' }} />
        <ContentBox className="memo">
          <span>근무노트</span>
          <Textarea register={register('workCheckMemo')} />
        </ContentBox>
        <Divider style={{ margin: '0', transform: 'scaleX(1.04)' }} />
        <BtnBox>
          <Btn01
            text="닫기"
            bdC="#ddd"
            type="button"
            onClick={props.onCancel}
          />
          <Btn01
            text="추가하기"
            bdC={styleSet.colors.primary}
            bgC={styleSet.colors.primary}
            color="white"
          />
        </BtnBox>
      </Form>
    </Wrapper>
  );
};

export default AddAttendances;

const Wrapper = styled.section`
  width: 50rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .memo {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > span {
      width: 100%;
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span {
    display: block;
    width: 100px;
  }
`;

const WorkBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 2rem 6rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  span:nth-of-type(2) {
    font-size: 0.6rem;
    color: #888;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
