import { InfoCircleFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import Check01 from '../../../commons/input/check01';
import Input01 from '../../../commons/input/input01';
import Select01 from '../../../commons/input/select01';
import * as S from './adminProfile.styles';
import { IAdminProfileProps } from './adminProfile.types';

const AdminProfileUI = (props: IAdminProfileProps) => {
  return (
    <S.Wrapper>
      <S.Form onSubmit={props.handleSubmit(props.onSubmit)}>
        <S.FormHeader>
          <S.Title>
            내 프로필
            <Tooltip
              overlayInnerStyle={{ fontSize: styleSet.fontSizes.small }}
              placement="top"
              title="도움말"
            >
              <QuestionCircleOutlined style={{ cursor: 'pointer' }} />
            </Tooltip>
          </S.Title>
          <Btn01 text="저장" bgC={styleSet.colors.primary} color={'white'} />
        </S.FormHeader>
        <S.FormBody>
          <S.FormContents>
            <S.Label>이름</S.Label>
            <Input01 type="text" register={props.register('name')} />
          </S.FormContents>
          <S.FormContents>
            <S.Label>이메일</S.Label>
            <S.Label>4ggie97@gmail.com</S.Label>
          </S.FormContents>
          <S.FormContents>
            <S.Label>전화번호</S.Label>
            <S.Label>01062986609</S.Label>
          </S.FormContents>
          <S.FormContents>
            <S.Label>직무들</S.Label>
            <Select01
              register={props.register('duty')}
              setValue={props.setValue}
              name={'duty'}
            />
          </S.FormContents>
          <S.FormContents>
            <S.Label>지점들</S.Label>
            <Select01
              register={props.register('organization')}
              setValue={props.setValue}
              name={'oranization'}
              data={[
                { id: 'busker', name: 'BUSKER' },
                { id: 'zero9', name: 'ZERO9' },
                { id: 'wetrekking', name: 'WETREKKING' },
              ]}
            />
          </S.FormContents>
          <S.FormContents>
            <S.Label>
              액세스 권한
              <Tooltip
                placement="right"
                autoAdjustOverflow
                overlayInnerStyle={{ opacity: '0.9', width: '400px' }}
                title={
                  <S.TooltipCard>
                    <p>
                      직원: 스케줄과 본인 출퇴근기록을 열람할 수 있고 출근과
                      퇴근 체크를 할 수 있습니다. 근무중 근무노트도 기록할 수
                      있습니다.
                    </p>
                    <p>
                      지점관리자: 지점관리자는 모든 직원의 권한을 가지고 있고
                      추가로 배정 된 지점들의 스케줄과 출퇴근기록을 열람, 생성,
                      수정할 수 있는 권한을 가집니다. 직원들을 초대할 수 있으며
                      관리자용 PC 버전도 접속이 가능 합니다.
                    </p>
                    <p>
                      총괄관리자: 총괄관리자는 모든 직원의 권한을 가지고 있고
                      추가로 모든 지점들의 스케줄과 출퇴근기록을 열람, 생성,
                      수정할 수 있는 권한을 가집니다. 지점 및 직무를 생성할 수
                      있고 직원의 액세스 권한을 수정할 수 있습니다. 또한 WiFi를
                      재설정할 수 있는 권한을 가집니다.
                    </p>
                    <p>
                      최고관리자: 최고관리자는 모든 총괄관리자의 권한을 가지고
                      있습니다. 추가로 회사 전체 설정을 변경할 수 있는 권한이
                      있습니다 (예: 직원이 자신의 출퇴근기록을 볼 수 있는지
                      여부).
                    </p>
                  </S.TooltipCard>
                }
              >
                <InfoCircleFilled
                  style={{ marginLeft: '0.5rem', opacity: '0.3' }}
                />
              </Tooltip>
            </S.Label>
            <S.Label>최고 관리자</S.Label>
          </S.FormContents>
          <S.FormContents>
            <S.Label>모바일 알림 설정</S.Label>
            <S.MobileNotificationBox>
              <S.NotificationContents>
                <Check01
                  text="출근 알림"
                  register={props.register('goToWorkAlert')}
                />
                <S.NotificationSubscription>
                  (모바일 앱으로 배정된 지점 내 직원들의 출근 알림을 받습니다)
                </S.NotificationSubscription>
              </S.NotificationContents>
              <S.NotificationContents>
                <Check01
                  text="퇴근 알림"
                  register={props.register('goToHomeAlert')}
                />
                <S.NotificationSubscription>
                  (모바일 앱으로 배정된 지점 내 직원들의 퇴근 알림을 받습니다)
                </S.NotificationSubscription>
              </S.NotificationContents>
              <S.NotificationContents>
                <Check01
                  text="지각 알림"
                  register={props.register('lateAlert')}
                />
                <S.NotificationSubscription>
                  (모바일 앱으로 배정된 지점 내 직원들의 지각 알림을 받습니다 -
                  근무일정 시작 후 10분)
                </S.NotificationSubscription>
              </S.NotificationContents>
              <S.NotificationContents>
                <Check01
                  text="초과 근무 알림"
                  register={props.register('overWorkAlert')}
                />
                <S.NotificationSubscription>
                  (모바일 앱으로 배정된 지점 내 직원들의 초과 근무 알림을
                  받습니다 - 근무일정 종료 후 10분)
                </S.NotificationSubscription>
              </S.NotificationContents>
              <S.NotificationContents>
                <Check01
                  text="요청 알림"
                  register={props.register('requestAlert')}
                />
                <S.NotificationSubscription>
                  (모바일 앱으로 모든 요청 알림을 받습니다)
                </S.NotificationSubscription>
              </S.NotificationContents>
            </S.MobileNotificationBox>
          </S.FormContents>
          <S.FormContents>
            <S.Label>이메일 알림 설정</S.Label>
            <S.NotificationContents>
              <Check01
                text="요청 알림"
                register={props.register('emailAlert')}
              />
              <S.NotificationSubscription>
                (이메일로 모든 요청 알림을 받습니다)
              </S.NotificationSubscription>
            </S.NotificationContents>
          </S.FormContents>
        </S.FormBody>
      </S.Form>
    </S.Wrapper>
  );
};

export default AdminProfileUI;
