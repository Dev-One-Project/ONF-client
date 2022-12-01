import TableTh from "../../../src/components/commons/table/tableTh";

const List = [
  { id: 1, name: "직원" },
  { id: 2, name: "날짜" },
  { id: 3, name: "일정시간" },
  { id: 4, name: "근무 유형" },
  { id: 5, name: "지점" },
];

const AdminHomePage = () => {
  return (
    <>
      <TableTh list={List} />
    </>
  );
};

export default AdminHomePage;
