import styled from '@emotion/styled';
import { styleSet } from '../../../../../commons/styles/styleSet';

export const Container = styled.div`
  @media ${styleSet.breakPoints.tablet} {
    width: 95%;
  }
  @media (width: 1024px) {
    width: 100%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 90%;
  }
`;

export const TopWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  margin-bottom: 2rem;
`;

export const TopTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2rem;
  li {
    margin-left: 1rem;
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.subTitle};
  font-family: ${styleSet.fonts.B};
  line-height: 100%;
`;

export const OptWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

export const OptBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 119px;
  height: 32px;
  border: 1px solid ${styleSet.colors.gray};
  border-radius: 2px;
  @media ${styleSet.breakPoints.tablet} {
    width: 100%;
  }
  @media ${styleSet.breakPoints.mobile} {
    width: 100%;
  }
`;

export const Span = styled.span`
  width: 40px;
  text-align: end;
  font-size: ${styleSet.fontSizes.small};
`;

export const Block = styled.div`
  background: ${styleSet.colors.primary};
  opacity: 0.3;
  width: 10px;
  height: 10px;
`;

export const OptSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  input {
    width: 100px;
    @media ${styleSet.breakPoints.mobile} {
      width: 100%;
    }
  }
`;

export const UlWrapper = styled.section`
  overflow: auto;
`;

export const FuncButton = styled.button`
  border: solid 1px ${styleSet.colors.primary};
  padding: 0 0.75rem 0 0.75rem;
  margin-left: 0.5rem;
  color: ${styleSet.colors.darkGray};
`;

export const ArrowButton = styled.button`
  border: solid 1px ${styleSet.colors.primary};
  padding: 0.5rem;
  svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const OptSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  button {
    height: 2.25rem;
  }
`;

export const Label = styled.label`
  font-size: ${styleSet.fontSizes.normal};
  font-family: ${styleSet.fonts.B};
  margin-left: 0.5rem;
`;
