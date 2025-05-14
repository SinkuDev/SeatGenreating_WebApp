// src/components/Sidebar.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen shadow fixed top-0 left-0 px-6 py-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-10">Exam Portal</h2>
      <nav className="space-y-6 text-gray-700">
        <Link to="/dashboard" className="block hover:text-purple-600">Dashboard</Link>
        <Link to="/dashboard/upload-students" className="block hover:text-purple-600">Students data</Link>
        <Link to="/dashboard/room-layout" className="block hover:text-purple-600">Rooms layout</Link>
       
     
      </nav>
    </div>
  );
};

export default Sidebar;
