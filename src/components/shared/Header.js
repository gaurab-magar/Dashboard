import React from 'react'
import {HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch} from 'react-icons/hi'
const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b borer-grey-600 shadow '>
        <div className='relative'>
          <HiOutlineSearch className='absolute top-1/2 -translate-y-1/2 end-1 pr-3 text-3xl text-gray-600 cursor-pointer hover:scale-105' />
            <input type='text' placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-96 border border-gray-300 rounded-md px-4' />
        </div>
        <div className='flex items-center justify-center gap-4 p-3 mr-2'>
          <HiOutlineChatAlt fontSize={24} className='cursor-pointer hover:scale-105' />
          <HiOutlineBell fontSize={24} className='cursor-pointer hover:scale-105' />
        </div>
    </div>
  )
}

export default Header