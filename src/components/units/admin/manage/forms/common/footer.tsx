import styled from '@emotion/styled';
import { Divider } from 'antd';
import { styleSet } from '../../../../../../commons/styles/styleSet';
import Btn01 from '../../../../../commons/button/btn01';

interface IFooterProps {
  onCancel: () => void;
}

const Footer = (props: IFooterProps) => {
  return (
    <>
      <Divider style={{ marginBottom: '0.5rem' }} />
      <Wrapper>
        <div></div>
        <ButtonBox>
          <Btn01
            onClick={props.onCancel}
            type="button"
            text="닫기"
            bdC="#ddd"
          />
          <Btn01
            text="저장"
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
  padding: 0.5rem 1rem;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
