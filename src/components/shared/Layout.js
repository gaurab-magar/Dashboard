import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <div className="flex flex-row bg-neutral-300 h-screen w-full overflow-x-hidden">
        <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex-1 p-4">
              <Outlet />
            </div>
            <Footer />
          </div>
      </div>
    </>
  );
};

export default Layout;
