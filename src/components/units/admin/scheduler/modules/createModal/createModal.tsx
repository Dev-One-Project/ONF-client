import styled from '@emotion/styled';
import { InitData } from '../../calendar/schedulerCalendar.types';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import Select01, { InputData } from '../../../../../commons/input/select01';
import Calendar from '../../../../../commons/calendar/calendar';
import { useEffect, useState } from 'react';
import Select05 from '../../../../../commons/input/select05';
import {
  IMember,
  IScheduleTemplate,
} from '../../../../../../commons/types/generated/types';
import { useMutation } from '@apollo/client';
import { CREATE_SCHEDULE } from './createModal.quries';
import { ErrorModal } from '../../../../../commons/modal/sweetAlertModal';

interface CreateModalProps {
  initData: InitData | undefined;
  templates: IScheduleTemplate[] | undefined;
  onClickCloseModal: () => void;
  member: IMember[] | undefined;
}

const CreateModal = (props: CreateModalProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<string>();
  const [customOrganization, setCustomOrganization] = useState<
    InputData[] | undefined
  >([]);
  const [selectedOrganization, setSelectedOrganization] = useState();

  const [createSchedule] = useMutation(CREATE_SCHEDULE);
  console.log(selected);

  useEffect(() => {
    if (selectedTemplate === undefined) return;
    setCustomOrganization(
      props.templates
        ?.filter((data) => data.id === selectedTemplate)[0]
        .organization.map((el) => {
          return { id: String(el.id), name: String(el.name) };
        }),
    );
  }, [selectedTemplate, props.templates]);

  const onClickSubmit = () => {
    const member = props.member?.filter(
      (member: IMember) => selectedOrganization === member.organization?.id,
    );

    if (selected.length === 0) {
      ErrorModal('근무일을 선택해주세요.');
    }

    createSchedule({
      variables: {
        dates: selected,
        createScheduleInput: {
          scheduleTemplateId: selectedTemplate,
          memberId: member?.map((el) => el.id),
        },
      },
    })
      .then(() => {
        props.onClickCloseModal();
      })
      .catch(() => {});
  };

  return (
    <Wrapper>
      <Body>
        <Row>
          <InnerText>근무일정 템플릿</InnerText>
          <Select05
            data={props.initData?.scheduleTemplate}
            setState={setSelectedTemplate}
            name={'scheduleTemplate'}
          />
        </Row>
        <Row>
          <InnerText>조직들</InnerText>
          <Select01
            data={customOrganization}
            setState={setSelectedOrganization}
            name={'organization'}
          />
        </Row>
        <Row>
          <Calendar selected={selected} setSelected={setSelected}></Calendar>
        </Row>
      </Body>
      <Footer>
        <FooterRight>
          <CloseBtn
            type="button"
            title="닫기"
            onClick={props.onClickCloseModal}
          >
            닫기
          </CloseBtn>
          <SaveBtn title="추가하기" onClick={onClickSubmit}>
            추가하기
          </SaveBtn>
        </FooterRight>
      </Footer>
    </Wrapper>
  );
};
export default CreateModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 30rem;
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
  justify-content: end;
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

const InnerText = styled.label`
  min-width: 6.25rem;
  font-size: ${styleSet.fontSizes.small};
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
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
  width: 5.5rem;
  height: 2rem;
  color: ${styleSet.colors.white};
  /* border: 1px solid ${styleSet.colors.primary}; */
  background-color: ${styleSet.colors.primary};

  :hover {
    background-color: ${styleSet.colors.subColor01};
  }
`;
