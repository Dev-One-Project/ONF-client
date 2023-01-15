import styled from '@emotion/styled';
import { Divider } from 'antd';
import Check01 from '../../../../commons/input/check01';
import Footer from './common/footer';
import { IFormProps } from './common/form.types';
import InputLabel from './common/inputLabel';
import Memo from './common/memo';

const ScheduleCategory = (props: IFormProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <InputLabel
          register={props.register('shiftTypesName')}
          name="shiftTypesName"
          labelWidth="6.5rem"
          type="text"
        >
          근무일정 유형명
        </InputLabel>
        <InputLabel
          register={props.register('color')}
          name="color"
          labelWidth="6.5rem"
          inputWidth="1.5rem"
          type="color"
        >
          색깔
        </InputLabel>
        <Divider style={{ margin: '0' }} />
        <Check01
          text="연장근무일정 여부"
          register={props.register('isOvertimeSchedule')}
        />
        <Check01
          text="휴일근무 미적용 여부"
          register={props.register('isUnappliedHolidayWork')}
        />
        <Memo textareaHeight="5rem" register={props.register('memo')} />
      </Wrapper>
      <Footer onCancel={props.onCancel} />
    </form>
  );
};

export default ScheduleCategory;

const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
