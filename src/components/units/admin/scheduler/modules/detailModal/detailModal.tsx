import styled from '@emotion/styled';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import { ISchedule } from '../../../../../../commons/types/generated/types';
import Input02 from '../../../../../commons/input/input02';
import { InitData } from '../../list/schedulerList.types';
import { useForm } from 'react-hook-form';
import Select04 from '../../../../../commons/input/select04';
import { useMutation } from '@apollo/client';
import { DELETE_SCHEDULE, UPDATE_SCHEDULE } from './detailModal.quries';

interface IProps {
  createdAt: string;
  schedule: Partial<ISchedule>;
  initData: InitData | undefined;
  onClickCloseModal: () => void;
}

// interface IFormData {
//   workType: string;
//   organization: string;
//   roleCategory: string;
//   startWorkHour: string;
//   startWorkMinute: string;
//   endWorkHour: string;
//   endWorkMinute: string;
//   note: string;
// }

const DetailModal = (props: IProps) => {
  const { register, handleSubmit, setValue } = useForm();

  const [updateSchedule] = useMutation(UPDATE_SCHEDULE);
  const [deleteSchedule] = useMutation(DELETE_SCHEDULE);

  const onSubmit = (data: any) => {
    const startWork = new Date(
      new Date(String(props.schedule.startWorkTime)).setHours(
        Number(data.startWorkHour),
      ),
    );
    startWork.setMinutes(Number(data.startWorkMinute));
    const endWork = new Date(
      new Date(String(props.schedule.endWorkTime)).setHours(
        Number(data.endWorkHour),
      ),
    );
    endWork.setMinutes(Number(data.endWorkMinute));

    updateSchedule({
      variables: {
        scheduleId: props.schedule.id,
        updateScheduleInput: {
          scheduleCategoryId: props.schedule.scheduleCategory?.id,
          organizationId: data.organization,
          roleCategoryId: data.roleCategory,
          startWorkTime: startWork,
          EndWorkTime: endWork,
          memo: data.note,
        },
      },
    })
      .then(() => {
        props.onClickCloseModal();
      })
      .catch(() => {});
  };

  const onClickDelete = () => {
    deleteSchedule({
      variables: {
        scheduleId: String(props.schedule.id),
      },
    })
      .then(() => {
        props.onClickCloseModal();
      })
      .catch(() => {});
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Body>
          <Row>
            <InnerText>근무일정 유형</InnerText>
            <Select04
              role={'workType'}
              data={props.initData?.workType}
              register={register('workType')}
              defaultValue={{
                id: String(props.schedule.scheduleCategory?.id),
                name: String(
                  props.schedule.scheduleCategory?.scheduleCategoryName,
                ),
              }}
              setValue={setValue}
            />
          </Row>
          <Row>
            <InnerText>조직</InnerText>
            <Select04
              role={'organization'}
              data={props.initData?.organization}
              register={register('organization')}
              defaultValue={{
                id: String(props.schedule.organization?.id),
                name: String(props.schedule.organization?.name),
              }}
              setValue={setValue}
            />
          </Row>
          <Row>
            <InnerText>직무</InnerText>
            <Select04
              role={'roleCategory'}
              data={props.initData?.roleCategory}
              register={register('roleCategory')}
              defaultValue={{
                id: String(props.schedule.roleCategory?.id),
                name: String(props.schedule.roleCategory?.duty),
              }}
              setValue={setValue}
            />
          </Row>
          <Row>
            <InnerText>시간</InnerText>
            <TimeBox>
              <Input02
                register={register('startWorkHour')}
                width={'3rem'}
                defaultValue={new Date(String(props.schedule.startWorkTime))
                  .getHours()
                  .toString()
                  .padStart(2, '0')}
                center
              />
              {' : '}
              <Input02
                register={register('startWorkMinute')}
                width={'3rem'}
                defaultValue={new Date(String(props.schedule.startWorkTime))
                  .getMinutes()
                  .toString()
                  .padStart(2, '0')}
                center
              />
              {'  ~  '}
              <Input02
                register={register('endWorkHour')}
                width={'3rem'}
                defaultValue={new Date(String(props.schedule.endWorkTime))
                  .getHours()
                  .toString()
                  .padStart(2, '0')}
                center
              />
              {' : '}
              <Input02
                register={register('endWorkMinute')}
                width={'3rem'}
                defaultValue={new Date(String(props.schedule.endWorkTime))
                  .getMinutes()
                  .toString()
                  .padStart(2, '0')}
                center
              />
            </TimeBox>
          </Row>
          <Row>
            <InnerText>근무일정 템플릿</InnerText>
            <InnerText style={{ color: styleSet.colors.darkGray }}>
              {props.schedule.scheduleTemplate?.name ||
                '템플릿이 적용되지 않은 근무일정입니다'}
            </InnerText>
          </Row>
          <Row>
            <InnerText>일정노트</InnerText>
          </Row>
          <Row>
            <Input02 register={register('note')} center />
          </Row>
          <Row>
            <DateText>생성일자 {props.createdAt}</DateText>
          </Row>
        </Body>
        <Footer>
          <FooterLeft>
            <CancelBtn type="button" title="삭제하기" onClick={onClickDelete}>
              삭제하기
            </CancelBtn>
          </FooterLeft>
          <FooterRight>
            <CloseBtn
              type="button"
              title="닫기"
              onClick={props.onClickCloseModal}
            >
              닫기
            </CloseBtn>
            <SaveBtn title="저장하기">변경사항 저장</SaveBtn>
          </FooterRight>
        </Footer>
      </Form>
    </Wrapper>
  );
};
export default DetailModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 30rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 0 0 0.5rem 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 0.5rem;
  border-top: 1px solid ${styleSet.colors.darkGray};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

// const Input = styled.input``;

const InnerText = styled.label`
  min-width: 6.25rem;
  font-size: ${styleSet.fontSizes.small};
`;

const DateText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${styleSet.colors.darkGray};
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
`;

const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  font-size: ${styleSet.fontSizes.normal};
  width: 6rem;
  height: 2rem;
  border: 1px solid ${styleSet.colors.gray};
  color: ${styleSet.colors.fail};

  :hover {
    background-color: ${styleSet.colors.lightGray};
    border: 1px solid ${styleSet.colors.fail};
  }
`;

const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  font-size: ${styleSet.fontSizes.normal};
  width: 3.75rem;
  height: 2rem;
  border: 1px solid ${styleSet.colors.gray};

  :hover {
    background-color: ${styleSet.colors.lightGray};
  }
`;

const SaveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
  font-size: ${styleSet.fontSizes.normal};
  width: 7.5rem;
  height: 2rem;
  color: ${styleSet.colors.white};
  /* border: 1px solid ${styleSet.colors.primary}; */
  background-color: ${styleSet.colors.primary};

  :hover {
    background-color: ${styleSet.colors.subColor01};
  }
`;
