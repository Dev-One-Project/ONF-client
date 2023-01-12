import styled from '@emotion/styled';
import { DatePicker, Divider } from 'antd';
import Btn01 from '../../../../commons/button/btn01';
import Check01 from '../../../../commons/input/check01';
import Select02 from '../../../../commons/input/select02';
import Textarea from '../../../../commons/textarea';
import AttendancesInput from './attendancesInput';
import dayjs from 'dayjs';
import {
  Control,
  Controller,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { gql, useQuery } from '@apollo/client';
import { IQuery } from '../../../../../commons/types/generated/types';
import { styleSet } from '../../../../../commons/styles/styleSet';

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

interface IAddAttendancesProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  onCancel?: () => void;
  control: Control<FieldValues, any>;
  setValue?: UseFormSetValue<FieldValues>;
}

const AddAttendances = (props: IAddAttendancesProps) => {
  const dateFormat = 'YYYY-MM-DD';

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

  return (
    <Wrapper>
      <Form onSubmit={props.handleSubmit(props.onSubmit)}>
        <ContentBox>
          <span>날짜</span>
          <Controller
            control={props.control}
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
            register={props.register('memberId')}
            name={'memberId'}
            setValue={props.setValue}
          />
        </ContentBox>
        <ContentBox>
          <span>근무일정</span>
          <Select02
            data={[
              {
                id: '4d70eb46-ef64-4b45-b77e-25d566c30290',
                name: '일근무일정',
              },
            ]}
            customWidth="260px"
            register={props.register('scheduleId')}
            name={'scheduleId'}
            setValue={props.setValue}
          />
        </ContentBox>
        <ContentBox>
          <span>조직</span>
          <Select02
            data={organizationData}
            register={props.register('organizationId')}
            name={'organizationId'}
            setValue={props.setValue}
          />
        </ContentBox>
        <ContentBox>
          <span>직무</span>
          <Select02
            data={roleCategoryData}
            register={props.register('roleCategoryId')}
            name={'roleCategoryId'}
            setValue={props.setValue}
          />
        </ContentBox>
        <ContentBox>
          <span>출근시간</span>
          <InputBox>
            <AttendancesInput register={props.register('startHour')} />
            <span>:</span>
            <AttendancesInput register={props.register('startMin')} />
            <span>{`1월 5일 `}</span>
            <span></span>
          </InputBox>
        </ContentBox>
        <ContentBox>
          <span>퇴근시간</span>
          <InputBox>
            <AttendancesInput register={props.register('endHour')} />
            <span>:</span>
            <AttendancesInput register={props.register('endMin')} />
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
          <Textarea register={props.register('workCheckMemo')} />
        </ContentBox>
        <Divider style={{ margin: '0' }} />
        <ConfirmedBox>
          <div></div>
          <span>확정됨</span>
        </ConfirmedBox>
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

const ConfirmedBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  gap: 1rem;
  > div {
    width: 1rem;
    height: 1rem;
    background-color: #ddd;
  }
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
