import AdminHeaderPage from "./header";
import AdminSidebarPage from "./sidebar";

interface IAdminLayoutProps {
  children: JSX.Element;
}

const AdminLayout = (props: IAdminLayoutProps) => {
  return (
    <>
      <AdminHeaderPage />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <AdminSidebarPage />
        <div style={{ margin: "70px 50px 0 120px" }}>{props.children}</div>
      </div>
    </>
  );
};
export default AdminLayout;
