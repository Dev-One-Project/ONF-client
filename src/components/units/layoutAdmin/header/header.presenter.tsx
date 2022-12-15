import {
  ArrowRightOutlined,
  MenuOutlined,
  ReloadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import Switch01 from '../../../commons/switch/switch01';
import * as S from './header.styles';
import { IAdminHeaderPresenterProps } from './header.types';

const AdminHeaderPresenter = (props: IAdminHeaderPresenterProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Section>
          <S.Ul>
            <li>
              <MenuOutlined onClick={props.onClickMenu} />
            </li>
          </S.Ul>
          <img src="/" alt="로고" />
        </S.Section>
      </S.Header>
      <S.Section>
        <S.Ul>
          <Switch01 />
          <li>
            <ReloadOutlined />
          </li>
          <li>
            <SettingOutlined />
          </li>
        </S.Ul>
        <S.ChangeBtn>
          <ArrowRightOutlined />
          <span>
            {typeof window !== 'undefined' && window.outerWidth < 767
              ? '직원 모드'
              : '직원 모드로 전환'}
          </span>
        </S.ChangeBtn>
      </S.Section>
    </S.Wrapper>
  );
};

export default AdminHeaderPresenter;
