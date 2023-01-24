import InputLabel from '../../common/inputLabel';
import Memo from '../../common/memo';
import { IWagesProps } from '../workInfo.types';
import styled from '@emotion/styled';

const BasicInfo = (props: IWagesProps) => {
  return (
    <Wrapper>
      <InputLabel type="text" name="name" register={props.register('name')}>
        근로정보명
      </InputLabel>
      {/* <InputLabel
        type="number"
        name="hourlyWage"
        register={props.register('hourlyWage')}
      >
        시급 (₩)
      </InputLabel> */}
      <InputLabel
        type="select"
        name="fixedLabor"
        register={props.register('fixedLabor')}
        setValue={props.setValue}
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
        returnNameMode
      >
        소정근로요일
      </InputLabel>
      <InputLabel
        type="select"
        name="weekOffDays"
        register={props.register('weekOffDays')}
        setValue={props.setValue}
        data={[
          { id: '0', name: '월' },
          { id: '1', name: '화' },
          { id: '2', name: '수' },
          { id: '3', name: '목' },
          { id: '4', name: '금' },
          { id: '5', name: '토' },
          { id: '6', name: '일' },
        ]}
        defaultChecked={[{ id: '6', name: '일' }]}
        textFillMode
        returnNameMode
      >
        주휴요일
      </InputLabel>
      <Memo register={props.register('memo')} />
    </Wrapper>
  );
};

export default BasicInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
