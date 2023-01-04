import styled from '@emotion/styled';
import { MouseEvent, useMemo, useState } from 'react';
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';
import Btn01 from '../button/btn01';

interface ISelectProps {
  register?: UseFormRegisterReturn;
  setValue?: UseFormSetValue<FieldValues>;
  data?: Array<{ id: string; name: string }> | undefined;
  role: string;
  left?: boolean;
  center?: boolean;
  defaultValue?: { id: string; name: string };
}

interface IStyle {
  active?: boolean;
  isLeft?: boolean;
  isCenter?: boolean;
}

const Select04 = (props: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isSelect, setIsSelect] = useState('');
  const [isSelectName, setIsSelectName] = useState('');

  useMemo(() => {
    if (props.defaultValue) {
      // setIsSelect(props.defaultValue);
      setIsSelectName(props.defaultValue.name);
      props.setValue?.(props.role, props.defaultValue.id);
    }
  }, [props]);

  const onClickToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const label = (role: string | undefined) => {
    if (role === 'organization') {
      return <Label>조직</Label>;
    }
    if (role === 'roleCategory') {
      return <Label>직무</Label>;
    }
    if (role === 'workType') {
      return <Label>근무일정 유형</Label>;
    }
  };

  const onClickBackground = (e: MouseEvent) => {
    if (e.currentTarget.id !== 'selectZone') {
      setIsOpen(false);
    }
  };

  const onClickSaveChecked = () => {
    setIsOpen(false);
  };

  const onClickLabel = (event: MouseEvent<HTMLParagraphElement>) => {
    props.setValue?.(props.role, event.currentTarget.id);
    // setIsSelect(event.currentTarget.id);
    setIsSelectName(event.currentTarget.innerText);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <Background onClick={onClickBackground}></Background>}
      <Wrapper>
        <ToggleButton
          className="selectZone"
          active={isOpen}
          type="button"
          onClick={onClickToggleModal}
        >
          {label(props.role)}
          <span>{isSelectName || '선택 안됨'}</span>
        </ToggleButton>
        {isOpen && (
          <DropDownMenu
            isLeft={props.left}
            isCenter={props.center}
            id="selectZone"
          >
            <OptionBox>
              {props.role === 'organization' ? (
                <p>조직</p>
              ) : props.role === 'roleCategory' ? (
                <p>직무</p>
              ) : (
                <p>근무일정 유형</p>
              )}
              <Options className="options">
                <div style={{ margin: '0.1rem 0' }} />
                {props.data?.map((el) => (
                  <p key={el.id} id={el.id} onClick={onClickLabel}>
                    {el.name}
                  </p>
                ))}
              </Options>
            </OptionBox>
            <Btn01
              text="닫기"
              type="button"
              bdC={styleSet.colors.primary}
              bgC={styleSet.colors.primary}
              color="#fff"
              onClick={onClickSaveChecked}
            />
          </DropDownMenu>
        )}
      </Wrapper>
      <InvisibleInput {...props.register} />
    </>
  );
};

export default Select04;

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const ToggleButton = styled.button`
  display: block;
  max-width: 350px;
  padding: 0.5rem 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  border-radius: 0;
  border: 1px solid
    ${(props: IStyle) => (props.active ? styleSet.colors.primary : '#ddd')};
  background-color: ${(props: IStyle) =>
    props.active ? styleSet.colors.subColor05 : '#fff'};

  ::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: '';
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
  transition: all 0.3s ease;

  :hover {
    background-color: ${(props: IStyle) =>
      props.active ? styleSet.colors.subColor05 : '#ffdddd'};
  }
`;

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column !important;
  gap: 0.3rem;
  max-width: 500px;
  min-width: 15rem;
  position: absolute;
  top: 100%;
  ${(props: IStyle) =>
    props.isLeft
      ? { right: 0 }
      : props.isCenter
      ? {
          left: '50%',
          transform: 'translateX(-50%)',
        }
      : { left: 0 }}
  padding: 0.5rem 0;
  margin-top: 1rem;
  border: 1px solid #ddd;
  background-color: white;
  box-shadow: 0 4px 16px rgb(130 135 147 / 36%);
  z-index: 99;

  & > * {
    max-width: 220px;
    width: 100%;
    margin: 0 auto;
  }
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;
  & > p {
    background-color: #ddd;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
  }
`;

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  p {
    height: 1.5rem;
  }
  p:hover {
    width: 100%;
    background-color: #ddd;
    cursor: pointer;
  }
`;

const Label = styled.label`
  padding-right: 1rem;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const InvisibleInput = styled.input`
  display: none;
`;
