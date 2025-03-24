import Sidebar from "../features/nav/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
