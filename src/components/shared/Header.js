import React, { Fragment } from 'react';
import { Popover, PopoverButton, PopoverPanel , Transition} from '@headlessui/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch, HiOutlineUser} from 'react-icons/hi';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='bg-white h-16 px-4 flex justify-between items-center border-b borer-grey-600 shadow '>
        <div className='relative'>
          <HiOutlineSearch className='absolute top-1/2 -translate-y-1/2 end-1 pr-3 text-3xl text-gray-600 cursor-pointer hover:scale-105' />
            <input type='text' placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-96 border border-gray-300 rounded-md px-4' />
        </div>
        <div className='flex items-center justify-center gap-2 p-3 mr-2'>
          <Popover className="relative">
            <PopoverButton className='p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 focus:outline-none hover:scale-105 cursor-pointer'>
              <HiOutlineChatAlt fontSize={24} className=' text-gray-700 ' />
            </PopoverButton>
            <Transition 
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='transform opacity-0 translate-y-1'
              enterTo='transform opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='transform opacity-100 translate-y-0'
              leaveTo='transform opacity-0 translate-y-1'
            >
              <PopoverPanel anchor="bottom" className="absolute z-10 w-80 bg-white rounded-md shadow-lg p-4 -translate-x-5 translate-y-3 md:-translate-x-10 ">
                  this is the messages
              </PopoverPanel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <PopoverButton className='p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 focus:outline-none cursor-pointer hover:scale-105'>
              <HiOutlineBell fontSize={24} className='text-gray-700' />
            </PopoverButton>
            <Transition 
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='transform opacity-0 translate-y-1'
              enterTo='transform opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='transform opacity-100 translate-y-0'
              leaveTo='transform opacity-0 translate-y-1'
            >
              <PopoverPanel anchor="bottom" className="absolute z-10 w-80 bg-white rounded-md shadow-lg p-4 -translate-x-5 translate-y-3 md:-translate-x-10 ">
                this is the notifications 
              </PopoverPanel>
            </Transition>
          </Popover>
          <Menu>
            <MenuButton className='p-2 hover:bg-gray-200 active:bg-gray-300 rounded-full focus:outline-none hover:scale-105 cursor-pointer'>
              <HiOutlineUser fontSize={24} className=' text-gray-700 ' />
            </MenuButton>
            <MenuItems anchor="bottom"  className="absolute z-10 w-48 bg-white rounded-md shadow-lg p-4 -translate-x-5 translate-y-3 md:-translate-x-10 ">
              <MenuItem>
                <Link className="block hover: no-underline  hover:bg-gray-300 p-2 rounded-md font-semibold text-black" to="/settings">
                  Settings
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="block hover:bg-gray-300 p-2 rounded-md font-semibold text-black" to="/support">
                  Support
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="block hover:bg-gray-300 p-2 rounded-md font-semibold text-black" to="/login">
                  Sign Out
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
    </div>
  )
}

export default Header