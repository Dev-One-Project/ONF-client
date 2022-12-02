import { useState } from 'react';
import UserHeaderPage from './header';
import { IUserLayoutProps } from './layout.types';
import UserSideBar from './sidebar';

const UserLayout = (props: IUserLayoutProps) => {
  const [tab, setTab] = useState('1');

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  return (
    <>
      <UserHeaderPage tab={tab} onClickTab={onClickTab} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <UserSideBar tab={tab} />
        <div style={{ margin: '70px 50px 0 120px' }}>{props.children}</div>
      </div>
    </>
  );
};
export default UserLayout;
