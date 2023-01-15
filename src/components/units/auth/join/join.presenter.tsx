import Image from 'next/image';
import * as S from './join.styles';
import { IJoinProps } from './join.types';
import EmployeeModal from './join.employeeModal';
import Btn01 from '../../../commons/button/btn01';
import AdminModal from './join.adminModal';
import Check01 from '../../../commons/input/check01';
import Input01 from '../../../commons/input/input01';
import { styleSet } from '../../../../commons/styles/styleSet';
import { ImportOutlined, PlusOutlined } from '@ant-design/icons';
import { useMoveToPage } from '../../../commons/hooks/useMoveToPage';

const JoinPresenter = (props: IJoinProps) => {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.Header>
        <Image src="/icon_logo.png" alt="logo" width={80} height={30} />
        <p>
          이미 ON&OFF 계정이 있나요?{' '}
          <span onClick={onClickMoveToPage('/auth/login')}>로그인</span>
        </p>
      </S.Header>
      <S.Wrapper>
        <S.Section>
          <S.H2>
            대규모 인력 도입을 위한<span></span> 엔터프라이즈 지원
          </S.H2>
          <p>
            100인 이상 기업은 아래 문의를 통해<span></span>보다 원활하게 도입할
            수 있습니다.
          </p>
          <Btn01
            text={'도입문의'}
            bgC={styleSet.colors.primary}
            color={styleSet.colors.white}
          />
        </S.Section>

        <S.Main>
          <S.H1>
            환영합니다!
            <p>통합 인력관리 솔루션 웹체크, 지금 바로 시작해보세요.</p>
          </S.H1>
          <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
            <S.Data>
              <S.Label>이메일</S.Label>
              <Input01
                type={'text'}
                register={props.register('email')}
                error={props.formState.errors.email?.message}
              />
              <span>* 이메일 형식에 맞게 입력해주세요.</span>
            </S.Data>

            <S.Data>
              <S.Label>비밀번호</S.Label>
              <Input01
                type={'password'}
                register={props.register('password')}
                error={props.formState.errors.password?.message}
              />
              <span>* 8자 이상이면서 영문, 숫자를 모두 포함하세요.</span>
            </S.Data>

            <S.Data>
              <S.Label>비밀번호 재확인</S.Label>
              <Input01
                type={'password'}
                register={props.register('passwordConfirm')}
                error={props.formState.errors.passwordConfirm?.message}
              />
              <span>* 같은 비밀번호를 입력 해주세요.</span>
            </S.Data>

            <S.Data>
              <S.Label>이름</S.Label>
              <Input01
                type={'text'}
                register={props.register('name')}
                error={props.formState.errors.name?.message}
              />
              <span>* 이름을 입력해주세요.</span>
            </S.Data>

            <S.Data>
              <S.Label>핸드폰 번호</S.Label>
              <Input01
                type={'number'}
                register={props.register('phone')}
                error={props.formState.errors.phone?.message}
              />
              <span>* 핸드폰 11자리를 입력해주세요.</span>
            </S.Data>

            <S.ChooseCompany>
              <li onClick={props.onClickAdminModal}>
                <span>
                  <PlusOutlined /> 회사 만들기
                </span>
                <p>(최고관리자용)</p>
              </li>
              <li onClick={props.onClickEmployeeModal}>
                <span>
                  <ImportOutlined /> 직장 합류하기
                </span>
                <p>(직원용)</p>
              </li>
            </S.ChooseCompany>

            <S.Article>
              <Check01
                onChange={(event) =>
                  props.onChangeCheckedAll(event.target.checked)
                }
                checked={
                  props.checkedList.length === 0
                    ? false
                    : props.checkedList.length === props.checkboxContents.length
                }
                text={'모두 동의합니다.'}
              />
              {props.checkboxContents.map((content, index) => (
                <Check01
                  key={index}
                  checked={props.checkedList.includes(content)}
                  onChange={(event) =>
                    props.onChangeChecked(event.target.checked, content)
                  }
                  text={content}
                />
              ))}
            </S.Article>

            <EmployeeModal
              setIsOpenEmployee={props.setIsOpenEmployee}
              isOpenEmployee={props.isOpenEmployee}
              aniMode={props.aniMode}
              register={props.register}
              formState={props.formState}
              onClickCloseModal={props.onClickCloseModal}
              onClickCloseEmployeeModal={props.onClickCloseEmployeeModal}
            />

            <AdminModal
              setIsOpenAdmin={props.setIsOpenAdmin}
              isOpenAdmin={props.isOpenAdmin}
              aniMode={props.aniMode}
              onClickCloseModal={props.onClickCloseModal}
              register={props.register}
              formState={props.formState}
              onClickCloseAdminModal={props.onClickCloseAdminModal}
            />

            <Btn01
              disabled={props.checkedList.length !== 3}
              text={'가입하기'}
              bgC={styleSet.colors.primary}
              color={styleSet.colors.white}
              type="submit"
            />
          </form>
          <S.P>
            <strong>or</strong>
          </S.P>

          <S.Ul>
            <li>
              <Image
                src="/login/icon_google.png"
                alt="구글 아이콘"
                width={16}
                height={16}
              />
              구글 계정으로 가입하기
            </li>
            <li>
              <Image
                src="/login/icon_kakao.png"
                alt="카카오 아이콘 "
                width={16}
                height={16}
              />
              카카오 계정으로 가입하기
            </li>
          </S.Ul>
        </S.Main>
      </S.Wrapper>
    </>
  );
};

export default JoinPresenter;
