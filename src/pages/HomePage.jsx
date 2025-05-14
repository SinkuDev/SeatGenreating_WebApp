import React from 'react'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col">
      

      {/* HERO SECTION */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to SeatPlanner</h2>
        <p className="text-lg text-gray-600 max-w-xl mb-6">
          Easily manage classroom seating arrangements with real-time visual layouts and auto seat assignments. Designed for schools, colleges, and events.
        </p>
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition-all"
        >
          Get Started
        </Link>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="shadow-lg p-6 rounded-xl bg-gradient-to-br from-blue-200 to-blue-100">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Set Room Layout</h3>
          <p className="text-gray-600">Define rooms, seating capacity, and blueprint easily with drag & drop UI.</p>
        </div>
        <div className="shadow-lg p-6 rounded-xl bg-gradient-to-br from-purple-200 to-purple-100">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Auto Seat Generator</h3>
          <p className="text-gray-600">Automatically assign students to seats based on exam rules or preferences.</p>
        </div>
        <div className="shadow-lg p-6 rounded-xl bg-gradient-to-br from-green-200 to-green-100">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">View & Export</h3>
          <p className="text-gray-600">Visualize seating in real time and export arrangements as PDF or CSV.</p>
        </div>
      </section>
     
    </div>
  )
}

export default HomePage