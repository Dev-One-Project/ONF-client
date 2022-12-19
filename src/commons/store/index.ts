import { atom } from 'recoil';

export const isAdminSidebarState = atom({
  key: 'isAdminSidebarState',
  default: true,
});

export const isNarrowWidthState = atom({
  key: 'isNarrowWidth',
  default: false,
});
