import { MouseEvent } from 'react';

export interface IAdminSidebarPresenterProps {
  sidebarLink?: Array<{ id: number; address: string; name: string; svg?: any }>;
  onClickList?: (event: MouseEvent<HTMLLIElement>) => void;
  isAdminSidebar: boolean;
  isNarrowWidth?: boolean;
}
