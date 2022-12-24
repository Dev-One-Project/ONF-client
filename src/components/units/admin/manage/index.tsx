import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import FallingModal from '../../../commons/modal/fallingModal';
import ScrollableTable from '../../../commons/scrollableTable/table';
import Switch01 from '../../../commons/switch/switch01';
import Form from './forms';

interface IManageProps {
  tab: string;
}

interface IStyle {
  isLocation: boolean;
}

const Manage = (props: IManageProps) => {
  const ACTIVE_TABS = ['직원', '지점', '근로 정보'];
  const { register, handleSubmit, setValue } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);

  const [isLocation, setIsLocation] = useState(false);

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
          title={`${
            props.tab === '지점' && isLocation ? '출퇴근 장소' : props.tab
          } 추가하기`}
        >
          <Form
            setValue={setValue}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            onCancel={onClickCloseModal}
            tab={props.tab === '지점' && isLocation ? '출퇴근 장소' : props.tab}
          />
        </FallingModal>
      )}
      <Wrapper>
        <Header>
          <Title>{props.tab} 관리</Title>
          <Btn01
            bdC={styleSet.colors.primary}
            bgC={styleSet.colors.primary}
            color="white"
            text={`+ ${
              props.tab === '지점' && isLocation ? '출퇴근 장소' : props.tab
            } 추가하기`}
            onClick={onClickOpenModal}
          />
        </Header>
        <ContentBox>
          <SwitchBox>
            {ACTIVE_TABS.includes(props.tab) && (
              <Switch01 text={`비활성화된 ${props.tab}들 보기`} />
            )}
          </SwitchBox>
          {props.tab === '직원' && (
            <TotalMembersCount>
              총 직원 수: {'직원 수 데이터'}
            </TotalMembersCount>
          )}
          {props.tab === '지점' && (
            <OrganizationTabBox>
              <ButtonBox>
                <ToggleButton
                  onClick={() => setIsLocation(false)}
                  isLocation={!isLocation}
                  type="button"
                >
                  지점
                </ToggleButton>
                <ToggleButton
                  onClick={() => setIsLocation(true)}
                  isLocation={isLocation}
                  type="button"
                >
                  출퇴근 장소
                </ToggleButton>
              </ButtonBox>
            </OrganizationTabBox>
          )}
          <ScrollableTable tab={props.tab} isLocation={isLocation} />
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

const OrganizationTabBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonBox = styled.div`
  display: flex;
  font-size: ${styleSet.fontSizes.small};
  padding-bottom: 1rem;
`;

const ToggleButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 0px;
  padding: 0.5rem 1rem;
  :hover {
    background-color: #eee;
  }
  ${(props: IStyle) =>
    props.isLocation
      ? css`
          background-color: ${styleSet.colors.subColor05};
          :hover {
            background-color: ${styleSet.colors.subColor05};
          }
        `
      : null}

  :first-of-type {
    border-right: 0px;
  }
`;
