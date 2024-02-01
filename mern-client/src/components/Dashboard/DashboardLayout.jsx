import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex gap-4 flex-col md:flex-row">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
