import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminLayout from "../../src/components/commons/layoutAdmin";

const AdminPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/home");
  }, []);
  return (
    <AdminLayout>
      <div>안녕해새요~ 어떻게 들어오션나용</div>
    </AdminLayout>
  );
};

export default AdminPage;
