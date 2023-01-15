import styled from '@emotion/styled';
import { MouseEvent } from 'react';
import { styleSet } from '../../../commons/styles/styleSet';

interface IBtn01Props {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  bdC?: string;
  bgC?: string;
  color?: string;
  hoverBdc?: string;
  hoverBgc?: string;
  hoverColor?: string;
  fontSize?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface IStyleProps {
  bdC?: string;
  bgC?: string;
  color?: string;
  fontSize?: string;
  disabledStatus?: boolean;
  hoverBdC?: string;
  hoverBgC?: string;
  hoverColor?: string;
}

const Btn01 = (props: IBtn01Props) => {
  return (
    <Btn
      disabledStatus={props.disabled}
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
      color={props.color}
      bdC={props.bdC}
      bgC={props.bgC}
      fontSize={props.fontSize}
      hoverBdC={props.hoverBdc}
      hoverBgC={props.hoverBgc}
      hoverColor={props.hoverColor}
    >
      {props.text}
    </Btn>
  );
};

export default Btn01;

const Btn = styled.button`
  padding: 8px 16px;
  font-size: ${(Props: IStyleProps) => (Props.fontSize ? Props.fontSize : '')};
  color: ${(Props: IStyleProps) => (Props.color ? Props.color : '')};
  background: ${(Props: IStyleProps) =>
    Props.bgC ? (Props.disabledStatus ? styleSet.colors.gray : Props.bgC) : ''};
  border: ${(Props: IStyleProps) => (Props.bdC ? '1px' : 'none')} solid
    ${(Props: IStyleProps) => (Props.bdC ? Props.bdC : '#000')};
  border-radius: 2px;
  cursor: ${(Props: IStyleProps) =>
    Props.disabledStatus ? 'auto' : 'pointer'};

  :hover {
    color: ${(Props: IStyleProps) =>
      Props.hoverColor ? Props.hoverColor : ''};
    background: ${(Props: IStyleProps) =>
      Props.hoverBgC
        ? Props.disabledStatus
          ? styleSet.colors.gray
          : Props.hoverBgC
        : ''};
    border: ${(Props: IStyleProps) => (Props.hoverBdC ? '1px' : 'none')} solid
      ${(Props: IStyleProps) => (Props.bdC ? Props.hoverBdC : '#000')};
  }

  transition: all 0.3s ease-in-out;
`;
