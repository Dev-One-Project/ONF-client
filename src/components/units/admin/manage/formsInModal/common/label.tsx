import styled from '@emotion/styled';

interface ILableProps {
  children?: JSX.Element | string;
  for?: string;
  width?: string;
}

interface IStyle {
  width?: string;
}

const Label = (props: ILableProps) => {
  return (
    <StyledLabel width={props.width} htmlFor={props.for}>
      {props.children}
    </StyledLabel>
  );
};

export default Label;

const StyledLabel = styled.label`
  min-width: ${(props: IStyle) => props.width || '5rem'};

  white-space: nowrap;
  flex: 0;
`;
