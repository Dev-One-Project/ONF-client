import styled from '@emotion/styled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Check01 from '../../../../commons/input/check01';
import Input01 from '../../../../commons/input/input01';
import Select01 from '../../../../commons/input/select01';
import FallingModal from '../../../../commons/modal/fallingModal';
import ScrollableTable from '../../../../commons/scrollableTable/table';
import Switch01 from '../../../../commons/switch/switch01';
import { DatePicker, Divider } from 'antd';

const Members = () => {
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
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          aniMode={aniMode}
          onCancel={onClickCloseModal}
          title="직원 추가하기"
        >
          <WrapperM>
            <Left>
              <div>
                <h3>직원정보</h3>
                <FormContent>
                  <Label>이름</Label>
                  <Input01 width="250px" type="text" {...register('테스트1')} />
                </FormContent>
                <FormContent>
                  <Label>액세스 권한</Label>
                  <Select01 />
                </FormContent>
                <FormContent>
                  <Label>직무들</Label>
                  <Select01 />
                </FormContent>
                <FormContent>
                  <Label>팀들</Label>
                  <Select01 />
                </FormContent>
                <FormContent>
                  <InnerContent>
                    <Check01 text="입사일" />
                    <DatePicker />
                  </InnerContent>
                  <InnerContent>
                    <Check01 text="퇴사일" />
                    <DatePicker />
                  </InnerContent>
                </FormContent>
              </div>
              <div>
                <h3>직원합류 초대</h3>
                <FormContent>
                  <Check01 text="전송 안함" />
                  <Check01 text="즉시 전송" />
                  <Check01 text="예약 전송" />
                </FormContent>
                <Divider />
                메모
                <Input01 type="text" {...register('테스트2')} />
              </div>
            </Left>
            <Right>
              <div>
                <h3>근로정보</h3>
                <FormContent>
                  <Check01 text="근로 정보 입력" />
                </FormContent>
              </div>
              <div>
                <h3>휴가 발생</h3>
                <FormContent>
                  <Check01 text="규칙 기반 휴가 자동 발생 입력" />
                </FormContent>
              </div>
            </Right>
          </WrapperM>
        </FallingModal>
      )}
      <Wrapper>
        <Header>
          <Title>직원 관리</Title>
          <Btn01
            bdC={styleSet.colors.primary}
            bgC={styleSet.colors.primary}
            color="white"
            text="+ 직원 추가하기"
            onClick={onClickOpenModal}
          />
        </Header>
        <ContentBox>
          <SwitchBox>
            <Switch01 text="비활성화된 직원들 보기" />
          </SwitchBox>
          <TotalMembersCount>총 직원수: 2</TotalMembersCount>
          <ScrollableTable />
        </ContentBox>
      </Wrapper>
    </>
  );
};

export default Members;

const Wrapper = styled.section``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-family: ${styleSet.fonts.EB};
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

const WrapperM = styled.div`
  width: 1100px;
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
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 3;
`;
const Right = styled.div`
  flex: 2;
`;

const FormContent = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InnerContent = styled.div`
  min-width: 18rem;
  display: flex;
  gap: 1rem;
`;

const Label = styled.label`
  min-width: 120px;
`;
