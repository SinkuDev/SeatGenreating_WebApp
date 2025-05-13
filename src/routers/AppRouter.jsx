import React from 'react'
import { Routes, Route } from 'react-router-dom';

import About from '../pages/About';

import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';


const AppRouter = () => {
  return (
   
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/*' element={<About/>}/>
      
    </Routes>
  )
}

export default AppRouter