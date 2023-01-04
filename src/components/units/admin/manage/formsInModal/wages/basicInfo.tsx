import InputLabel from '../../../../../commons/inputLabel';
import Footer from '../common/footer';
import Memo from '../common/memo';
import { IWagesProps } from './wages.types';

const BasicInfo = (props: IWagesProps) => {
  return (
    <>
      <InputLabel type="text" name="wageName" register={props.register('name')}>
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
        name="fixedLaborDays"
        register={props.register('fixedLaborDays')}
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
        name="weekOffDays"
        register={props.register('weekOffDays')}
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
