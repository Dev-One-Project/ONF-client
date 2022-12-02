import {
  QuestionCircleOutlined,
  ReloadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import * as S from '../layout.styles';
import { IUserHeaderProps } from '../layout.types';

const UserHeaderPage = (props: IUserHeaderProps) => {
  const [isOn, setIsOn] = useState(false);
  const btnArray = ['스케줄', '출퇴근기록', '요청내역'];

  return (
    <>
      <S.Header>
        <S.Section>
          <img src='/' alt='로고' />
          <S.Ul tab={props.tab}>
            {btnArray.map((el: any, i: number) => (
              <li id={String(i + 1)} onClick={props.onClickTab} key={i}>
                {el}
              </li>
            ))}
          </S.Ul>
        </S.Section>

        <section>
          <S.Ul2>
            <S.Switch onClick={() => setIsOn(!isOn)} className='switch'>
              <S.Strong isOn={isOn}>{isOn ? '근무중' : '근무끝'}</S.Strong>
              <S.Groove isOn={isOn}>
                <S.Handle isOn={isOn} />
              </S.Groove>
              <S.Indicator isOn={isOn} />
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
          </S.Ul2>
        </section>
      </S.Header>
    </>
  );
};
export default UserHeaderPage;
