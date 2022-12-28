import InputLabel from '../../../../../commons/inputLabel';
import Footer from '../common/footer';
import Memo from '../common/memo';
import { IWagesProps } from './wages.types';
const data = [
  { id: '1', name: '일' },
  { id: '2', name: '월' },
  { id: '3', name: '화' },
  { id: '4', name: '수' },
  { id: '5', name: '목' },
  { id: '6', name: '금' },
  { id: '7', name: '토' },
];
const select = [
  { id: '2', name: '월' },
  { id: '3', name: '화' },
  { id: '4', name: '수' },
  { id: '5', name: '목' },
  { id: '6', name: '금' },
];
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
        data={data}
        defaultChecked={select}
        // fieldName={'fixedWorkingDays'}
        textFillMode
      >
        소정근로요일
      </InputLabel>
      <InputLabel
        type="select"
        name="weekDays"
        register={props.register('weekDays')}
        data={data}
        defaultChecked={[
          { id: '1', name: '일' },
          { id: '7', name: '토' },
        ]}
        setValue={props.setValue}
        // fieldName={'weekDays'}
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
