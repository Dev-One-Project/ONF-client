import styled from '@emotion/styled';
import { MouseEvent, SetStateAction, useState } from 'react';
import { styleSet } from '../../../commons/styles/styleSet';
import Switch01 from '../switch/switch01';

interface ISelectProps {
  left?: boolean;
  center?: boolean;
  filterInit?: boolean;
  setFilterInit?: SetStateAction<any>;
}

interface IStyle {
  active?: boolean;
  isLeft?: boolean;
  isCenter?: boolean;
}

const Select03 = (props: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickBackground = (e: MouseEvent) => {
    if (e.currentTarget.id !== 'selectZone') {
      setIsOpen(false);
    }
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
          <span>필터</span>
        </ToggleButton>
        {isOpen && (
          <DropDownMenu
            isLeft={props.left}
            isCenter={props.center}
            id="selectZone"
          >
            <Switch01
              text="활성 직원"
              init={props.filterInit}
              setInit={props.setFilterInit}
            />
            <span>비활성화된 직원의 휴가 발생 건을 숨길 수 있습니다.</span>
          </DropDownMenu>
        )}
      </Wrapper>
    </>
  );
};

export default Select03;

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
  min-width: 21rem;
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
  padding: 1rem 0;
  margin-top: 1rem;
  border: 1px solid #ddd;
  background-color: white;
  box-shadow: 0 4px 16px rgb(130 135 147 / 36%);
  z-index: 99;

  & > * {
    margin-left: 1rem;
  }
  span {
    font-size: ${styleSet.fontSizes.small};
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;
