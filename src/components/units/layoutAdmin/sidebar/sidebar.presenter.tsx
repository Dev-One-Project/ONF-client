import * as S from './sidebar.styles';
import { IAdminSidebarPresenterProps } from './sidebar.types';

const AdminSidebarPresenter = (props: IAdminSidebarPresenterProps) => {
  return (
    <S.Wrapper
      isAdminSidebar={props.isAdminSidebar}
      isNarrowWidth={props.isNarrowWidth}
    >
      <S.Container>
        {props.sidebarLink?.map((el) => (
          <S.List key={el.id} id={el.address} onClick={props.onClickList}>
            <S.Svg>{el.svg}</S.Svg>
            <S.Text
              isAdminSidebar={props.isAdminSidebar}
              isNarrowWidth={props.isNarrowWidth}
            >
              {el.name}
            </S.Text>
          </S.List>
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default AdminSidebarPresenter;
