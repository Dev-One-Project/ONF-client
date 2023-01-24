import BasicInfo from './tabs/basicInfo';
import ContractedLaborRules from './tabs/fixedLaborRules';
import MaximumLaborRules from './tabs/maximumLaborRules';
import * as S from './workInfo.styles';
import Footer from '../common/footer';
import { IWorkInfoPresenterProps } from './workInfo.types';

const TAB_NAME = ['기본 정보', '소정근로규칙', '최대근로규칙'];

const WorkInfoFormPresenter = (props: IWorkInfoPresenterProps) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <S.Wrapper>
        <S.TabUl>
          {TAB_NAME.map((tab, i) => (
            <S.TabLi key={i}>
              <S.Tab isActive={props.isActive[i]} onClick={props.onClickTab(i)}>
                {tab}
              </S.Tab>
            </S.TabLi>
          ))}
        </S.TabUl>
        <S.InputWrapper isActive={props.isActive.findIndex((el) => el)}>
          <BasicInfo register={props.register} setValue={props.setValue} />
          <ContractedLaborRules
            register={props.register}
            setValue={props.setValue}
          />
          <MaximumLaborRules
            register={props.register}
            setValue={props.setValue}
          />
        </S.InputWrapper>
        <Footer isValid={props.isValid} onCancel={props.onCancel} />
      </S.Wrapper>
    </form>
  );
};

export default WorkInfoFormPresenter;
