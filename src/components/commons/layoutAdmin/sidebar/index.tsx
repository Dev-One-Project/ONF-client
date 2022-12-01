import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Wrapper = styled.div`
  width: 100px;
  height: 100vh;
  background: #e47e7e;
  position: fixed;
  z-index: 0;
  padding-top: 50px;
`;

const SidebarLink = [
  { id: "/admin/home", name: "홈" },
  { id: "/admin/scheduler/calendar", name: "근무일정" },
  { id: "/admin/scheduler/calendar", name: "달력형" },
  { id: "/admin/scheduler/list", name: "목록형" },
  { id: "/admin/attendances/calendar", name: "출퇴근기록" },
  { id: "/admin/attendances/calendar", name: "달력형" },
  { id: "/admin/attendances/list", name: "목록형" },
  { id: "/admin/leaves", name: "휴가" },
  { id: "/admin/leaves", name: "휴가 목록" },
  { id: "/admin/leaves-accruals", name: "휴가 발생" },
  { id: "/admin/manage", name: "관리" },
  { id: "/admin/profile", name: "프로필" },
];

const AdminSidebarPage = () => {
  const router = useRouter();

  const onClickPage = (event: MouseEvent<HTMLLIElement>) => {
    router.push(event?.currentTarget.id);
  };

  return (
    <Wrapper>
      <ul>
        {SidebarLink.map((el) => {
          return (
            <li style={{ cursor: "pointer" }} id={el.id} onClick={onClickPage}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default AdminSidebarPage;
