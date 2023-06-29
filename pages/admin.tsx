import AdminTemplate from "@/components/Templates/Admin";
import Dashboard from "@/components/Organisms/Dashboard";
import General from "@/components/Organisms/General";
import Collections from "@/components/Organisms/Collections";
import Users from "@/components/Organisms/Users";
import useStore from "@/hooks/global/useStore";

const Admin = () => {
  const sidenav = useStore((state) => state.sidenav, ["admin"]);
  const Content = () => {
    switch (sidenav) {
      case "general":
        return <General />;
      case "collections":
        return <Collections />;
      case "users":
        return <Users />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AdminTemplate>
      <Content />
    </AdminTemplate>
  );
};

export default Admin;
