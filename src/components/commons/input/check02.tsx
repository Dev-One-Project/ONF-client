import styled from '@emotion/styled';
import { ChangeEvent, MouseEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';

interface ICheck01Props {
  register?: UseFormRegisterReturn;
  text?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLLabelElement>) => void;
}

const Check02 = (props: ICheck01Props) => {
  return (
    <Label onClick={props.onClick}>
      {props.onChange ? (
        <InputInvisible
          type={'checkbox'}
          checked={props.checked}
          onChange={props.onChange}
          id={props.id}
        />
      ) : (
        <InputInvisible
          type={'checkbox'}
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          {...props.register}
        />
      )}
      <Checkbox className="checkbox" />
      <span>{props.text}</span>
    </Label>
  );
};

export default Check02;

const InputInvisible = styled.input`
  display: none;

  :checked ~ .checkbox {
    margin: 0 5px 0 10px;
    transform: rotate(45deg) translateX(-20%) translateY(-20%);
    width: 10px;
    border-color: ${styleSet.colors.primary};
    border-top-color: transparent;
    border-left-color: transparent;
  }
`;

const Checkbox = styled.span`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${styleSet.colors.black};
  border-radius: 2px;

  display: block;
  transition: all 0.35s;

  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  z-index: 100;
  cursor: pointer;
`;
