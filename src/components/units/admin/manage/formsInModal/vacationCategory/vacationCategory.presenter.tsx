import Footer from '../common/footer';
import InputLabel from '../common/inputLabel';
import Memo from '../common/memo';
import { TimeOptionBox, Wrapper } from './vacationCategory.styles';
import { IVacationCategoryPresenterProps } from './vacationCategory.types';

const VacationCategoryFormPresenter = (
  props: IVacationCategoryPresenterProps,
) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <InputLabel
          register={props.register('name')}
          type="text"
          name="name"
          labelWidth="5rem"
        >
          이름
        </InputLabel>
        <InputLabel
          data={props.organizations}
          register={props.register('organizationId')}
          setValue={props.setValue}
          type="select"
          name="organizationId"
          labelWidth="5rem"
          singleMode
          textFillMode
        >
          지점
        </InputLabel>
        <InputLabel
          data={props.roleCategories}
          register={props.register('roleCategoryId')}
          setValue={props.setValue}
          type="select"
          name="roleCategoryId"
          labelWidth="5rem"
          singleMode
          textFillMode
        >
          직무
        </InputLabel>
        <InputLabel
          name="timeOption"
          type="custom"
          labelWidth="5rem"
          customInput={
            <TimeOptionBox>
              <input
                type="radio"
                value="시간입력"
                id="time"
                defaultChecked
                {...props.register('timeOption')}
              />
              <label htmlFor="time">시간 입력</label>
              <input
                type="radio"
                value="하루종일"
                id="allDay"
                {...props.register('timeOption')}
              />
              <label htmlFor="allDay">하루 종일</label>
            </TimeOptionBox>
          }
        >
          시간 옵션
        </InputLabel>
        <InputLabel
          type="number"
          name="paidTime"
          register={props.register('paidTime')}
          labelWidth="5rem"
          inputWidth="5rem"
        >
          유급 시간(h)
        </InputLabel>
        <InputLabel
          type="number"
          name="deductionDays"
          register={props.register('deductionDays')}
          labelWidth="5rem"
          inputWidth="5rem"
          step="0.1"
        >
          차감 일수
        </InputLabel>
        <Memo register={props.register('memo')} />
      </Wrapper>
      <Footer isValid={props.isValid} onCancel={props.onCancel} />
    </form>
  );
};

export default VacationCategoryFormPresenter;
