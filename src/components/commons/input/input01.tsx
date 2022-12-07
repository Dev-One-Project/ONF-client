import styled from '@emotion/styled';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';

interface IInput01Props {
  type?: string | undefined;
  register?: UseFormRegisterReturn;
  placeholder?: string;
}

const Input01 = (props: IInput01Props) => {
  return (
    <Input
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
    />
  );
};

export default Input01;

const Input = styled.input`
  width: 100%;
  border-radius: 2px;
  padding: 0.6rem;
  border: 1px solid ${styleSet.colors.gray};
`;
