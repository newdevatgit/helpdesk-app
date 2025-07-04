import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-auto bg-white">
          {children || <Outlet />} {/* supports both direct child and nested routes */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
