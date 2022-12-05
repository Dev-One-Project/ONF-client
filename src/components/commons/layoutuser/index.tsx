import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import UserHeaderPage from './header';
import { IUserLayoutProps } from './layout.types';
import UserSideBar from './sidebar';

const HIDDEN = ['/login'];

const UserLayout = (props: IUserLayoutProps) => {
  const router = useRouter();
  const hidden = HIDDEN.includes(router.asPath);

  const [tab, setTab] = useState('1');

  const onClickTab = (event: any) => {
    setTab(event?.currentTarget.id);
  };

  return (
    <>
      {!hidden && <UserHeaderPage tab={tab} onClickTab={onClickTab} />}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {!hidden && <UserSideBar tab={tab} />}
        <body>{props.children}</body>
      </div>
    </>
  );
};
export default UserLayout;
