import styled from '@emotion/styled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import FallingModal from '../../../commons/modal/fallingModal';
import ScrollableTable from '../../../commons/scrollableTable/table';
import Switch01 from '../../../commons/switch/switch01';
import MemberForm from './forms/member';
import OrganizationForm from './forms/oranization';

interface IManageProps {
  tab: string;
}

const ACTIVE_TABS = ['직원', '지점', '근로 정보'];

const Manage = (props: IManageProps) => {
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
  };

  const onSubmit = (data: any) => {
    if (data) {
      console.log(data);
      setAniMode(false);
    }
  };
  return (
    <>
      {isOpen && (
        <FallingModal
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          aniMode={aniMode}
          onCancel={onClickCloseModal}
          title={`${props.tab} 추가하기`}
        >
          {props.tab === '직원' ? (
            <MemberForm
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              onCancel={onClickCloseModal}
              register={register}
            />
          ) : (
            <OrganizationForm
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              onCancel={onClickCloseModal}
              register={register}
            />
          )}
        </FallingModal>
      )}
      <Wrapper>
        <Header>
          <Title>{props.tab} 관리</Title>
          <Btn01
            bdC={styleSet.colors.primary}
            bgC={styleSet.colors.primary}
            color="white"
            text={`+ ${props.tab} 추가하기`}
            onClick={onClickOpenModal}
          />
        </Header>
        <ContentBox>
          {ACTIVE_TABS.includes(props.tab) && (
            <SwitchBox>
              <Switch01 text={`비활성화된 ${props.tab}들 보기`} />
            </SwitchBox>
          )}
          {props.tab === '직원' && (
            <TotalMembersCount>
              총 직원 수: {'직원 수 데이터'}
            </TotalMembersCount>
          )}
          <ScrollableTable tab={props.tab} />
        </ContentBox>
      </Wrapper>
    </>
  );
};

export default Manage;

const Wrapper = styled.section``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: ${styleSet.fonts.B};
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ContentBox = styled.div``;

const SwitchBox = styled.div`
  padding: 1.5rem 0;
`;

const TotalMembersCount = styled.span`
  font-family: ${styleSet.fonts.B};
`;
