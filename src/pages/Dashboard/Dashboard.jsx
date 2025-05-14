// src/pages/Dashboard.jsx
import React from "react";
import Sidebar from "../../components/Sidebar";
import DashboardCard from "../../components/DashboardCard";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content */}
      <div className="ml-5 w-full p-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard title="Total Students" value="580" icon="🎓" />
          <DashboardCard title="Rooms" value="12" icon="🏫" />
          <DashboardCard title="Seating Plans" value="8" icon="📄" />
          <DashboardCard title="Last Updated" value="May 12" icon="🕒" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
