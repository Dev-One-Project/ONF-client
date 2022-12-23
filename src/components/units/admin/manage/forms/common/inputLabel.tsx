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
  register: UseFormRegisterReturn;
  data?: string[];
  setValue?: UseFormSetValue<FieldValues>;
  fieldName?: string;
  defaultChecked?: any[];
  textFillMode?: boolean;
  noSearch?: boolean;
}

const InputLabel = (props: IInputLabelProps) => {
  return (
    <FormContent>
      <Label for={props.name}>{props.children}</Label>
      {props.type === 'select' ? (
        <Select01
          register={props.register}
          setValue={props.setValue}
          fieldName={props.fieldName}
          noSearch={props.noSearch}
          data={props.data}
          defaultChecked={props.defaultChecked}
          textFillMode={props.textFillMode}
        />
      ) : (
        <Input01
          width="15rem"
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
