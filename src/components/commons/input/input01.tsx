import styled from "@emotion/styled";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { styleSet } from "../../../commons/styles/styleSet";

interface IInput01Props {
  type?: string | undefined;
  register: UseFormRegister<FieldValues>;
}

const Input01 = ({ type, register }: IInput01Props) => {
  return <Input type={type} {...register} />;
};

export default Input01;

const Input = styled.input`
  width: 100%;
  border-radius: 2px;
  padding: 0.6rem;
  border: 1px solid ${styleSet.colors.gray};
`;
