import * as S from './join.styles';
import Btn01 from '../../../commons/button/btn01';
import Input01 from '../../../commons/input/input01';
import FallingModal from '../../../commons/modal/fallingModal';
import { styleSet } from '../../../../commons/styles/styleSet';

const EmployeeModal = (props: any) => {
  return (
    <>
      {props.isOpenEmployee && (
        <FallingModal
          setIsOpen={props.setIsOpenEmployee}
          isOpen={props.isOpenEmployee}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          width={'600px'}
          title={'직장 합류 (직원용)'}
        >
          <>
            <S.EmployeeModal>
              <div>
                <span>합류코드</span> <Input01 type={'text'} />
              </div>
              <p>
                * 합류코드는 관리자에게서 받은 초대 이메일/문자메시지에서 찾을
                수 있습니다.
                <br />
                &nbsp;&nbsp; 합류코드를 받지 못했다면, 관리자에게 문의하세요.
              </p>
              <S.ButtonBox>
                <Btn01
                  text="합류하기"
                  type="button"
                  bdC={styleSet.colors.primary}
                  bgC={styleSet.colors.primary}
                  color="#fff"
                />
              </S.ButtonBox>
            </S.EmployeeModal>
          </>
        </FallingModal>
      )}
    </>
  );
};
export default EmployeeModal;
