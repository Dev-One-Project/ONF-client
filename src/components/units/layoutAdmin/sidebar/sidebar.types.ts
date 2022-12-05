import { Component, MouseEvent } from "react";

export interface IAdminSidebarPresenterProps {
  sidebarLink: { id: number; address: string; name: string; svg?: any }[];
  onClickList: (event: MouseEvent<HTMLLIElement>) => void;
}
