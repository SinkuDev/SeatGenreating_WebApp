import React from 'react'
import { Routes, Route } from 'react-router-dom';


import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';




import MainLayout from '../Layout/MainLayout';
import AuthLayout from '../Layout/AuthLayout';
import DashboardLayout from '../Layout/DashboardLayout';


import Dashboard from '../pages/Dashboard/Dashboard';
import UploadStudents from '../pages/Dashboard/UploadStudents';
import RoomLayout from '../pages/Dashboard/RoomLayout';





const AppRouter = () => {
  return (
   
    <Routes>
      

      {/*  Main Layout Pages */}

      <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          {/* <Route path='login' element={<Login/>}/> */}


      </Route>

      {/*  Auth Layout Pages */}

      <Route path='/auth' element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />

      </Route>

      {/*  Dashboard Layout Pages */}

      <Route path='/dashboard' element={<DashboardLayout />}>
      <Route index element={<Dashboard/>}/>
      <Route path='upload-students' element={<UploadStudents/>}/>
      <Route path='room-layout' element={<RoomLayout/>}/>

      </Route>

      
     

      
    </Routes>
  )
}

export default AppRouter