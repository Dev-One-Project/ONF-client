import * as S from './account.styles';
import Btn01 from '../../../commons/button/btn01';
import Input01 from '../../../commons/input/input01';
import { IAccountPresenterProps } from './account.types';
import { styleSet } from '../../../../commons/styles/styleSet';

const AccountPresenter = (props: IAccountPresenterProps) => {
  return (
    <S.Container>
      <S.H1>계정 설정</S.H1>
      <S.Section>
        <S.Label>계정</S.Label>
        <S.Form>
          <div>
            <label>이름</label>
            <Input01 register={props.register('name')} />
          </div>
          <div>
            <label>이메일</label>
            <Input01 disabled={true} register={props.register('email')} />
          </div>
          <div>
            <label>전화번호</label>
            <Input01 register={props.register('phone')} />
          </div>
          <Btn01
            text={'변경사항 저장'}
            bdC={styleSet.colors.primary}
            color={styleSet.colors.primary}
          />
        </S.Form>
      </S.Section>
      <S.Section>
        <S.Label>이메일</S.Label>
        <S.Form>
          <div>
            <label>새 이메일</label>
            <Input01 register={props.register('newEmail')} />
          </div>
          {!props.isEmailValitation && (
            <Btn01
              type={'button'}
              text={props.isValitationBtn ? '인증메일 재발송' : '인증메일 발송'}
              bdC={styleSet.colors.primary}
              color={styleSet.colors.primary}
              onClick={props.handleSubmit(props.onClickSendCode)}
            />
          )}
          {props.isValitationBtn && (
            <>
              {!props.isEmailValitation && (
                <>
                  <div>
                    <label>검증코드 입력</label>
                    <Input01 register={props.register('validationCode')} />
                  </div>
                  <Btn01
                    type={'button'}
                    text={'검증코드 확인'}
                    bdC={styleSet.colors.primary}
                    color={styleSet.colors.primary}
                    disabled={!props.isValitationBtn}
                    onClick={props.handleSubmit(props.onClickCheckCode)}
                  />
                </>
              )}
            </>
          )}
          <div>
            <label>비밀번호 확인</label>
            <Input01 register={props.register('emailPassword')} />
          </div>
          {props.isEmailValitation && (
            <Btn01
              text={'이메일 번경'}
              bdC={styleSet.colors.primary}
              color={styleSet.colors.primary}
            />
          )}
        </S.Form>
      </S.Section>
      <S.Section className="last">
        <S.Label>비밀번호</S.Label>
        <S.Form>
          <div>
            <label>현재 비밀번호</label>
            <Input01 register={props.register('password')} />
          </div>
          <div>
            <label>새 비밀번호</label>
            <Input01 register={props.register('newPassword')} />
          </div>
          <div>
            <label>새 비밀번호 확인</label>
            <Input01 register={props.register('checkPassword')} />
          </div>
          <Btn01
            type={'button'}
            text={'비밀번호 변경'}
            bdC={styleSet.colors.primary}
            color={styleSet.colors.primary}
            onClick={props.handleSubmit(props.onClickUpdatePassword)}
          />
        </S.Form>
      </S.Section>
    </S.Container>
  );
};

export default AccountPresenter;
