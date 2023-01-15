export interface IUserLayout {
  children: JSX.Element;
}

export interface IUserSideBar {
  register?: any;
}

export interface IWorkEnd {
  onClickWorkEndCheck: () => Promise<void>;
  status: boolean;
}
