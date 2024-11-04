import React from 'react'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <div>Sidebar</div>
        <div>Header</div>
        <div>{<Outlet />}</div>
        <div>Footer</div>
    </div>
  )
}

export default Layout