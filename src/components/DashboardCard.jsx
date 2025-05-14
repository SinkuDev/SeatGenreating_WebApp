import React from 'react'

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition w-full">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm text-gray-500">{title}</h4>
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  )
}

export default DashboardCard