import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='bg-white p-6 rounded shadow-md w-full max-w-md'>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout