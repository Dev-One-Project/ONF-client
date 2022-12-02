export interface IUserHeaderProps {
  isOn?: boolean;
  tab?: string;
  onClickTab?: (event: any) => void;
}

export interface IUserLayoutProps extends IUserLayout {}

export interface IUserLayout {
  children: JSX.Element;
}

export interface IUserSideBar {
  tab?: string;
}
