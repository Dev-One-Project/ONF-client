import { atom } from 'recoil';
import { v4 } from 'uuid';

export const isAdminSidebarState = atom({
  key: `isAdminSidebarState/${v4()}`,
  default: true,
});

export const isNarrowWidthState = atom({
  key: `isNarrowWidthState/${v4()}`,
  default: false,
});
