import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
     
      <div className="w-64 bg-white shadow-md">
        <Sidebar />
       

      </div>


      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">
          <Header/>
        <Outlet />
       
      </main>
    </div>
  );
};

export default DashboardLayout;
