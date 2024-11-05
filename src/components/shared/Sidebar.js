import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-neutral-900 w-70 p-4 text-white'>
        <div className='flex-1'>My Dashboard</div>
        <div className='text-lg'>Open Shop</div>
        <div className='text-red-600 font-semibold'>LogOut</div>
    </div>
  )
}

export default Sidebar