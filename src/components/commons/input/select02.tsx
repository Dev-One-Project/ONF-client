import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { ChangeEvent, MouseEvent, useState } from 'react';
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
  data?: string[];
  role?: string;
  left?: boolean;
  center?: boolean;
}

interface IStyle {
  active?: boolean;
  isLeft?: boolean;
  isCenter?: boolean;
}

const Select02 = (props: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [isSelect, setIsSelect] = useState('');

  const onClickToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const label = (role: string | undefined) => {
    if (role === 'organization') {
      return <Label>팀</Label>;
    }
    if (role === 'duty') {
      return <Label>직무</Label>;
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
    setIsSelect(event.currentTarget.id);
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
          <span>{isSelect || '선택 안됨'}</span>
        </ToggleButton>
        {isOpen && (
          <DropDownMenu
            isLeft={props.left}
            isCenter={props.center}
            id="selectZone"
          >
            <SearchBox>
              <SearchOutlined className="searchIcon" />
              <SearchInput
                value={keyword}
                onChange={onChangeInput}
                type="text"
                placeholder="검색"
              />
            </SearchBox>
            <OptionBox>
              <p>최고관리자</p>
              <Options className="options">
                <div style={{ margin: '0.1rem 0' }} />
                {props.data
                  ?.filter((el) => el.includes(keyword))
                  .map((el) => (
                    <p key={el} id={el} onClick={onClickLabel}>
                      {el}
                    </p>
                  ))}
              </Options>
            </OptionBox>
            <OptionBox>
              <p>직원</p>
              <Options className="options">
                <div style={{ margin: '0.1rem 0' }} />
                {props.data
                  ?.filter((el) => el.includes(keyword))
                  .map((el) => (
                    <p key={el} id={el} onClick={onClickLabel}>
                      {el}
                    </p>
                  ))}
              </Options>
            </OptionBox>
            <Btn01
              text="적용하기"
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

export default Select02;

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

const SearchBox = styled.div`
  position: relative;
  .searchIcon {
    position: absolute;
    padding: 0.6rem 0.5rem;
  }
`;

const SearchInput = styled.input`
  display: block;
  border: 1px solid #ddd;
  outline: none;
  padding: 0.5rem 1rem 0.5rem 2rem;
  :focus {
    border: 1px solid ${styleSet.colors.primary};
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
