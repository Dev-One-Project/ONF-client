import styled from '@emotion/styled';
import { styleSet } from '../../../../../../commons/styles/styleSet';

export const ModalBox = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 72rem;
  min-height: 30rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0 0;
  gap: 1rem;
`;

export const Left = styled.div`
  flex: 3;
  border-right: 1px solid #ddd;
`;
export const Right = styled.div`
  min-width: 31rem;
  flex: 2;
  padding: 1rem;
`;

export const PBox = styled(Right)`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: ${styleSet.colors.darkGray};
  }
`;

export const AccrualsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  strong {
    font-size: ${styleSet.fontSizes.small};
    color: ${styleSet.colors.primary};
    font-family: ${styleSet.fonts.B};
    :hover {
      color: #111;
      border-bottom: 1px solid #111;
      cursor: pointer;
    }
  }
`;

export const UlWrapper = styled.section`
  @media ${styleSet.breakPoints.tablet} {
    overflow: auto;
  }
  ul:first-of-type {
    border-bottom: 2px double ${styleSet.colors.gray};
    li {
      font-family: ${styleSet.fonts.EB};
    }
  }
  ul:not(:first-of-type) {
    border-bottom: 1px solid ${styleSet.colors.gray};
    li {
      font-family: ${styleSet.fonts.M};
    }
    :hover {
      background-color: #eee;
    }
  }
`;

export const SelectListUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
  li {
    min-width: 120px;
    padding: 0.5rem;
    font-family: ${styleSet.fonts.EB};
  }
  li:nth-of-type(1) {
    min-width: 80px;
  }
  li:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 120px;
  }
`;
