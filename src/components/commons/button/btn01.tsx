import styled from '@emotion/styled';
import { MouseEvent } from 'react';
import { styleSet } from '../../../commons/styles/styleSet';

interface IBtn01Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  color?: string;
  bdC?: string;
  bgC?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface IStyleProps {
  color?: string;
  bdC?: string;
  bgC?: string;
  disabledStatus?: boolean;
}

const Btn01 = ({
  disabled,
  text,
  type,
  bdC,
  bgC,
  color,
  onClick,
}: IBtn01Props) => {
  return (
    <Btn
      disabledStatus={disabled}
      disabled={disabled}
      type={type}
      onClick={onClick}
      color={color}
      bdC={bdC}
      bgC={bgC}
    >
      {text}
    </Btn>
  );
};

export default Btn01;

const Btn = styled.button`
  padding: 8px 16px;
  color: ${(Props: IStyleProps) => (Props.color ? Props.color : '')};
  background: ${(Props: IStyleProps) =>
    Props.bgC ? (Props.disabledStatus ? styleSet.colors.gray : Props.bgC) : ''};
  border: ${(Props: IStyleProps) => (Props.bdC ? '1px' : 'none')} solid
    ${(Props: IStyleProps) => (Props.bdC ? Props.bdC : '#000')};
  border-radius: 2px;
  cursor: ${(Props: IStyleProps) =>
    Props.disabledStatus ? 'help' : 'pointer'};

  transition: all 0.3s ease-in-out;
`;
