import styled from '@emotion/styled';
import { DatePicker, Divider } from 'antd';
import type { DatePickerProps } from 'antd';
import { useState } from 'react';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Check01 from '../../../../commons/input/check01';
import InputLabel from '../../../../commons/inputLabel';
import Footer from './common/footer';
import { IFormProps } from './common/form.types';
import { Dayjs } from 'dayjs';
import Memo from './common/memo';

const MemberForm = (props: IFormProps) => {
  const invitationArray = ['전송 안함', '즉시 전송', '예약 전송'];

  const [invitationRadio, setInvitationRadio] = useState([true, false, false]);
  const [isActiveStartDate, setIsActiveStartDate] = useState(false);
  const [isActiveEndDate, setIsActiveEndDate] = useState(false);
  const [isActiveWagesInput, setIsActiveWagesInput] = useState(false);

  const onChangeStartDate: DatePickerProps['onChange'] = (
    date: Dayjs | null,
  ) => {
    props.setValue?.('startDate', new Date(String(date?.format('YYYY-MM-DD'))));
  };
  const onChangeEndDate: DatePickerProps['onChange'] = (date: Dayjs | null) => {
    props.setValue?.('endDate', new Date(String(date?.format('YYYY-MM-DD'))));
  };
  const onChangeApplyFrom: DatePickerProps['onChange'] = (
    date: Dayjs | null,
  ) => {
    props.setValue?.('applyFrom', new Date(String(date?.format('YYYY-MM-DD'))));
  };

  const onChangeInvitation = (index: number) => () => {
    setInvitationRadio(invitationRadio.map((_, i) => index === i));
  };

  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <WrapperM>
        <Left>
          <div>
            <h3>직원정보</h3>
            <FormWrapper>
              <InputLabel
                type="text"
                name="name"
                register={props.register('name')}
              >
                이름
              </InputLabel>
              <InputLabel
                type="select"
                name="duty"
                setValue={props.setValue}
                register={props.register('duty')}
              >
                직무들
              </InputLabel>
              <InputLabel
                type="select"
                name="organization"
                setValue={props.setValue}
                register={props.register('organization')}
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
                      onChange={onChangeEndDate}
                      style={{ flex: '2' }}
                    />
                  )}
                </InnerContent>
              </FormContent>
            </FormWrapper>
          </div>
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
              {invitationRadio[1] && (
                <>
                  <InputLabel
                    type="text"
                    name="email"
                    setValue={props.setValue}
                    register={props.register('email')}
                  >
                    이메일
                  </InputLabel>
                  <p style={{ lineHeight: '1.5rem' }}>
                    합류코드가 각 직원에 등록된 이메일 및 전화번호로 즉시
                    전송됩니다.
                    <br /> 이메일 또는 전화번호를 입력하지 않은 경우, 합류코드를
                    전송할 수 없습니다.
                  </p>
                </>
              )}
              <CustomDivider />
              <Memo register={props.register('memo')} />
            </FormWrapper>
          </div>
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
                    setValue={props.setValue}
                    register={props.register('wages')}
                  >
                    근로정보
                  </InputLabel>
                  <InputLabel
                    type="custom"
                    name="applyFrom"
                    customInput={<DatePicker onChange={onChangeApplyFrom} />}
                  >
                    적용 시점
                  </InputLabel>
                </>
              )}
            </FormWrapper>
          </div>
        </Right>
      </WrapperM>
      <Footer onCancel={props.onCancel} />
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
