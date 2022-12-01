import * as S from "./manage.styles";
import Btn01 from "../../../commons/button/btn01";
import { IManagePresenterProps } from "./manage.types";
import { styleSet } from "../../../../commons/styles/styleSet";
import Input01 from "../../../commons/input/input01";

const ManagePresenter = (props: IManagePresenterProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>회사 설정</S.H1>
        <Btn01
          text={"저장"}
          color={styleSet.colors.white}
          bgC={styleSet.colors.primary}
        />
      </S.TopWrapper>

      <>일반 설정</>
      <S.ColWrapper>
        <S.RowWrapper>
          <S.Label>회사명</S.Label>
          <Input01 type={"text"} register={props.register} />
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Label>회사로고</S.Label>
          <Input01 type={"text"} register={props.register} />
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Label>회사 지정 휴일</S.Label>
          <ul>
            <li>
              <span>휴일명</span>
              <span>날짜</span>
              <span>할증률</span>
            </li>
            <li>
              <input />
              <input />
              <input />
            </li>
          </ul>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Label>회사 방침</S.Label>
          <textarea
            {...props.register}
            placeholder={
              "직원들에게 공유할 취업규칙 혹은 출결 관련 사규를 작성하세요."
            }
          />
        </S.RowWrapper>

        <>출퇴근 기록</>
        <S.RowWrapper>
          <S.Label>출근 기능</S.Label>
          <>
            <span>근무일정 시작 전 출근 허용 시간</span>
            <Input01 type={"checkbox"} register={props.register} />
            <p>
              (스케줄된 근무일정 시작 전, 근무일정으로 출근할 수 있는 최대 허용
              시간을 선택하세요. 출근 허용 시간이 벗어나면, '무일정 근무 설정'에
              따라 출근이 불가능하거나 무일정 출근을 할 수 있습니다.)
            </p>
          </>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Label>퇴근 기능</S.Label>
          <>
            <span>퇴근 허용 시간</span>
            <Input01 type={"checkbox"} register={props.register} />
            <p>
              (출근 후 허용 시간이 지나면 퇴근이 누락된 걸로 간주, 출근 버튼을
              다시 보여줍니다. 퇴근처리되지 않은 출퇴근기록들은 느낌표로
              표시됩니다.)
            </p>
          </>
        </S.RowWrapper>

        <>요청 기능</>
        <S.RowWrapper>
          <S.Label>출퇴근 기록 생성</S.Label>
          <>
            <Input01 type={"checkbox"} register={props.register} />
            <span>출퇴근기록 생성 요청 기능을 사용합니다.</span>
            <p>
              (출근을 누락한 경우, 출퇴근기록 생성 요청을 보낼 수 있습니다.)
            </p>
          </>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Label>휴가 생성 요청</S.Label>
          <>
            <Input01 type={"checkbox"} register={props.register} />
            <span>휴가 생성 요청 기능을 사용합니다.</span>
          </>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Label>근무일정 생성 요청</S.Label>
          <>
            <Input01 type={"checkbox"} register={props.register} />
            <span>근무일정 생성 요청 기능을 사용합니다.</span>
          </>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Label>출근 요청</S.Label>
          <>
            <Input01 type={"checkbox"} register={props.register} />
            <span>출근 요청 기능을 사용합니다.</span>
            <p>
              배정된 출퇴근 장소에서 출근 기록이 어려운 경우 (예: 외근, 낮은
              위치 정확도), 관리자에게 출근 요청을 보낼 수 있습니다.
            </p>
          </>
        </S.RowWrapper>
        <S.RowWrapper>
          <S.Label>퇴근 요청</S.Label>
          <>
            <Input01 type={"checkbox"} register={props.register} />
            <span>출근 요청 기능을 사용합니다.</span>
            <p>
              배정된 출퇴근 장소에서 퇴근 기록이 어려운 경우 (예: 외근, 낮은
              위치 정확도), 관리자에게 퇴근 요청을 보낼 수 있습니다.
            </p>
          </>
        </S.RowWrapper>
      </S.ColWrapper>
    </S.Container>
  );
};

export default ManagePresenter;
