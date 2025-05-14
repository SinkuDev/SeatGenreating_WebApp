import React from 'react'

const Topbar = () => {
  return (
    <div className="ml-64 h-16 bg-black shadow flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-10">
      <h3 className="text-xl font-semibold text-gray-800">Welcome, Admin</h3>
      <div className="text-gray-500 text-sm">🔔 Notifications</div>
    </div>
  )
}

export default Topbar