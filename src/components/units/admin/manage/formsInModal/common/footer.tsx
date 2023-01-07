import styled from '@emotion/styled';
import { Divider } from 'antd';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import Btn01 from '../../../../../commons/button/btn01';

interface IFooterProps {
  onCancel: () => void;
  isEdit?: boolean;
  onSoftDelete?: () => void;
}

const Footer = (props: IFooterProps) => {
  return (
    <>
      <Divider style={{ marginBottom: '0.5rem', transform: 'scaleX(1.05)' }} />
      <Wrapper>
        <DeleteButtonBox>
          {props.isEdit && (
            <Btn01
              onClick={props.onSoftDelete}
              text="비활성화하기"
              type="button"
              bdC="#ddd"
              color="red"
            />
          )}
        </DeleteButtonBox>
        <ButtonBox>
          <Btn01
            onClick={props.onCancel}
            type="button"
            text="닫기"
            bdC="#ddd"
          />
          <Btn01
            text={props.isEdit ? '수정하기' : '추가하기'}
            color="#fff"
            bgC={styleSet.colors.primary}
            bdC={styleSet.colors.primary}
          />
        </ButtonBox>
      </Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const DeleteButtonBox = styled.div``;
