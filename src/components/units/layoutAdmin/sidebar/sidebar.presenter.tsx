import * as S from './sidebar.styles';
import { IAdminSidebarPresenterProps } from './sidebar.types';

const AdminSidebarPresenter = (props: IAdminSidebarPresenterProps) => {
  return (
    <S.Wrapper
      isAdminSidebar={props.isAdminSidebar}
      isNarrowWidth={props.isNarrowWidth}
    >
      <S.Container>
        {props.sidebarLink?.map((link) => (
          <S.List
            key={link.id}
            id={link.address}
            onClick={props.onClickList}
            isAdminSidebar={props.isAdminSidebar}
          >
            <S.Svg>{link.svg}</S.Svg>
            <S.Text
              isAdminSidebar={props.isAdminSidebar}
              isNarrowWidth={props.isNarrowWidth}
            >
              {link.name}
            </S.Text>
          </S.List>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default AdminSidebarPresenter;
