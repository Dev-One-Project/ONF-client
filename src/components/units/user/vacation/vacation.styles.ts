import styled from "@emotion/styled";
import { styleSet } from "../../../../commons/styles/styleSet";

export const HeaderWrapper = styled.div`
  display: flex;
  font: ${styleSet.fonts.B};
  padding: 1.5rem 1rem 1rem;
  background-color: ${styleSet.colors.gray};
  margin: -1.5rem -2.5rem 1.5rem -2rem;
`;

export const HeaderIconWrapper = styled.span`
  padding: 0 1rem;
`;

export const HeaderTitleWrapper = styled.div`
  width: 50%;
  h3 {
    font-size: ${styleSet.fontSizes.strong};
    font-weight: 600;
  }
`;

export const HeaderBtnWrapper = styled.div`
  width: 50%;
  button {
    font-size: ${styleSet.fontSizes.small};
    font-weight: 600;
    height: 2rem;
    vertical-align: middle;
    padding: 0.5rem 1rem;
    :hover {
      opacity: 0.9;
    }
  }
`;

export const MainWrapper = styled.main`
  padding: 2rem 2.5rem 3.75rem 2rem;
`;

export const LabelSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const SelectBoxStyle = styled.select`
  width: 10%;
  min-width: 100px;
  height: 2rem;
  text-align: left;
  margin-bottom: 1rem;
  padding-left: 15px;
`;

export const LabelStyle = styled.label`
  font-weight: 600;
`;

export const VacationMainWrapper = styled.div`
  display: flex;
  padding-top: 1rem;
`;

export const RequireDateStyle = styled.div`
  font-weight: 600;
`;

export const CalendarWrapper = styled.div`
  padding: 0 15px;
  width: 42%;
`;

export const VacationListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  width: 33%;
`;

export const ArticleTitleStyle = styled.div`
  width: 100px;
  border-bottom: 1px solid ${styleSet.colors.primary};
  padding: 0.5rem 0.5rem 0.5rem 0;
  color: ${styleSet.colors.primary};
  font-weight: 600;
  font-size: ${styleSet.fontSizes.small};
`;

export const ArticleTitleWrapper = styled.div`
  width: 100%;
  min-width: 150px;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

export const VacationTotalWrapper = styled.article`
  margin: 0 -15px;
`;

export const ChangeVacationTitleStyle = styled.span`
  margin-right: 1.5rem;
  font-weight: 600;
  font-size: ${styleSet.fontSizes.small};
`;

export const GroupOfVacationStyle = styled.span`
  font-weight: 600;
  font-size: ${styleSet.fontSizes.small};
`;

export const VacationContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

export const ListContentsWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const WorkingListWrapper = styled.article`
  margin: 4rem -15px 0;
`;

export const DateOfWorkingStyle = styled.span`
  margin-right: 1.5rem;
  font-weight: 600;
  font-size: ${styleSet.fontSizes.small};
`;

export const TimeofWorkingStyle = styled.span`
  font-size: ${styleSet.fontSizes.small};
`;
