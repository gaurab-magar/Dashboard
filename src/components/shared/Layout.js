import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-300 h-screen w-screen overflow-hidden'>
          <Sidebar />
        <div>Header</div>
        <div>{<Outlet />}</div>
        <div>Footer</div>
    </div>
  )
}

export default Layout