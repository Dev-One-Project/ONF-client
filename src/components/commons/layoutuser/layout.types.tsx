import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface IUserHeaderProps {}

export interface IUserLayoutProps extends IUserLayout {}

export interface IUserLayout {
  children: JSX.Element;
}

export interface IUserSideBar {
  register?: any;
}
