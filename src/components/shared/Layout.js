import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-300 h-screen w-screen overflow-hidden'>
          <Sidebar />
          <div className='flex-1'>
            <Header />
            <div className='p-4'> 
              {<Outlet />}
            </div>
            <Footer />
          </div>
    </div>
  )
}

export default Layout