import styled from '@emotion/styled';
import { useState } from 'react';
import { styleSet } from '../../../../../../../commons/styles/styleSet';
import Check01 from '../../../../../../commons/input/check01';
import Label from '../../common/label';
import { IWorkInfoTabProps } from '../workInfo.types';

const MaximumLaborRules = (props: IWorkInfoTabProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Check01
        checked={open}
        onChange={() => setOpen((prev) => !prev)}
        text="최대근로규칙 사용"
      />
      {open && (
        <>
          <FormContent>
            <Label width="10rem">최대근로시간</Label>
            <InputBox>
              <Select
                defaultValue={'WEEK'}
                {...props.register('maximumStandard')}
              >
                <option value={'DAY'}>1일</option>
                <option value={'WEEK'}>1주</option>
                <option value={'MONTH'}>1개월</option>
              </Select>
              <HourBox>
                <HourInput
                  defaultValue={52}
                  {...props.register('maximumHours')}
                  type="number"
                />
                <LabelPerHour>시간</LabelPerHour>
              </HourBox>
            </InputBox>
          </FormContent>
          <FormContent>
            <Label width="10rem">단위기간</Label>
            <InputBox>
              <HourBox>
                <HourInput
                  type="number"
                  defaultValue={1}
                  {...props.register('maximumUnitPeriod')}
                />
              </HourBox>
              <Select
                defaultValue={'MONTH'}
                {...props.register('maximumPeriodRange')}
              >
                <option value={'DAY'}>일</option>
                <option value={'WEEK'}>주</option>
                <option value={'MONTH'}>개월</option>
              </Select>
            </InputBox>
          </FormContent>
          {/* <Check01 text="휴일 포함" register={props.register('includeOff')} /> */}
        </>
      )}
    </Wrapper>
  );
};

export default MaximumLaborRules;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const FormContent = styled.div`
  display: flex;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Select = styled.select`
  outline: none;
  border: 1px solid ${styleSet.colors.gray};
  padding: 0.5rem;
`;

const HourBox = styled.div`
  display: flex;
  border: 1px solid ${styleSet.colors.gray};
`;

const HourInput = styled.input`
  width: 5rem;
  padding: 0.5rem;
  outline: none;
  border: none;
`;

const LabelPerHour = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${styleSet.colors.lightGray};
  border-left: 1px solid ${styleSet.colors.gray};
`;
