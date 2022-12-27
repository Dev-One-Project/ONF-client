import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Divider } from 'antd';
import {
  ChangeEvent,
  MouseEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';
import Btn01 from '../button/btn01';
import Check01 from './check01';

interface ISelectProps {
  register?: UseFormRegisterReturn;
  setValue?: UseFormSetValue<FieldValues>;
  setState?: SetStateAction<any>;
  name?: string;
  role?: string;
  left?: boolean;
  center?: boolean;
  noSearch?: boolean;
  data?: InputData[];
  defaultChecked?: InputData[];
  textFillMode?: boolean;
}

interface InputData {
  id: string;
  name: string;
}

interface IStyle {
  active?: boolean;
  isLeft?: boolean;
  isCenter?: boolean;
}

const Select01 = (props: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [saveChecked, setSaveChecked] = useState<InputData[]>(
    props.defaultChecked && props.defaultChecked.length > 0
      ? props.defaultChecked
      : [],
  );
  const [checkedList, setCheckedList] = useState<InputData[]>(
    props.defaultChecked && props.defaultChecked.length > 0
      ? props.defaultChecked
      : [],
  );
  const [keyword, setKeyword] = useState('');

  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray: InputData[] = [];
        props.data?.forEach((list) => checkedListArray.push(list));
        setCheckedList(checkedListArray);
      } else setCheckedList([]);
    },
    [props.data],
  );

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) setCheckedList([...checkedList, list]);
      else setCheckedList(checkedList.filter((el) => el !== list));
    },
    [checkedList],
  );

  const onClickToggleModal = () => {
    setCheckedList(saveChecked);
    setIsOpen((prev) => !prev);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const label = (role: string | undefined) => {
    if (role === 'organization') {
      return <Label>조직</Label>;
    }
    if (role === 'duty') {
      return <Label>직무</Label>;
    }
  };

  const onClickBackground = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id !== 'selectZone') {
      setIsOpen(false);
    }
    setCheckedList(saveChecked);
  };

  const onClickSaveChecked = () => {
    if (props.name === undefined) {
      throw Error('props.name의 값이 undefined 입니다.');
    }
    setSaveChecked(checkedList);
    props.setValue?.(props.name, checkedList);
    setIsOpen(false);
    props.setState?.(checkedList);
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
          {checkedList.length ? (
            <span>
              {props.textFillMode
                ? checkedList.map((data) => data.name).join(',')
                : `${checkedList.length} 선택됨`}
            </span>
          ) : props.data?.length ? (
            '선택 안됨'
          ) : (
            '선택 가능한 옵션 없음'
          )}
        </ToggleButton>
        {isOpen && (
          <DropDownMenu
            isLeft={props.left}
            isCenter={props.center}
            id="selectZone"
          >
            <SearchBox>
              {!props.noSearch && (
                <>
                  <SearchOutlined className="searchIcon" />
                  <SearchInput
                    value={keyword}
                    onChange={onChangeInput}
                    type="text"
                    placeholder="검색"
                  />
                </>
              )}
            </SearchBox>
            <OptionBox>
              <Check01
                text="모두 선택"
                checked={
                  checkedList.length === 0
                    ? false
                    : checkedList.length === props.data?.length
                }
                onChange={(event) => onCheckedAll(event.target.checked)}
              />
              <Options className="options">
                <Divider style={{ margin: '0.5rem 0' }} />
                {props.data && props.data.length > 0
                  ? props.data
                      .filter((el) => el.name.includes(keyword))
                      .map((el) => (
                        <Check01
                          key={el.id}
                          text={el.name}
                          checked={checkedList.includes(el)}
                          onChange={(event) =>
                            onCheckedElement(event.target.checked, el)
                          }
                        />
                      ))
                  : null}
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

export default Select01;

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
  flex-direction: column;
  gap: 1rem;
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
  margin-left: 1rem;
`;

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
