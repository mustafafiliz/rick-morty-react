import { Outlet } from "react-router-dom";
import { Aside } from "../components";

const MainLayout = () => {
  return (
    <div className="flex">
      <Aside />
      <main className="flex-1 lg:px-8 pb-4 overflow-x-hidden overflow-y-auto h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
