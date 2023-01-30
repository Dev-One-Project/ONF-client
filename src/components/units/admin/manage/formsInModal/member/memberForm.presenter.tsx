import Check01 from '../../../../../commons/input/check01';
import InputLabel from '../common/inputLabel';
import Footer from '../common/footer';
import Memo from '../common/memo';
import { DatePicker } from 'antd';
import { IMemberFormPresenterProps } from './memberForm.types';
import * as S from './memberForm.styles';
const MemberFormpresenter = (props: IMemberFormPresenterProps) => {
  const invitationArray = ['전송 안함', '즉시 전송', '예약 전송'];
  return (
    <form
      onSubmit={props.handleSubmit(
        props.editTarget ? props.onEdit : props.onSubmit,
      )}
    >
      <S.WrapperM>
        <S.Left>
          <div>
            <h3>직원정보</h3>
            <S.FormWrapper>
              <InputLabel
                type="text"
                name="name"
                register={props.register('name')}
              >
                이름
              </InputLabel>
              <InputLabel
                noSearch
                type="select"
                name="accessAuth"
                // api 개발 중...
                // setValue={props.setValue}
                // register={register('accessAuth')}
                data={[
                  { id: '최고관리자', name: '최고관리자' },
                  { id: '직원', name: '직원' },
                ]}
                // defaultChecked={[accessAuth]}
                singleMode
                textFillMode
              >
                액세스 권한
              </InputLabel>
              <InputLabel
                type="select"
                name="roleCategoryId"
                setValue={props.setValue}
                register={props.register('roleCategoryId')}
                data={props.roleCategories}
                defaultChecked={props.roleCategoryDefaultValue}
                singleMode
                textFillMode
              >
                직무들
              </InputLabel>
              <InputLabel
                type="select"
                name="organizationId"
                setValue={props.setValue}
                register={props.register('organizationId')}
                data={props.organizations}
                defaultChecked={props.organizationDefaultValue}
                singleMode
                textFillMode
              >
                지점들
              </InputLabel>
              <S.FormContent>
                <S.InnerContent>
                  <Check01
                    onChange={() => props.setIsActiveStartDate((prev) => !prev)}
                    text="입사일"
                  />
                  {props.isActiveStartDate && (
                    <DatePicker
                      defaultValue={props.defaultJoinDate}
                      onChange={props.onChangeStartDate}
                      style={{ flex: '2' }}
                    />
                  )}
                </S.InnerContent>
                <S.InnerContent>
                  <Check01
                    onChange={() => props.setIsActiveEndDate((prev) => !prev)}
                    text="퇴사일"
                  />
                  {props.isActiveEndDate && (
                    <DatePicker
                      defaultValue={props.defaultExitDate}
                      onChange={props.onChangeEndDate}
                      style={{ flex: '2' }}
                    />
                  )}
                </S.InnerContent>
              </S.FormContent>
            </S.FormWrapper>
          </div>
          {props.editTarget?.isJoin || (
            <div>
              <h3>직원합류 초대</h3>
              <S.FormWrapper>
                <S.FormContent>
                  {invitationArray.map((content, index) => (
                    <Check01
                      key={index}
                      text={content}
                      onChange={props.onChangeInvitation(index)}
                      checked={props.invitationRadio[index]}
                    />
                  ))}
                </S.FormContent>
                {!props.invitationRadio[0] && (
                  <InputLabel
                    type="text"
                    name="email"
                    setValue={props.setValue}
                    register={props.register('email')}
                  >
                    이메일
                  </InputLabel>
                )}
                {props.invitationRadio[1] && (
                  <S.GuidLine style={{ lineHeight: '1.5rem' }}>
                    합류코드가 각 직원에 등록된 이메일로 즉시 전송됩니다.
                    <br /> 이메일을 입력하지 않은 경우, 합류코드를 전송할 수
                    없습니다.
                  </S.GuidLine>
                )}
                {props.invitationRadio[2] && (
                  <>
                    <InputLabel
                      type="custom"
                      name="trasmissionDate"
                      customInput={<DatePicker />}
                    >
                      전송 시각
                    </InputLabel>
                    <S.GuidLine style={{ lineHeight: '1.5rem' }}>
                      합류코드가 입력된 이메일로 예약 전송됩니다.
                      <br /> 이메일을 입력하지 않은 경우, 합류코드를 전송할 수
                      없습니다.
                    </S.GuidLine>
                  </>
                )}
                <S.CustomDivider />
                <Memo register={props.register('memo')} />
              </S.FormWrapper>
            </div>
          )}
        </S.Left>
        <S.Right>
          <div>
            <h3>근로정보</h3>
            <S.FormWrapper>
              <Check01
                onChange={() => props.setIsActiveWagesInput((prev) => !prev)}
                text="근로 정보 입력"
              />
              {props.isActiveWagesInput && (
                <>
                  <InputLabel
                    type="select"
                    name="workInfoId"
                    setValue={props.setValue}
                    register={props.register('workInfoId')}
                    data={props.workInfos}
                    singleMode
                    textFillMode
                  >
                    근로정보
                  </InputLabel>
                  <InputLabel
                    type="custom"
                    name="appliedFrom"
                    customInput={
                      <DatePicker onChange={props.onChangeAppliedFrom} />
                    }
                  >
                    적용 시점
                  </InputLabel>
                </>
              )}
            </S.FormWrapper>
          </div>
        </S.Right>
      </S.WrapperM>
      <Footer
        isValid={props.isValid}
        onSoftDelete={props.onSoftDelete}
        isEdit={props.editTarget}
        onCancel={props.onCancel}
      />
    </form>
  );
};

export default MemberFormpresenter;
