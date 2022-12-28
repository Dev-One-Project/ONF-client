import InputLabel from '../../../../../commons/inputLabel';
import Footer from '../common/footer';
import Memo from '../common/memo';
import { IWagesProps } from './wages.types';

const BasicInfo = (props: IWagesProps) => {
  return (
    <>
      <InputLabel
        type="text"
        name="wageName"
        register={props.register('wageName')}
      >
        근로정보명
      </InputLabel>
      <InputLabel
        type="number"
        name="hourlyWage"
        register={props.register('hourlyWage')}
      >
        시급 (₩)
      </InputLabel>
      <InputLabel
        type="select"
        name="fixedWorkingDays"
        register={props.register('fixedWorkingDays')}
        data={[
          { id: '0', name: '월' },
          { id: '1', name: '화' },
          { id: '2', name: '수' },
          { id: '3', name: '목' },
          { id: '4', name: '금' },
          { id: '5', name: '토' },
          { id: '6', name: '일' },
        ]}
        defaultChecked={[
          { id: '0', name: '월' },
          { id: '1', name: '화' },
          { id: '2', name: '수' },
          { id: '3', name: '목' },
          { id: '4', name: '금' },
        ]}
        textFillMode
      >
        소정근로요일
      </InputLabel>
      <InputLabel
        type="select"
        name="weekDays"
        register={props.register('weekDays')}
        data={[
          { id: '0', name: '월' },
          { id: '1', name: '화' },
          { id: '2', name: '수' },
          { id: '3', name: '목' },
          { id: '4', name: '금' },
          { id: '5', name: '토' },
          { id: '6', name: '일' },
        ]}
        defaultChecked={[
          { id: '5', name: '토' },
          { id: '6', name: '일' },
        ]}
        setValue={props.setValue}
        textFillMode
      >
        주휴요일
      </InputLabel>
      <Memo register={props.register('memo')} />
      <Footer onCancel={props.onCancel} />
    </>
  );
};

export default BasicInfo;
