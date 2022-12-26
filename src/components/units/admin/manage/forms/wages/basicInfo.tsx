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
        data={['일', '월', '화', '수', '목', '금', '토']}
        defaultChecked={['월', '화', '수', '목', '금']}
        fieldName={'fixedWorkingDays'}
        textFillMode
      >
        소정근로요일
      </InputLabel>
      <InputLabel
        type="select"
        name="weekDays"
        register={props.register('weekDays')}
        data={['일', '월', '화', '수', '목', '금', '토']}
        defaultChecked={['토', '일']}
        setValue={props.setValue}
        fieldName={'weekDays'}
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
