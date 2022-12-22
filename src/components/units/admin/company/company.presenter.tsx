import * as S from './company.styles';
import Btn01 from '../../../commons/button/btn01';
import Input01 from '../../../commons/input/input01';
import Check01 from '../../../commons/input/check01';
import { ICompanyPresenterProps } from './company.types';
import { styleSet } from '../../../../commons/styles/styleSet';

const CompanyPresenter = (props: ICompanyPresenterProps) => {
  return (
    <S.Container>
      <form onSubmit={props.handleSubmit(props.onClickUpdate)}>
        <S.TopWrapper>
          <S.H1>회사 설정</S.H1>
          <Btn01
            text={'저장'}
            color={styleSet.colors.white}
            bgC={styleSet.colors.primary}
          />
        </S.TopWrapper>

        <S.ColWrapper>
          <S.H2>일반</S.H2>
          <S.RowWrapper>
            <S.Label>회사명</S.Label>
            <Input01 type={'text'} register={props.register('name')} />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>회사로고</S.Label>
            <Input01 type={'file'} register={props.register('logoUrl')} />
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>회사 지정 휴일</S.Label>
            <S.HolydayTable>
              <S.TableTitleWrapper>
                <S.TableTitle>휴일명</S.TableTitle>
                <S.TableTitle>날짜</S.TableTitle>
              </S.TableTitleWrapper>
              <S.TableUl>
                <li>
                  <Input01
                    type={'text'}
                    register={props.register('dateName')}
                  />
                  <Input01
                    type={'text'}
                    register={props.register('locdate')}
                    placeholder={'YYYY-MM-DD'}
                  />
                </li>
              </S.TableUl>
            </S.HolydayTable>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>회사 방침</S.Label>
            <S.Textarea
              {...props.register('rules')}
              placeholder={
                '직원들에게 공유할 취업규칙 혹은 출결 관련 사규를 작성하세요.'
              }
            />
          </S.RowWrapper>

          <S.H2>출퇴근 기록</S.H2>
          <S.RowWrapper>
            <S.Label>출근 기능</S.Label>
            <S.RightInner>
              <S.SubLabel>근무일정 시작 전 출근 허용 시간</S.SubLabel>
              <S.Select {...props.register('allowedCheckInBefore')}>
                <option value={0}>0분 전</option>
                <option value={5}>5분 전</option>
                <option value={10}>10분 전</option>
                <option value={15}>15분 전</option>
                <option value={20}>20분 전</option>
                <option value={30}>30분 전</option>
                <option value={40}>40분 전</option>
                <option value={50}>50분 전</option>
                <option value={60}>60분 전</option>
                <option value={90}>90분 전</option>
                <option value={120}>120분 전</option>
                <option value={180}>180분 전</option>
                <option value={240}>240분 전</option>
              </S.Select>
              <S.Explanation>
                (스케줄된 근무일정 시작 전, 근무일정으로 출근할 수 있는 최대
                허용 시간을 선택하세요. 출근 허용 시간이 벗어나면, &apos;무일정
                근무 설정&lsquo;에 따라 출근이 불가능하거나 무일정 출근을 할 수
                있습니다.)
              </S.Explanation>
            </S.RightInner>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>퇴근 기능</S.Label>
            <S.RightInner>
              <S.SubLabel>퇴근 허용 시간</S.SubLabel>
              <S.Select {...props.register('allowedCheckInAfter')}>
                <option value={8}>출근 후 최대 8시간</option>
                <option value={9}>출근 후 최대 9시간</option>
                <option value={10}>출근 후 최대 10시간</option>
                <option value={11}>출근 후 최대 11시간</option>
                <option value={12}>출근 후 최대 12시간</option>
                <option value={13}>출근 후 최대 13시간</option>
                <option value={14}>출근 후 최대 14시간</option>
                <option value={15}>출근 후 최대 15시간</option>
                <option value={16}>출근 후 최대 16시간</option>
                <option value={17}>출근 후 최대 17시간</option>
                <option value={18}>출근 후 최대 18시간</option>
                <option value={19}>출근 후 최대 19시간</option>
                <option value={20}>출근 후 최대 20시간</option>
                <option value={21}>출근 후 최대 21시간</option>
                <option value={22}>출근 후 최대 22시간</option>
                <option value={23}>출근 후 최대 23시간</option>
                <option value={24}>출근 후 최대 24시간</option>
                <option value={25}>출근 후 최대 25시간</option>
                <option value={26}>출근 후 최대 26시간</option>
              </S.Select>
              <S.Explanation>
                (출근 후 허용 시간이 지나면 퇴근이 누락된 걸로 간주, 출근 버튼을
                다시 보여줍니다. 퇴근처리되지 않은 출퇴근기록들은 느낌표로
                표시됩니다.)
              </S.Explanation>
            </S.RightInner>
          </S.RowWrapper>

          <S.H2>요청 기능</S.H2>
          <S.RowWrapper>
            <S.Label>출퇴근 기록 생성</S.Label>
            <S.RightInner>
              <Check01
                register={props.register('isWorkLogEnabled')}
                text={'출퇴근기록 생성 요청 기능을 사용합니다.'}
                // checked={}
                // onChange={}
              />
              <S.Explanation>
                (출근을 누락한 경우, 출퇴근기록 생성 요청을 보낼 수 있습니다.)
              </S.Explanation>
            </S.RightInner>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>휴가 생성 요청</S.Label>
            <S.RightInner>
              <Check01
                register={props.register('isVacationEnabled')}
                text={'휴가 생성 요청 기능을 사용합니다.'}
              />
            </S.RightInner>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>근무일정 생성 요청</S.Label>
            <S.RightInner>
              <Check01
                register={props.register('isScheduleEnabled')}
                text={'근무일정 생성 요청 기능을 사용합니다.'}
              />
            </S.RightInner>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>출근 요청</S.Label>
            <S.RightInner>
              <Check01
                register={props.register('isCheckInEnabled')}
                text={'출근 요청 기능을 사용합니다.'}
              />
              <S.Explanation>
                배정된 출퇴근 장소에서 출근 기록이 어려운 경우 (예: 외근, 낮은
                위치 정확도), 관리자에게 출근 요청을 보낼 수 있습니다.
              </S.Explanation>
            </S.RightInner>
          </S.RowWrapper>
          <S.RowWrapper>
            <S.Label>퇴근 요청</S.Label>
            <S.RightInner>
              <Check01
                register={props.register('isCheckOutEnabled')}
                text={'퇴근 요청 기능을 사용합니다.'}
              />
              <S.Explanation>
                배정된 출퇴근 장소에서 퇴근 기록이 어려운 경우 (예: 외근, 낮은
                위치 정확도), 관리자에게 퇴근 요청을 보낼 수 있습니다.
              </S.Explanation>
            </S.RightInner>
          </S.RowWrapper>
        </S.ColWrapper>
      </form>
    </S.Container>
  );
};

export default CompanyPresenter;
