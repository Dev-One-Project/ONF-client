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

export const accessTokenState = atom({
  key: `accessTokenState/${v4()}`,
  default: '',
});

export const isNoticeModalState = atom({
  key: `isNoticeModalState/${v4()}`,
  default: false,
});

export const changeNoticeBoardIdState = atom({
  key: `changeNoticeBoardIdState/${v4()}`,
  default: '',
});
