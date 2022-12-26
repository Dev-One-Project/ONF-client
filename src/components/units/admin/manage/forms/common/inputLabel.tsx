import styled from '@emotion/styled';
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form';
import Input01 from '../../../../../commons/input/input01';
import Select01 from '../../../../../commons/input/select01';
import Label from './label';

interface IInputLabelProps {
  children: string;
  type: string;
  name: string;
  register?: UseFormRegisterReturn;
  data?: string[];
  setValue?: UseFormSetValue<FieldValues>;
  defaultChecked?: any[];
  textFillMode?: boolean;
  noSearch?: boolean;
  labelWidth?: string;
  inputWidth?: string;
  customInput?: JSX.Element;
}

const InputLabel = (props: IInputLabelProps) => {
  return (
    <FormContent>
      <Label width={props.labelWidth} for={props.name}>
        {props.children}
      </Label>
      {props.type === 'select' ? (
        <Select01
          register={props.register}
          setValue={props.setValue}
          name={props.name}
          noSearch={props.noSearch}
          data={props.data}
          defaultChecked={props.defaultChecked}
          textFillMode={props.textFillMode}
        />
      ) : props.type === 'custom' ? (
        <>{props.customInput}</>
      ) : (
        <Input01
          width={props.inputWidth || '15rem'}
          id={props.name}
          type={props.type}
          register={props.register}
        />
      )}
    </FormContent>
  );
};

export default InputLabel;

const FormContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
