import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} SeatPlanner. All rights reserved.
      </footer>
  )
}

export default Footer