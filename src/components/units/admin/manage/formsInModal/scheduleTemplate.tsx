import styled from '@emotion/styled';
import { TimePicker } from 'antd';
import Footer from './common/footer';
import { IFormProps } from './common/form.types';
import InputLabel from './common/inputLabel';
import Memo from './common/memo';

const { RangePicker } = TimePicker;

const ScheduleTemplate = (props: IFormProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <InputLabel
          type="text"
          name="templateName"
          register={props.register('templateName')}
        >
          템플릿명
        </InputLabel>
        <InputLabel
          type="custom"
          name="time"
          customInput={
            <RangePicker
              onChange={(data: any) => {
                props.setValue?.('startTime', data?.[0]?.$d);
                props.setValue?.('endTime', data?.[1]?.$d);
              }}
              format={'HH:mm'}
            />
          }
        >
          시간
        </InputLabel>
        <InputLabel
          data={[
            { id: '오전 근무', name: '오전 근무' },
            { id: '야간 근무', name: '야간 근무' },
          ]}
          register={props.register('shiftTypes')}
          setValue={props.setValue}
          type="select"
          name="shiftTypes"
        >
          근무일정 유형
        </InputLabel>
        <InputLabel
          data={[
            { id: '패스트 파이브', name: '패스트 파이브' },
            { id: '영등포구청', name: '영등포구청' },
          ]}
          register={props.register('organization')}
          setValue={props.setValue}
          type="select"
          name="organization"
        >
          지점
        </InputLabel>
        <InputLabel
          data={[
            { id: '프론트엔드', name: '프론트엔드' },
            { id: '백엔드', name: '백엔드' },
          ]}
          register={props.register('duty')}
          setValue={props.setValue}
          type="select"
          name="duty"
        >
          직무
        </InputLabel>
        <InputLabel
          register={props.register('color')}
          type="color"
          name="color"
          inputWidth="1.5rem"
        >
          색깔
        </InputLabel>
        <Memo register={props.register('memo')} textareaHeight={'4rem'} />
      </Wrapper>
      <Footer onCancel={props.onCancel} />
    </form>
  );
};

export default ScheduleTemplate;

const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input[type='color'] {
    padding: 0;
  }
`;

// const CustomRangePicker = styled(RangePicker);
