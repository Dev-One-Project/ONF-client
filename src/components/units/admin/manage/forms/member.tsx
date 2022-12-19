import styled from '@emotion/styled';
import { DatePicker, Divider } from 'antd';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Check01 from '../../../../commons/input/check01';
import Input01 from '../../../../commons/input/input01';
import Select01 from '../../../../commons/input/select01';

interface IMemberFormProps {
  register: UseFormRegister<FieldValues>;
  onCancel: () => void;
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

const MemberForm = (props: IMemberFormProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <WrapperM>
        <Left>
          <div>
            <h3>직원정보</h3>
            <FormContent>
              <Label>이름</Label>
              <Input01
                width="250px"
                type="text"
                register={props.register('name')}
              />
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
            <Input01 type="text" register={props.register('memo')} />
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
      <Divider style={{ margin: '0' }} />
      <Footer>
        <div></div>
        <ButtonBox>
          <Btn01
            onClick={props.onCancel}
            type="button"
            text="닫기"
            bdC="#ddd"
          />
          <Btn01
            text="저장"
            color="#fff"
            bgC={styleSet.colors.primary}
            bdC={styleSet.colors.primary}
          />
        </ButtonBox>
      </Footer>
    </form>
  );
};

export default MemberForm;

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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
