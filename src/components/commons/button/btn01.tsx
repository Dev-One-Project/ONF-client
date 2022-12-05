import styled from "@emotion/styled";
import { MouseEvent } from "react";

interface IBtn01Props {
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  color?: string;
  bdC?: string;
  bgC?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface IStyleProps {
  color?: string;
  bdC?: string;
  bgC?: string;
}

const Btn01 = ({ text, type, bdC, bgC, color, onClick }: IBtn01Props) => {
  return (
    <Btn type={type} onClick={onClick} color={color} bdC={bdC} bgC={bgC}>
      {text}
    </Btn>
  );
};

export default Btn01;

const Btn = styled.button`
  padding: 8px 16px;
  color: ${(Props: IStyleProps) => (Props.color ? Props.color : "")};
  background: ${(Props: IStyleProps) => (Props.bgC ? Props.bgC : "")};
  border: ${(Props: IStyleProps) => (Props.bdC ? "1px" : "none")} solid
    ${(Props: IStyleProps) => (Props.bdC ? Props.bdC : "#000")};
  border-radius: 4px;
`;
