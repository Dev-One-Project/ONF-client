import styled from '@emotion/styled';
import { styleSet } from '../../../../commons/styles/styleSet';

export const HeaderWrapper = styled.div`
  display: flex;
  font-family: ${styleSet.fonts.B};
  padding: 1.5rem 1rem 1rem;
  background-color: ${styleSet.colors.gray};
`;

export const HeaderIconWrapper = styled.span`
  padding: 0 1rem;
`;

export const HeaderTitleWrapper = styled.div`
  width: 35%;
  h3 {
    font-size: ${styleSet.fontSizes.strong};
    font-family: ${styleSet.fonts.B};
  }
`;

export const HeaderBtnWrapper = styled.div`
  width: 60%;
  padding-left: 5%;
  button {
    font-size: ${styleSet.fontSizes.small};
    font-family: ${styleSet.fonts.B};
    height: 2rem;
    vertical-align: middle;
    :hover {
      opacity: 0.9;
    }
  }
`;

export const SelectOptionWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 240px;
  z-index: 1000;
  padding: 0.5rem 0;
  border: 1px solid ${styleSet.colors.gray};
  margin-top: 0.75rem;
  box-shadow: 0 0.25rem 1rem rgb(130 135 147);
`;

export const SelectOptionStyle = styled.div`
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.small};
  padding: 0.5rem 1rem;
  :hover {
    background-color: ${styleSet.colors.gray};
    opacity: 0.9;
  }
  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  border: 1px solid ${styleSet.colors.gray};
  padding: 1% 0 1% 2%;
  :hover {
    background-color: ${styleSet.colors.gray};
  }
  min-width: 100px;
  max-width: 150px;
`;

export const CreateReqLabelSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 35%;
  position: relative;
`;

export const MainWrapper = styled.main``;

export const LabelSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  width: 35%;
`;

export const SelectBoxStyle = styled.select`
  width: 10%;
  min-width: 100px;
  height: 2rem;
  text-align: left;
  margin-bottom: 1rem;
  padding-left: 1rem;
`;

export const LabelStyle = styled.label`
  font-family: ${styleSet.fonts.B};
`;

export const CreateReqMainWrapper = styled.div`
  display: flex;
  padding-top: 2rem;
`;

export const RequireDateStyle = styled.div`
  font-family: ${styleSet.fonts.B};
`;

export const CalendarWrapper = styled.div`
  padding: 0 1rem;
  width: 35%;
`;

export const CreateReqListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 60%;
  padding-left: 5%;
`;

export const ArticleTitleStyle = styled.div`
  width: 100px;
  border-bottom: 2px solid ${styleSet.colors.primary};
  padding: 0.5rem 0.5rem 0.5rem 0;
  color: ${styleSet.colors.primary};
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.small};
`;

export const ArticleTitleWrapper = styled.div`
  width: 100%;
  min-width: 150px;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${styleSet.colors.gray};
`;

export const CreateReqTotalWrapper = styled.article``;

export const ChangeCreateReqTitleStyle = styled.span`
  margin-right: 1.5rem;
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.small};
`;

export const GroupOfVacationStyle = styled.span`
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.small};
`;

export const CreateReqContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

export const ListContentsWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const WorkingListWrapper = styled.article`
  margin: 4rem 0 0;
`;

export const DateOfWorkingStyle = styled.span`
  margin-right: 1.5rem;
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.small};
`;

export const TimeofWorkingStyle = styled.span`
  font-size: ${styleSet.fontSizes.small};
`;

export const WorkingDateWrapper = styled.article`
  display: flex;
  margin-bottom: 1rem;
  font-size: ${styleSet.fontSizes.small};
`;

export const WorkingDate = styled.span`
  font-family: ${styleSet.fonts.B};
  color: ${styleSet.colors.primary};
  margin-right: 1rem;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TimePlan = styled.span`
  font-family: ${styleSet.fonts.B};
`;

export const TimeRestStyle = styled.span`
  color: ${styleSet.colors.darkGray};
`;

export const SelectOptionTemplateWrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 3rem;
  background-color: #fff;
  width: 240px;
  z-index: 1000;
  padding: 0.5rem 0;
  border: 1px solid ${styleSet.colors.gray};
  margin-top: 0.75rem;
  box-shadow: 0 0.25rem 1rem rgb(130 135 147);
`;

export const SelectVacation = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 4.5rem;
  background-color: #fff;
  width: 240px;
  z-index: 1000;
  padding: 0.5rem 0;
  border: 1px solid ${styleSet.colors.gray};
  margin-top: 0.75rem;
  box-shadow: 0 0.25rem 1rem rgb(130 135 147);
`;

export const VacationStyle = styled.div`
  font-family: ${styleSet.fonts.B};
  font-size: ${styleSet.fontSizes.small};
  padding: 0.5rem 1rem;
  background-color: ${styleSet.colors.lightGray};
  cursor: default;
`;

export const VacationOption = styled.div`
  font-size: ${styleSet.fontSizes.small};
  padding: 0.5rem 1rem;
  :hover {
    background-color: ${styleSet.colors.gray};
    opacity: 0.9;
  }
  cursor: pointer;
`;
