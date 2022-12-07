import * as S from './vacation.styles';
import { IVacationSelectComponentProps } from './vacation.types';

const VacationSelectComponent = (props: IVacationSelectComponentProps) => {
  if (props.isTemplate) {
    return (
      <>
        <S.SelectOptionTemplateWrapper>
          <S.SelectOptionStyle>선택안됨</S.SelectOptionStyle>
        </S.SelectOptionTemplateWrapper>
      </>
    );
  } else if (props.isPosition) {
    return (
      <>
        <S.SelectOptionWrapper>
          <S.SelectOptionStyle>팀원</S.SelectOptionStyle>
        </S.SelectOptionWrapper>
      </>
    );
  } else if (props.isVacation) {
    return (
      <S.SelectVacation>
        <S.SelectOptionStyle>선택안됨</S.SelectOptionStyle>
        <S.VacationStyle aria-readonly={true}>연차휴가</S.VacationStyle>
        <S.VacationOption>반차 (4h,0.5일)</S.VacationOption>
        <S.VacationOption>연차 (8h,1일)</S.VacationOption>
        <S.VacationStyle>휴가 그룹 없음</S.VacationStyle>
        <S.VacationOption>병가 (8h,0일)</S.VacationOption>
      </S.SelectVacation>
    );
  }
  return <></>;
};

export default VacationSelectComponent;
