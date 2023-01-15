import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const Container = styled.div`
  margin: 0 auto;
  width: 760px;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media ${styleSet.breakPoints.tablet} {
    width: 640px;
  }

  @media ${styleSet.breakPoints.mobile} {
    width: 480px;
  }

  .last {
    border-bottom: none;
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSizes.subTitle};
  font-family: ${styleSet.fonts.B};
`;

export const Label = styled.label`
  min-width: 6.5rem;
  font-size: ${styleSet.fontSizes.strong};
  font-family: ${styleSet.fonts.B};
`;

export const Section = styled.section`
  padding-bottom: 3rem;
  width: 100%;
  border-bottom: 1px solid ${styleSet.colors.gray};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    label {
      font-family: ${styleSet.fonts.B};
    }
  }
`;
