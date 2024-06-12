import { Outlet } from "react-router-dom";
import { Aside } from "../components";

const MainLayout = () => {
  return (
    <div className="flex">
      <Aside />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
