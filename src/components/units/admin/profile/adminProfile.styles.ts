import { styleSet } from './../../../../commons/styles/styleSet';
import styled from '@emotion/styled';

export const Wrapper = styled.section``;

export const Form = styled.form`
  width: 100%;
`;

export const FormHeader = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-family: ${styleSet.fonts.EB};
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2rem;
`;

export const FormContents = styled.div`
  display: flex;
  flex-direction: row;

  input {
    outline: none;
    transition: border 0.2s ease;
    :focus {
      border: 1px solid ${styleSet.colors.primary};
    }
  }

  @media ${styleSet.breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  flex: 0 0 16.6666666667%;
  font-family: ${styleSet.fonts.B};
`;

export const MobileNotificationBox = styled.div`
  padding-top: 0.25rem;
`;
export const NotificationContents = styled.div`
  display: flex;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  align-items: center;
  :last-of-type {
    margin: 0;
  }

  @media ${styleSet.breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    word-break: keep-all;
    text-align: center;
  }
`;

export const NotificationSubscription = styled.span`
  font-family: ${styleSet.fonts.M};
  color: ${styleSet.colors.darkGray};
  font-size: ${styleSet.fontSizes.small};
  padding-left: 1rem;
`;

export const TooltipCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-family: ${styleSet.fontSizes.small};
  }
`;
