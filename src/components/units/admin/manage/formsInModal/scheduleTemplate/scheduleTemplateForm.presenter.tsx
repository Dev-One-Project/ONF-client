import { TimePicker } from 'antd';
import Footer from '../common/footer';
import InputLabel from '../common/inputLabel';
import Memo from '../common/memo';
import { Wrapper } from './scheduleTemplateForm.styles';
import { IScheduleTemplateFormPresenterProps } from './scheduleTemplateForm.types';

const { RangePicker } = TimePicker;

const ScheduleTemplateFormPresenter = (
  props: IScheduleTemplateFormPresenterProps,
) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <InputLabel type="text" name="name" register={props.register('name')}>
          템플릿명
        </InputLabel>
        <InputLabel
          type="custom"
          name="time"
          customInput={
            <RangePicker
              onChange={(data: any) => {
                props.setValue(
                  'startTime',
                  `${String(data?.[0]?.$H).padStart(2, '0')}:${String(
                    data?.[0]?.$m,
                  ).padStart(2, '0')}`,
                );
                props.setValue(
                  'endTime',
                  `${String(data?.[1]?.$H).padStart(2, '0')}:${String(
                    data?.[1]?.$m,
                  ).padStart(2, '0')}`,
                );
              }}
              format={'HH:mm'}
            />
          }
        >
          시간
        </InputLabel>
        <InputLabel
          data={props.scheduleCategories}
          name="scheduleCategoryId"
          register={props.register('scheduleCategoryId')}
          setValue={props.setValue}
          type="select"
          singleMode
        >
          근무일정 유형
        </InputLabel>
        <InputLabel
          data={props.organizations}
          name="organizationId"
          register={props.register('organizationId')}
          setValue={props.setValue}
          type="select"
        >
          지점
        </InputLabel>
        <InputLabel
          data={props.roleCategories}
          name="roleCategoryId"
          register={props.register('roleCategoryId')}
          setValue={props.setValue}
          type="select"
        >
          직무
        </InputLabel>
        <InputLabel
          register={props.register('colorCode')}
          type="color"
          name="color"
          inputWidth="1.5rem"
        >
          색깔
        </InputLabel>
        <Memo register={props.register('memo')} textareaHeight={'4rem'} />
      </Wrapper>
      <Footer isValid={props.isValid} onCancel={props.onCancel} />
    </form>
  );
};

export default ScheduleTemplateFormPresenter;
