import * as S from './list.styles';

const NoticeListPresenter = () => {
  return (
    <>
      <S.H2>공지사항</S.H2>
      <S.Container>
        <S.ColWrapper right={true}>
          <S.ListUl>
            <li>
              <S.Preface>머릿말</S.Preface>
              <span>제목</span>
              <S.DateStyle>2022-12-12</S.DateStyle>
            </li>
            <li>
              <S.Preface>머릿말</S.Preface>
              <span>제목</span>
              <S.DateStyle>2022-12-12</S.DateStyle>
            </li>
            <li>
              <S.Preface>머릿말</S.Preface>
              <span>제목</span>
              <S.DateStyle>2022-12-17</S.DateStyle>
            </li>
            <li>
              <S.Preface>머릿말</S.Preface>
              <span>제목</span>
              <S.DateStyle>2022-12-17</S.DateStyle>
            </li>
          </S.ListUl>
        </S.ColWrapper>
        <S.ColWrapper right={false}>
          <S.DetailTop>
            <S.Title>제목</S.Title>
            <S.DateStyle>2022-12-17</S.DateStyle>
          </S.DetailTop>
          <S.Contents>내용</S.Contents>
        </S.ColWrapper>
      </S.Container>
    </>
  );
};

export default NoticeListPresenter;
