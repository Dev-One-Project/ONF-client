import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import { IFormProps } from '../common/form.types';
import BasicInfo from './basicInfo';
import ContractedLaborRules from './contractedLaborRules';
import MaximumLaborRules from './maximumLaborRules';

interface IStyle {
  isActive: boolean;
}

const TAB_NAME = ['기본 정보', '소정근로규칙', '최대근로규칙'];

const Wages = (props: IFormProps) => {
  const [isActive, setIsActive] = useState([true, false, false]);
  const onClickTab = (index: number) => () => {
    setIsActive((prev) => {
      const filtered = prev.map((_, i) => {
        if (i === index) return true;
        else return false;
      });
      return filtered;
    });
  };
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <TabUl>
          {TAB_NAME.map((tab, i) => (
            <TabLi key={i}>
              <Tab isActive={isActive[i]} onClick={onClickTab(i)}>
                {tab}
              </Tab>
            </TabLi>
          ))}
        </TabUl>
        <InputWrapper>
          {isActive[0] && (
            <BasicInfo
              register={props.register}
              setValue={props.setValue}
              onCancel={props.onCancel}
            />
          )}
          {isActive[1] && (
            <ContractedLaborRules
              register={props.register}
              setValue={props.setValue}
              onCancel={props.onCancel}
            />
          )}
          {isActive[2] && (
            <MaximumLaborRules
              register={props.register}
              setValue={props.setValue}
              onCancel={props.onCancel}
            />
          )}
        </InputWrapper>
      </Wrapper>
    </form>
  );
};

export default Wages;

const Wrapper = styled.div`
  width: 44rem;
`;

const TabUl = styled.ul`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const TabLi = styled.li`
  margin-bottom: -1px;
`;

const Tab = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  cursor: pointer;

  :hover {
    color: ${styleSet.colors.primary};
  }

  ${(props: IStyle) =>
    props.isActive &&
    css`
      border-bottom: 2px solid ${styleSet.colors.primary};
      :not(span) {
        color: ${styleSet.colors.primary};
      }
    `};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;
`;
