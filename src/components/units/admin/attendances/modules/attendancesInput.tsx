import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { styleSet } from '../../../../../commons/styles/styleSet';

interface IAttendancesInputProps {
  setState?: Dispatch<SetStateAction<string>>;
  register: UseFormRegisterReturn;
}

const AttendancesInput = (props: IAttendancesInputProps) => {
  // const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value.length > 2) {
  //     e.target.value = e.target.value.slice(0, 2);
  //   }
  //   props.setState(e.target.value);
  // };

  return (
    <>
      <Input type={'number'} {...props.register} />
    </>
  );
};

export default AttendancesInput;

const Input = styled.input`
  width: 3rem;
  height: 30px;
  border-radius: 0;
  border: 1px solid #ddd;
  padding: 0.5rem 0.7rem;
  text-align: center;
  :focus {
    border: 1px solid ${styleSet.colors.primary};
    outline: none;
    transition: all 0.1s ease-in-out;
  }
`;
