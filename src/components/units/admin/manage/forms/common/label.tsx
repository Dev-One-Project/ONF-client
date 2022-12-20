import styled from '@emotion/styled';

interface ILableProps {
  children?: JSX.Element | string;
  for?: string;
}

const Label = (props: ILableProps) => {
  return <StyledLabel htmlFor={props.for}>{props.children}</StyledLabel>;
};

export default Label;

const StyledLabel = styled.label`
  min-width: 5rem;
  white-space: nowrap;
`;
