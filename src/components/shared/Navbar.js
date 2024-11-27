import {
    HiOutlineBell,
    HiOutlineChatAlt,
    HiOutlineMenuAlt1,
    HiOutlineSearch,
    HiOutlineUser,
  } from "react-icons/hi";
  
  export default function ResponsiveNavbar({ toggleSidebar }) {
    return (
      <nav className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
        {/* Left Section: Hamburger Menu */}
        <button
          className="flex items-center text-white border border-white"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <HiOutlineMenuAlt1 size={24} />
        </button>
  
        {/* Center Section: Search Bar */}
        <div className="flex justify-center text-white border border-white">
          <div className="relative w-full max-w-xs">
            <input
              type="search"
              placeholder="Search..."
              className="w-full bg-gray-700 text-white py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </div>
  
        {/* Right Section: Notification, Messages, Profile Icons */}
        <div className="hidden md:flex items-center space-x-4 text-white border border-white">
          <button
            aria-label="View Notifications"
            className="p-2 hover:bg-gray-700 rounded-full"
          >
            <HiOutlineBell className="h-6 w-6" />
          </button>
          <button
            aria-label="View Messages"
            className="p-2 hover:bg-gray-700 rounded-full"
          >
            <HiOutlineChatAlt className="h-6 w-6" />
          </button>
          <button
            aria-label="View Profile"
            className="p-2 hover:bg-gray-700 rounded-full"
          >
            <HiOutlineUser className="h-6 w-6" />
          </button>
        </div>
      </nav>
    );
  }
  