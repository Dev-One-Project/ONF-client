import { SearchOutlined } from '@ant-design/icons';
import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { ChangeEvent, MouseEvent, useMemo, useState } from 'react';
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { styleSet } from '../../../commons/styles/styleSet';
import { IQuery } from '../../../commons/types/generated/types';

interface ISelectProps {
  register?: UseFormRegisterReturn;
  data?: IInputData[];
  left?: boolean;
  center?: boolean;
  category?: string[];
  customWidth?: string;
  setValue?: UseFormSetValue<FieldValues>;
  name?: string;
  defaultValue?: string;
}

interface IInputData {
  id: string | undefined;
  name: string | undefined;
}

interface IStyle {
  active?: boolean;
  isLeft?: boolean;
  isCenter?: boolean;
  customWidth?: string;
}

const FETCH_ACCOUNT = gql`
  query {
    fetchAccount {
      id
      member {
        id
        name
      }
    }
  }
`;

const Select02 = (props: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [isSelect, setIsSelect] = useState('');

  const { data: fetchAccount } =
    useQuery<Pick<IQuery, 'fetchAccount'>>(FETCH_ACCOUNT);

  useMemo(() => {
    if (props.defaultValue && props.name) {
      const foundData = props.data?.filter(
        (data) => data.id === props.defaultValue,
      )[0];
      props.setValue?.(props.name, foundData?.id);
      setIsSelect(String(foundData?.name));
    }
  }, [props]);

  const onClickToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const onClickBackground = (e: MouseEvent) => {
    if (e.currentTarget.id !== 'selectZone') {
      setIsOpen(false);
    }
  };

  const onClickLabel = (event: MouseEvent<HTMLParagraphElement>) => {
    setIsSelect(event.currentTarget.className);
    if (props.name === undefined) {
      return;
    } else {
      props.setValue?.(props.name, event.currentTarget.id);
    }
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
          <span>
            {props.data ? isSelect || '선택 안됨' : '선택 가능한 옵션 없음'}
          </span>
        </ToggleButton>
        {isOpen && (
          <DropDownMenu
            isLeft={props.left}
            isCenter={props.center}
            id="selectZone"
            customWidth={props.customWidth}
          >
            <SearchBox>
              <SearchOutlined className="searchIcon" />
              <SearchInput
                value={keyword}
                onChange={onChangeInput}
                type="text"
                placeholder="검색"
                customWidth={props.customWidth}
              />
            </SearchBox>
            <OptionBox>
              {props.data && props.category && <p>{props.category?.[0]}</p>}
              <Options className="options">
                <div style={{ margin: '0.1rem 0' }} />
                {props.data
                  ?.filter(
                    (el) =>
                      el.name?.includes(keyword) &&
                      el.id === fetchAccount?.fetchAccount.member?.id,
                  )
                  .map((el) => (
                    <p
                      key={el.id}
                      id={el.id}
                      className={el.name}
                      onClick={onClickLabel}
                    >
                      {el.name}
                    </p>
                  ))}
              </Options>
            </OptionBox>
            {props.data && props.category?.[1] && (
              <OptionBox>
                {props.category && <p>{props.category?.[1]}</p>}
                <Options className="options">
                  <div style={{ margin: '0.1rem 0' }} />
                  {props.data
                    ?.filter(
                      (el) =>
                        el.name?.includes(keyword) &&
                        el.id !== fetchAccount?.fetchAccount.member?.id,
                    )
                    .map((el) => (
                      <p
                        key={el.id}
                        id={el.id}
                        className={el.name}
                        onClick={onClickLabel}
                      >
                        {el.name}
                      </p>
                    ))}
                </Options>
              </OptionBox>
            )}
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
    props.active ? styleSet.colors.subColor05 : ''};

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
      props.active ? styleSet.colors.subColor05 : '#eee'};
  }
`;

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column !important;
  gap: 0.3rem;
  max-width: 500px;
  min-width: ${(props: IStyle) => (props.customWidth ? '17.5rem' : '15rem')};
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
    max-width: ${(props: IStyle) =>
      props.customWidth ? props.customWidth : '220px'};
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
  min-width: ${(props: IStyle) => (props.customWidth ? props.customWidth : '')};
  :focus {
    border: 1px solid ${styleSet.colors.primary};
  }
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;
  & > p {
    background-color: #eee;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
  }
`;

const Options = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    padding: 0.5rem 0;
    :hover {
      width: 100%;
      background-color: #eee;
      cursor: pointer;
    }
  }
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
