import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
       <div >
      {/* NAVBAR */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">SeatPlanner</h1>
        <div>
          <Link to="/auth/login" className="text-blue-600 font-semibold mr-4 hover:underline">
            Login
          </Link>
          <Link to="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Sign Up
          </Link>
        </div>
      </nav>
      </div>

  )
}

export default Header