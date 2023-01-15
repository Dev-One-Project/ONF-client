import { Divider } from 'antd';
import Check01 from '../../../../../commons/input/check01';
import Footer from '../common/footer';
import InputLabel from '../common/inputLabel';
import Memo from '../common/memo';
import { IScheduleCategoryFormPresenterProps } from './scheduleCategoryForm.types';
import { Wrapper } from './scheduleCategoryForm.styles';

const ScheduleCategoryFormPresenter = (
  props: IScheduleCategoryFormPresenterProps,
) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <InputLabel
          register={props.register('name')}
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
          register={props.register('isOvertime')}
        />
        <Check01
          text="휴일근무 미적용 여부"
          register={props.register('isNotHolidayWork')}
        />
        <Memo textareaHeight="5rem" register={props.register('memo')} />
      </Wrapper>
      <Footer isValid={props.isValid} onCancel={props.onCancel} />
    </form>
  );
};

export default ScheduleCategoryFormPresenter;
