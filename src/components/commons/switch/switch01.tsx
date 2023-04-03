import styled from '@emotion/styled';
import { SetStateAction, useEffect, useState } from 'react';
import { styleSet } from '../../../commons/styles/styleSet';

interface ISwitch01Props {
  isOn?: boolean;
  text?: string;
  init?: boolean;
  setInit?: SetStateAction<any>;
  status?: boolean;
  aniMode?: boolean;
  switch01?: boolean;
}

const Switch01 = (props: ISwitch01Props) => {
  const [isOn, setIsOn] = useState(props.init || false);

  const onClickSwitch = () => {
    setIsOn(!isOn);
    props.setInit?.((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (props.status === false) {
      setIsOn(false);
    } else if (props.status === true) {
      setIsOn(true);
    }
  }, [props.status]);

  return (
    <>
      <Switch onClick={onClickSwitch} className="switch">
        <Strong isOn={isOn}>
          {props.text ? props.text : isOn ? '근무중' : '근무끝'}
        </Strong>
        <Groove isOn={isOn}>
          <Handle isOn={isOn} />
        </Groove>
      </Switch>
    </>
  );
};

export default Switch01;

const Switch = styled.span`
  display: flex;
  word-break: keep-all;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  margin-right: 1rem;
  transition: all 0.35s;
`;

const Strong = styled.strong`
  font-size: ${styleSet.fontSizes.small};
  font-family: ${styleSet.fonts.B};
  color: ${({ isOn }: ISwitch01Props) =>
    isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transition: all 0.3s;
`;

export const Groove = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ isOn }: ISwitch01Props) =>
      isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transition: all 0.35s;
`;

const Handle = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  background: ${({ isOn }: ISwitch01Props) =>
    isOn ? `${styleSet.colors.primary}` : `${styleSet.colors.black}`};
  transform: translateX(${({ isOn }) => (isOn ? '20px' : '3px')});
  transition: 0.35s;
`;
