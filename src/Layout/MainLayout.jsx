import React, { Children } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = ({}) => {
  return (
    <>
    <Header/>

    <main className='p-4 '>
      {/* {children} */}
      <Outlet />
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout