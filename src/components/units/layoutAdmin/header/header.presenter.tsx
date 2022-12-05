import {
  ArrowRightOutlined,
  MenuOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import * as S from './header.styles';
import { IAdminHeaderProps } from './header.types';

const AdminHeaderPresenter = (props: IAdminHeaderProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Section>
          <S.Ul>
            <li>
              <MenuOutlined />
            </li>
          </S.Ul>
          <img src="/" alt="로고" />
        </S.Section>
      </S.Header>
      <S.Section>
        <S.Ul>
          <S.Switch onClick={props.onClickSwitch} className="switch">
            <S.Strong isOn={props.isOn}>
              {props.isOn ? '근무중' : '근무끝'}
            </S.Strong>
            <S.Groove isOn={props.isOn}>
              <S.Handle isOn={props.isOn} />
            </S.Groove>
            <S.Indicator isOn={props.isOn} />
          </S.Switch>
          <li>
            <ReloadOutlined />
          </li>
          <li>
            <QuestionCircleOutlined />
          </li>
          <li>
            <SettingOutlined />
          </li>
        </S.Ul>
        <S.ChangeBtn>
          <ArrowRightOutlined />
          <span>직원 모드로 전환</span>
        </S.ChangeBtn>
      </S.Section>
    </S.Wrapper>
  );
};

export default AdminHeaderPresenter;
