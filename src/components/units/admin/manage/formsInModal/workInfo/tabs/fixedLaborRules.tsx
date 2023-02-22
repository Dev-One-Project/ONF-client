import styled from '@emotion/styled';
import { useState } from 'react';
import { styleSet } from '../../../../../../../commons/styles/styleSet';
import Check01 from '../../../../../../commons/input/check01';
import Label from '../../common/label';
import { IWorkInfoTabProps } from '../workInfo.types';

const FixedLaborRules = (props: IWorkInfoTabProps) => {
  const [open, setOpen] = useState(true);
  return (
    <Wrapper>
      <Check01
        checked={open}
        onChange={() => setOpen((prev) => !prev)}
        text="소정근로규칙 사용"
      />
      {open && (
        <>
          <FormContent>
            <Label width="10rem">소정근로시간</Label>
            <InputBox>
              <Select
                defaultValue={'WEEK'}
                {...props.register('fixedStandard')}
              >
                <option value={'DAY'}>1일</option>
                <option value={'WEEK'}>1주</option>
                <option value={'MONTH'}>1개월</option>
              </Select>
              <HourBox>
                <HourInput
                  defaultValue={40}
                  {...props.register('fixedHours')}
                  type="number"
                />
                <LabelPerHour>시간</LabelPerHour>
              </HourBox>
            </InputBox>
          </FormContent>
          <FormContent>
            <Label width="10rem">연장근로 최소기준</Label>
            <InputBox>
              <Select>
                <option>1일</option>
                <option>1주</option>
                <option>1개월</option>
              </Select>
              <HourBox>
                <HourInput type="number" />
                <LabelPerHour>시간</LabelPerHour>
              </HourBox>
            </InputBox>
          </FormContent>
          <FormContent>
            <Label width="10rem">연장근로 최대기준</Label>
            <InputBox>
              <Select>
                <option>1일</option>
                <option>1주</option>
                <option>1개월</option>
              </Select>
              <HourBox>
                <HourInput type="number" />
                <LabelPerHour>시간</LabelPerHour>
              </HourBox>
            </InputBox>
          </FormContent>
          <FormContent>
            <Label width="10rem">단위기간</Label>
            <InputBox>
              <HourBox>
                <HourInput
                  defaultValue={1}
                  {...props.register('fixedUnitPeriod')}
                  type="number"
                />
              </HourBox>
              <Select
                defaultValue={'MONTH'}
                {...props.register('fixedPeriodRange')}
              >
                <option value={'DAY'}>일</option>
                <option value={'WEEK'}>주</option>
                <option value={'MONTH'}>개월</option>
              </Select>
            </InputBox>
          </FormContent>
        </>
      )}
    </Wrapper>
  );
};

export default FixedLaborRules;

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
  transition: all 0.3s ease-in-out;
  :focus {
    border: 1px solid ${styleSet.colors.primary};
  }
`;

const HourBox = styled.div`
  display: flex;
`;

const HourInput = styled.input`
  width: 5rem;
  padding: 0.5rem;
  outline: none;
  border: 1px solid ${styleSet.colors.gray};

  transition: all 0.3s ease-in-out;
  :focus {
    border: 1px solid ${styleSet.colors.primary};
  }
`;

const LabelPerHour = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${styleSet.colors.lightGray};
  border: 1px solid ${styleSet.colors.gray};
  border-left: none;
`;
