import * as S from './join.styles';
import Btn01 from '../../../commons/button/btn01';
import Input01 from '../../../commons/input/input01';
import FallingModal from '../../../commons/modal/fallingModal';
import { styleSet } from '../../../../commons/styles/styleSet';
import { IModalDate } from './join.types';

const AdminModal = (props: IModalDate) => {
  return (
    <>
      {props.isOpenAdmin && (
        <FallingModal
          setIsOpen={props.setIsOpenAdmin}
          isOpen={props.isOpenAdmin}
          aniMode={props.aniMode}
          onCancel={props.onClickCloseModal}
          width={'600px'}
          title={'회사 만들기 (최고관리자)'}
        >
          <S.AdminModal>
            <div>
              <p>별도의 기기 설치나 계약 없이</p>
              <p>
                시프티의 모든 기능을 이용해보실 수 있습니다. 지금 바로
                시작하세요.
              </p>
            </div>
            <ul>
              <li>
                <span>회사명</span> <Input01 type={'text'} />
              </li>
              <li>
                <span>도입 인원 수</span>{' '}
                <select>
                  <option disabled>선택안됨</option>
                  <option value="1 - 19">1 -19</option>
                  <option value="20 - 49">20 - 49</option>
                  <option value="50 - 99">50 - 99</option>
                  <option value="100 - 299">100 - 299</option>
                  <option value="300 - 499">300 - 499</option>
                </select>
              </li>
              <li>
                <span>유입경로</span>{' '}
                <S.SelectPeople>
                  <option disabled>선택안됨</option>
                  <option value="구글 검색">구글 검색</option>
                  <option value="네이버 검색">네이버 검색</option>
                  <option value="블로그 (시프티 공식 블로그, 네이버 블로그 등)">
                    블로그 (시프티 공식 블로그, 네이버 블로그 등)
                  </option>
                  <option value="SNS (페이스북, 인스타그램 등)">
                    SNS (페이스북, 인스타그램 등)
                  </option>
                  <option value="지인 추천">지인 추천</option>
                </S.SelectPeople>
              </li>
            </ul>
            <S.ButtonBox>
              <Btn01
                text="선택완료"
                type="button"
                bdC={styleSet.colors.primary}
                bgC={styleSet.colors.primary}
                color="#fff"
              />
            </S.ButtonBox>
          </S.AdminModal>
        </FallingModal>
      )}
    </>
  );
};
export default AdminModal;
